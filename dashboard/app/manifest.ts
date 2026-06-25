import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Medeiros Assessoria — Painel IA',
    short_name: 'Painel IA',
    description: 'Painel de controle do Assistente Virtual Jurídico ChatAtender',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#7C3AED',
    orientation: 'any',
    categories: ['productivity', 'utilities'],
    icons: [
      { src: '/icons/192', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/512', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
