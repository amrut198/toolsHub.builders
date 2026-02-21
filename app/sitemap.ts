import { MetadataRoute } from 'next'

// Force static generation for optimal performance
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tools-hub-builders.vercel.app'
  const currentDate = new Date('2026-02-21')

  // Main pages with proper dates
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date('2026-02-21'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date('2026-02-21'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: new Date('2026-02-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-02-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-02-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date('2026-02-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: new Date('2026-02-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Tool pages
  const toolSlugs = [
    'ai-summarizer',
    'paraphrasing-tool',
    'grammar-checker',
    'text-generator',
    'plagiarism-checker',
    'readability-analyzer',
    'background-remover',
    'image-upscaler',
    'image-compressor',
    'ai-image-generator',
    'image-converter',
    'photo-enhancer',
    'text-to-speech',
    'speech-to-text',
    'voice-cloner',
    'audio-compressor',
    'noise-remover',
    'audio-converter',
    'video-compressor',
    'video-to-text',
    'video-trimmer',
    'video-converter',
    'thumbnail-generator',
    'watermark-remover',
    'code-explainer',
    'code-generator',
    'code-formatter',
    'json-validator',
    'regex-tester',
    'code-converter',
  ]

  const toolPages = toolSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date('2026-02-21'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...toolPages]
}
