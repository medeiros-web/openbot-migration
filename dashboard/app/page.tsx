export const revalidate = 0;

const workflows = [
  {
    id: "rGrlPwGxJVkWIQ1r",
    name: "IA Jurídica Principal",
    desc: "Recebe mensagens do Chatwoot, verifica horário, busca histórico e responde via GROK.",
    icon: "⚖️",
    tag: "GROK + Histórico",
    tagType: "success",
    webhook: "webhook.chatatender.ia.br/openbot-ia",
  },
  {
    id: "YZs1k1nQC4mjEgD7",
    name: "Agendamento Google Calendar",
    desc: "Verifica disponibilidade no Google Calendar, cria eventos com Google Meet e envia confirmação.",
    icon: "📅",
    tag: "Google Meet",
    tagType: "warning",
    webhook: "webhook.chatatender.ia.br/openbot-agendamento",
  },
  {
    id: "aiDdNEU7UK6gkkz9",
    name: "Follow-up Automático",
    desc: "Verifica conversas inativas há 24h e envia mensagem personalizada gerada por IA.",
    icon: "🔁",
    tag: "Cron · a cada hora",
    tagType: "",
    webhook: "cron",
  },
];

const config = [
  ["Modelo IA", "x-ai/grok-2-latest (via OpenRouter)"],
  ["Temperatura", "0.7"],
  ["Máx. tokens", "1.000"],
  ["Histórico de msgs", "10 mensagens"],
  ["Delay de resposta", "10 segundos"],
  ["Horário de atend.", "Seg–Sex: 09:00–11:00 e 14:00–16:00 (Brasília)"],
  ["Duração da consulta", "1 hora"],
  ["Google Meet", "Habilitado"],
  ["Follow-up inatividade", "24 horas"],
  ["Contas Google", "medeirosassessor.adv@gmail.com"],
  ["Webhook Chatwoot ID", "#7 — OpenBot IA Juridica (GROK)"],
  ["Versão backup OpenBot", "6.0.5"],
];

const featuredLinks = [
  {
    label: "WhatsApp Havek",
    url: "https://whatsapp.havek.ai/login",
    icon: "💬",
    desc: "Plataforma de atendimento via WhatsApp",
    gradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    shadow: "rgba(37,211,102,0.35)",
  },
  {
    label: "Dankicode Creations",
    url: "https://dankicode-creations.vercel.app/",
    icon: "🚀",
    desc: "Plataforma de criações e projetos",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
    shadow: "rgba(124,58,237,0.35)",
  },
];

const links = [
  { label: "Atendimento", url: "https://atendimento-web.vercel.app", icon: "🎧" },
  { label: "Login Atend.", url: "https://wmm.chatatender.ia.br/login", icon: "🔑" },
  { label: "ChatAtender", url: "https://chatatender.vercel.app/login", icon: "💼" },
  { label: "Webhook n8n", url: "https://webhook.chatatender.ia.br/login", icon: "🔗" },
  { label: "Agente IA", url: "https://agente.chatatender.ia.br", icon: "🤖" },
  { label: "WhaTicket", url: "https://whaticket.chatatender.ia.br", icon: "🎫" },
  { label: "Chatwoot", url: "https://painel.chatatender.ia.br", icon: "💬" },
  { label: "n8n Automações", url: "https://webhook.chatatender.ia.br/login", icon: "⚙️" },
  { label: "Portainer", url: "https://portainer.chatatender.ia.br", icon: "🐳" },
  { label: "Krayin CRM", url: "https://crm.chatatender.ia.br", icon: "👥" },
];

export default function Home() {
  return (
    <>
      <header>
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-badge">MA</span>
            Medeiros Assessoria Jurídica
          </div>
          <span className="status-badge active">
            <span className="dot" />
            Assistente Ativo
          </span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Painel da IA Jurídica</h1>
            <p>Migração OpenBot → n8n + Chatwoot · 3 workflows ativos</p>
          </div>
        </section>

        <div className="container">
          <p className="section-title">Workflows n8n</p>
          <div className="grid">
            {workflows.map((wf) => (
              <div className="card" key={wf.id}>
                <div className="card-icon">{wf.icon}</div>
                <h3>{wf.name}</h3>
                <p>{wf.desc}</p>
                <div className="card-footer">
                  <span className={`tag ${wf.tagType}`}>{wf.tag}</span>
                  <span className="status-badge active">
                    <span className="dot" />
                    Ativo
                  </span>
                </div>
                {wf.webhook !== "cron" && (
                  <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 12, fontFamily: "monospace" }}>
                    {wf.webhook}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="section-title">Configuração</p>
          <div className="config-table">
            {config.map(([key, val]) => (
              <div className="config-row" key={key}>
                <span className="config-key">{key}</span>
                <span className="config-val">{val}</span>
              </div>
            ))}
          </div>

          <p className="section-title">Acesso Rápido</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 16 }}>
            {featuredLinks.map((fl) => (
              <a
                key={fl.url}
                href={fl.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: fl.gradient,
                  borderRadius: 16,
                  padding: "24px 28px",
                  textDecoration: "none",
                  color: "#fff",
                  boxShadow: `0 4px 24px ${fl.shadow}`,
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                <span style={{ fontSize: 42 }}>{fl.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{fl.label}</div>
                  <div style={{ fontSize: 13, opacity: 0.9 }}>{fl.desc}</div>
                  <div style={{ fontSize: 11, opacity: 0.75, marginTop: 4, fontFamily: "monospace" }}>
                    {fl.url.replace("https://", "")}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="grid" style={{ marginBottom: 40 }}>
            {links.map((l) => (
              <a className="card" href={l.url} target="_blank" rel="noreferrer" key={l.url}>
                <div className="card-icon">{l.icon}</div>
                <h3>{l.label}</h3>
                <p style={{ fontSize: 13 }}>{l.url.replace("https://", "")}</p>
              </a>
            ))}
          </div>

          <section className="cta-section">
            <h2>Precisa de ajuda?</h2>
            <p>Acesse o Chatwoot para gerenciar conversas ou o n8n para editar workflows.</p>
            <div className="btn-group">
              <a className="btn btn-primary" href="https://painel.chatatender.ia.br" target="_blank">
                💬 Abrir Chatwoot
              </a>
              <a className="btn btn-ghost" href="https://auto.chatatender.ia.br" target="_blank">
                ⚙️ Editar Workflows
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          Medeiros Assessoria Jurídica · Assistente Virtual · {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}
