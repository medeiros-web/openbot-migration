"use client";

import { useState } from "react";

export default function CopyKey({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível — ignora
    }
  }

  return (
    <button
      onClick={handleCopy}
      title="Clique para copiar"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 8,
        padding: "6px 12px",
        color: "inherit",
        fontFamily: "monospace",
        fontSize: 12,
        cursor: "pointer",
      }}
    >
      <span style={{ opacity: 0.7 }}>{label}:</span>
      <span>{value}</span>
      <span>{copied ? "✅" : "📋"}</span>
    </button>
  );
}
