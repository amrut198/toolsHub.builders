import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'toolshub-builders - Innovation & Technology Solutions',
    short_name: 'toolshub-builders',
    description: 'Your trusted partner in cutting-edge technology solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#667eea',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['technology', 'business', 'productivity'],
    lang: 'en-US',
    dir: 'ltr',
  }
}

