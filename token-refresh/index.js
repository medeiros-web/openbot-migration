/**
 * Serviço de refresh automático de tokens Google OAuth2
 * Atualiza tokens a cada 45 minutos nos workflows n8n
 */
const https = require('https');

const CONFIG = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN || '',
  },
  n8n: {
    baseUrl: process.env.N8N_BASE_URL || 'https://auto.chatatender.ia.br',
    apiKey: process.env.N8N_API_KEY || '',
    workflowIds: ['rGrlPwGxJVkWIQ1r', 'YZs1k1nQC4mjEgD7'],
  },
  intervalMs: 45 * 60 * 1000, // 45 minutos
};

function httpRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function refreshGoogleToken() {
  console.log(`[${new Date().toISOString()}] Renovando token Google...`);

  const body = new URLSearchParams({
    client_id: CONFIG.google.clientId,
    client_secret: CONFIG.google.clientSecret,
    refresh_token: CONFIG.google.refreshToken,
    grant_type: 'refresh_token',
  }).toString();

  const resp = await httpRequest({
    hostname: 'oauth2.googleapis.com',
    path: '/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(body),
    },
  }, body);

  if (resp.status !== 200 || !resp.body.access_token) {
    throw new Error(`Falha no refresh: ${JSON.stringify(resp.body)}`);
  }

  console.log(`[${new Date().toISOString()}] Token renovado. Expira em ${resp.body.expires_in}s`);
  return resp.body.access_token;
}

async function updateWorkflowToken(workflowId, newToken) {
  // Buscar workflow atual
  const getResp = await httpRequest({
    hostname: 'auto.chatatender.ia.br',
    path: `/api/v1/workflows/${workflowId}`,
    method: 'GET',
    headers: { 'X-N8N-API-KEY': CONFIG.n8n.apiKey },
  }, null);

  if (getResp.status !== 200) {
    console.error(`Erro ao buscar workflow ${workflowId}: ${getResp.status}`);
    return;
  }

  // Atualizar todos os nós com o token hardcoded do Google
  const wf = getResp.body;
  let updated = false;

  wf.nodes = wf.nodes.map((node) => {
    if (node.parameters?.headerParameters?.parameters) {
      node.parameters.headerParameters.parameters = node.parameters.headerParameters.parameters.map((param) => {
        if (param.name === 'Authorization' && param.value && param.value.includes('ya29.')) {
          param.value = `Bearer ${newToken}`;
          updated = true;
        }
        return param;
      });
    }
    return node;
  });

  if (!updated) return;

  // Remover campos proibidos pela API n8n
  delete wf.versionId;
  delete wf.active;

  const body = JSON.stringify(wf);
  const putResp = await httpRequest({
    hostname: 'auto.chatatender.ia.br',
    path: `/api/v1/workflows/${workflowId}`,
    method: 'PUT',
    headers: {
      'X-N8N-API-KEY': CONFIG.n8n.apiKey,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
  }, body);

  if (putResp.status === 200) {
    console.log(`[${new Date().toISOString()}] Workflow ${workflowId} atualizado com novo token.`);
  } else {
    console.error(`Erro ao atualizar workflow ${workflowId}: ${putResp.status}`);
  }
}

async function run() {
  try {
    if (!CONFIG.google.clientId || !CONFIG.google.clientSecret) {
      console.warn('GOOGLE_CLIENT_ID ou GOOGLE_CLIENT_SECRET não configurados. Serviço em modo passivo.');
      return;
    }
    const newToken = await refreshGoogleToken();
    for (const wfId of CONFIG.n8n.workflowIds) {
      await updateWorkflowToken(wfId, newToken);
    }
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Erro no refresh:`, err.message);
  }
}

// Executar imediatamente e depois a cada 45 minutos
run();
setInterval(run, CONFIG.intervalMs);
console.log(`Serviço de token refresh iniciado. Intervalo: ${CONFIG.intervalMs / 60000} minutos.`);
