import CopyKey from "./CopyKey";
import Sidebar from "./Sidebar";

export const revalidate = 0;

const links = [
  { label: "Atendimento", url: "https://atendimento-web.vercel.app", icon: "🎧" },
  { label: "ChatAtender", url: "https://chatatender.vercel.app/login", icon: "💼" },
  { label: "Webhook n8n", url: "https://webhook.chatatender.ia.br/login", icon: "🔗" },
  { label: "Zplex", url: "https://zplex.chatatender.ia.br/auth", icon: "🎫" },
  { label: "Administração", url: "https://fala-facil-crm.vercel.app", icon: "🛠️" },
  { label: "Site", url: "https://anm.chatatender.ia.br", icon: "🌐" },
  { label: "Cloud Connect", url: "https://cloud-connect-hub.vercel.app", icon: "☁️" },
  { label: "XAMPP Companion", url: "https://xampp-companion-63e5.vercel.app", icon: "🖥️" },
  { label: "Sonic Bloom", url: "https://sonic-bloom-vault.vercel.app", icon: "🎵" },
  { label: "Processos", url: "https://processo-demanda.vercel.app", icon: "⚖️" },
  { label: "Doc Archive", url: "https://digital-document-archive-q22v.vercel.app", icon: "📁" },
  { label: "Plataforma Jurídica", url: "https://legal-ai-assistant-one.vercel.app/", icon: "⚖️" },
  { label: "Plataforma Agentes IA", url: "https://bot.chatatender.ia.br", icon: "💬" },
  { label: "Plataforma Marketing IA", url: "https://marketing-ten-tawny.vercel.app/admin", icon: "⚙️" },
  { label: "Portainer", url: "https://portainer.chatatender.ia.br", icon: "🐳" },
  { label: "Krayin CRM", url: "https://crm.chatatender.ia.br", icon: "👥" },
  { label: "Conektai", url: "https://www.conektai.com/home", icon: "🔌" },
  { label: "Creation IA", url: "https://creation.chatatender.ia.br/", icon: "📚" },
  { label: "Petição em Word", url: "https://peticaoemword.com.br/acesso/", icon: "📝" },
  { label: "Clube IA ADV", url: "https://adv-clube-ia.memberkit.com.br/", icon: "🎓" },
  { label: "Administração Geral", url: "https://remix-of-remix-oficial-vendus-ovld.vercel.app", icon: "🛠️" },
  { label: "Repositório n8n", url: "https://sunshine-project-album-c1p5.vercel.app", icon: "🗄️" },
  { label: "Plataforma Sistema de IA", url: "https://erp.chatatender.ia.br", icon: "🧠" },
  { label: "DankiCode Campus", url: "https://cursos.dankicode.com/campus", icon: "🎓" },
  { label: "AtendChat", url: "https://advogado.chatatender.ia.br/login", icon: "🗨️" },
  { label: "Marketing", url: "https://marketing.chatatender.ia.br/", icon: "📣" },
  { label: "Gerador de Propostas Comerciais", url: "https://commercial-proposal-generator-seven.vercel.app/", icon: "📄" },
  { label: "Plataformas e Cursos YouTube IA", url: "https://automation-craft-space-t62g.vercel.app", icon: "🎬" },
  { label: "Portal de Músicas", url: "https://www.packdemusicas.com.br/painel/painelmusicas.php", icon: "🎵" },
  { label: "Pack Musical", url: "https://packdemusicas.com.br/Product/05-Video-Clipes/acesso/entrar.php", icon: "🎶" },
  { label: "ERP IA", url: "https://erp.creation.dev.br/", icon: "🧮" },
  { label: "LLM Github", url: "https://ext.chatatender.ia.br/login", icon: "🐙" },
  { label: "Extensão Creation Github", url: "https://ext.chatatender.ia.br/mestres-lovable/", icon: "🧩" },
  { label: "BotWhatsApp", url: "https://bot.creation.dev.br", icon: "🤖" },
  { label: "Comunidade ADV IA", url: "https://comunidade.superinteligencia.org", icon: "🧠" },
  { label: "Violão/Treino", url: "https://www-ronaldomusic-com-br.lovable.app", icon: "🎸" },
  { label: "Integração Instagram", url: "https://directpro-v2.vercel.app", icon: "📸" },
  { label: "Credenciais / Campanhas", url: "https://medeirosapi.creation.dev.br", icon: "🔑" },
  { label: "Painel / Campanhas", url: "https://medeiros.creation.dev.br", icon: "📣" },
  { label: "MAUTIC", url: "https://mautic.creation.dev.br", icon: "📧" },
  { label: "ADV Plataforma WhatsApp", url: "https://adv.creation.dev.br", icon: "💬" },
  { label: "Supabase", url: "https://supabase.atender.adv.br", icon: "🗄️" },
  { label: "Gerador de Anúncios", url: "https://maquinadeconteudo.universotech.site/app", icon: "📢" },
  { label: "Agency de Marketing", url: "https://agency.creation.dev.br", icon: "📈" },
  { label: "ESCRITÓRIO JURÍDICO", url: "https://aiprolibrary.online/area-de-membros-juridico/#/inicio", icon: "⚖️" },
  { label: "Pingo Atendimento", url: "https://pingo.creation.dev.br", icon: "🐧" },
  { label: "Prospect Zplex", url: "https://prospect.atender.adv.br/auth", icon: "🔎" },
  { label: "Zap Atendimento", url: "https://zap.atender.adv.br/entrar?modo=signup", icon: "📱" },
];

