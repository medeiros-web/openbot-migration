"use client";

import { useState } from "react";

type FeaturedItem = {
  label: string;
  url: string;
  icon: string;
  color: string;
};

const featured: FeaturedItem[] = [
  { label: "Mega CRM IA", url: "https://crm-ia-medeiros-assessoria-s-projects.vercel.app/auth/login", icon: "🎓", color: "#10B981" },
  { label: "ANMlegis", url: "https://anmlegis.chatatender.ia.br", icon: "📜", color: "#F59E0B" },
  { label: "WhatsApp Havek", url: "https://whatsapp.havek.ai/login", icon: "💬", color: "#25D366" },
  { label: "Dankicode Creations", url: "https://dankicode-creations.vercel.app/", icon: "🚀", color: "#7C3AED" },
  { label: "Site DIVULGAÇÃO", url: "https://tecnologia.chatatender.ia.br/", icon: "📢", color: "#F43F5E" },
  { label: "DIVULGAÇÃO", url: "https://marketing-ten-tawny.vercel.app/admin", icon: "📣", color: "#0EA5E9" },
  { label: "Direct Instagram", url: "https://many-main-henna.vercel.app/", icon: "📸", color: "#C026D3" },
  { label: "Roteador LLMs", url: "https://llm.creation.dev.br", icon: "🧭", color: "#6366F1" },
  { label: "EVOLUTION API", url: "https://evo.creation.dev.br", icon: "🔌", color: "#22C55E" },
  { label: "Execução Fiscal", url: "https://estudantesebradi.ead.br/login", icon: "⚖️", color: "#78716C" },
  { label: "Software de Agendamento", url: "https://chatatender.creation.dev.br/login/painel/login.php", icon: "🗓️", color: "#0EA5E9" },
  { label: "Construtor de Prompts", url: "https://novaeradaprogramacao.com/construtor/construtor.php", icon: "🧩", color: "#8B5CF6" },
  { label: "Escritório Virtual", url: "https://planilha.creation.dev.br", icon: "📊", color: "#06B6D4" },
  { label: "ChatBullQ", url: "https://chatbullq.creation.dev.br/login", icon: "🐂", color: "#EF4444" },
  { label: "Whaticket", url: "https://whaticket.creation.dev.br/", icon: "🎫", color: "#14B8A6" },
  { label: "Gestão Mineral", url: "https://projeto-sistema-mineral-78oj.vercel.app/login", icon: "⛏️", color: "#A16207" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(true)}
        aria-label="Abrir destaques"
      >
        ☰ Destaques
      </button>

      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}

      <aside className={`sidebar${open ? " sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <span>Destaques</span>
          <button
            className="sidebar-close"
            onClick={() => setOpen(false)}
            aria-label="Fechar destaques"
          >
            ✕
          </button>
        </div>
        <nav className="sidebar-list">
          {featured.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="sidebar-item"
              style={{ "--item-color": item.color } as React.CSSProperties}
              onClick={() => setOpen(false)}
            >
              <span className="sidebar-item-icon">{item.icon}</span>
              <span className="sidebar-item-label">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
