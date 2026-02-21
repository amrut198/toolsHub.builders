import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'toolsHub.builders - Free AI Tools for Everyone',
    short_name: 'ToolsHub',
    description: '50+ free AI tools for text, images, audio, video, and code. No sign-up required. Instant results.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#667eea',
    orientation: 'portrait-primary',
    scope: '/',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['productivity', 'utilities', 'ai', 'tools'],
    lang: 'en-US',
    dir: 'ltr',
    screenshots: [
      {
        src: '/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
        label: 'toolsHub.builders Homepage',
      },
    ],
    shortcuts: [
      {
        name: 'Browse Tools',
        short_name: 'Tools',
        description: 'Browse all AI tools',
        url: '/tools',
        icons: [{ src: '/icon.png', sizes: '96x96' }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  }
}