export default function Home() {
  return (
    <>
      <Sidebar />

      <div className="page-content">
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
          <div className="container hero-header">
            <h1>Painel da IA</h1>
            <div className="hero-featured-group">
              <a
                href="https://agents.chatatender.ia.br/login"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #4338CA 0%, #312E81 100%)", "--pulse-shadow": "rgba(67,56,202,0.35)", "--pulse-ring": "rgba(67,56,202,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">🤝</span>
                Agents IA / integração ao Chatwoot
              </a>
              <a
                href="https://painel.chatatender.ia.br/app/login"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #25D366 0%, #075E54 100%)", "--pulse-shadow": "rgba(37,211,102,0.35)", "--pulse-ring": "rgba(37,211,102,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">💬</span>
                Chatwoot
              </a>
              <a
                href="https://chat.creation.dev.br/painel"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #0891B2 0%, #0E7490 100%)", "--pulse-shadow": "rgba(8,145,178,0.35)", "--pulse-ring": "rgba(8,145,178,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">💬</span>
                Chat_Atender
              </a>
              <a
                href="https://chatatender.creation.dev.br/login/painel/login.php"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #1D4ED8 100%)", "--pulse-shadow": "rgba(14,165,233,0.35)", "--pulse-ring": "rgba(14,165,233,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">🗓️</span>
                Software de Agendamento
              </a>
              <a
                href="https://planilha.creation.dev.br"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ "--pulse-shadow": "rgba(6,182,212,0.35)", "--pulse-ring": "rgba(6,182,212,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">📊</span>
                Escritório Virtual
              </a>
              <a
                href="https://pingo.atender.adv.br/login"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)", "--pulse-shadow": "rgba(37,99,235,0.35)", "--pulse-ring": "rgba(37,99,235,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">🐧</span>
                Pingo IA
              </a>
              <a
                href="https://app.creation.dev.br"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)", "--pulse-shadow": "rgba(236,72,153,0.35)", "--pulse-ring": "rgba(236,72,153,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">🧩</span>
                Criação APP
              </a>
              <a
                href="https://zap.chatatender.ia.br/entrar?modo=signup"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", "--pulse-shadow": "rgba(37,211,102,0.35)", "--pulse-ring": "rgba(37,211,102,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">📱</span>
                Zap Atendimento
              </a>
              <a
                href="https://crm-ia-medeiros-assessoria-s-projects.vercel.app/auth/login"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #10B981 0%, #047857 100%)", "--pulse-shadow": "rgba(16,185,129,0.35)", "--pulse-ring": "rgba(16,185,129,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">🎓</span>
                Mega CRM IA
              </a>
              <a
                href="https://data.creation.dev.br/"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)", "--pulse-shadow": "rgba(245,158,11,0.35)", "--pulse-ring": "rgba(245,158,11,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">📊</span>
                Data Prospect
              </a>
              <a
                href="https://agente.chatatender.ia.br"
                target="_blank"
                rel="noreferrer"
                className="hero-featured-btn featured-pulse"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)", "--pulse-shadow": "rgba(99,102,241,0.35)", "--pulse-ring": "rgba(99,102,241,0.5)" } as React.CSSProperties}
              >
                <span className="hero-featured-icon">🤖</span>
                Agente IA
              </a>
            </div>
          </div>
        </section>

        <div className="container">
          <p className="section-title">Acesso Rápido</p>
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{ fontSize: 44, lineHeight: 1 }}>💎</span>
              <h2 style={{ marginBottom: 0 }}>Um Diamante dura para sempre</h2>
            </div>

            <a
              href="https://adv.chatatender.ia.br"
              target="_blank"
              rel="noreferrer"
              className="featured-pulse"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                justifyContent: "center",
                maxWidth: 420,
                margin: "0 auto 24px",
                background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
                borderRadius: 16,
                padding: "20px 28px",
                textDecoration: "none",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(124,58,237,0.35)",
                border: "2px solid rgba(255,255,255,0.2)",
                ...({ "--pulse-shadow": "rgba(124,58,237,0.35)", "--pulse-ring": "rgba(124,58,237,0.5)" } as React.CSSProperties),
              }}
            >
              <span style={{ fontSize: 36 }}>⚖️</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 17 }}>Causídico Atendimento IA</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2, fontFamily: "monospace" }}>
                  adv.chatatender.ia.br
                </div>
              </div>
            </a>

            <a
              href="https://wacrm-tawny.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="featured-pulse"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                justifyContent: "center",
                maxWidth: 420,
                margin: "0 auto 24px",
                background: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
                borderRadius: 16,
                padding: "20px 28px",
                textDecoration: "none",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(16,185,129,0.35)",
                border: "2px solid rgba(255,255,255,0.2)",
                ...({ "--pulse-shadow": "rgba(16,185,129,0.35)", "--pulse-ring": "rgba(16,185,129,0.5)" } as React.CSSProperties),
              }}
            >
              <span style={{ fontSize: 36 }}>🗂️</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 17 }}>CRM Cadastro</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2, fontFamily: "monospace" }}>
                  wacrm-tawny.vercel.app
                </div>
              </div>
            </a>

            <a
              href="https://chatatender.creation.dev.br/"
              target="_blank"
              rel="noreferrer"
              className="featured-pulse"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                justifyContent: "center",
                maxWidth: 420,
                margin: "0 auto 24px",
                background: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)",
                borderRadius: 16,
                padding: "20px 28px",
                textDecoration: "none",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(245,158,11,0.35)",
                border: "2px solid rgba(255,255,255,0.2)",
                ...({ "--pulse-shadow": "rgba(245,158,11,0.35)", "--pulse-ring": "rgba(245,158,11,0.5)" } as React.CSSProperties),
              }}
            >
              <span style={{ fontSize: 36 }}>📅</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 17 }}>Atendimento/Agendamento</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2, fontFamily: "monospace" }}>
                  chatatender.creation.dev.br
                </div>
              </div>
            </a>

            <a
              href="https://painel.creation.dev.br/"
              target="_blank"
              rel="noreferrer"
              className="featured-pulse"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                justifyContent: "center",
                maxWidth: 420,
                margin: "0 auto 24px",
                background: "linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)",
                borderRadius: 16,
                padding: "20px 28px",
                textDecoration: "none",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(20,184,166,0.35)",
                border: "2px solid rgba(255,255,255,0.2)",
                ...({ "--pulse-shadow": "rgba(20,184,166,0.35)", "--pulse-ring": "rgba(20,184,166,0.5)" } as React.CSSProperties),
              }}
            >
              <span style={{ fontSize: 36 }}>🖥️</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 17 }}>Área de Trabalho</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2, fontFamily: "monospace" }}>
                  painel.creation.dev.br
                </div>
              </div>
            </a>

            <div className="btn-group">
              <a className="btn btn-primary" href="https://multipost.chatatender.ia.br/auth/login" target="_blank">
                💬 Abrir Multipost
              </a>
              <a
                className="btn"
                href="https://app.wiven.com.br/customer"
                target="_blank"
                style={{ background: "#F97316", color: "#fff" }}
              >
                🚀 Acelerador Postagens
              </a>
              <a className="btn btn-ghost" href="https://auto.chatatender.ia.br" target="_blank">
                ⚙️ Editar Workflows
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span>Medeiros Assessoria Jurídica · Assistente Virtual · {new Date().getFullYear()}</span>
          <CopyKey label="EVOLUTION API" value="292dd9230f6a7ce50e7ed9274194dad7c17196354d637afeb3b7f0537bb9f737" />
        </div>
      </footer>
      </div>
    </>
  );
}
