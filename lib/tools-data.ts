/**
 * Tools Data Structure
 * Complete catalog of all available tools with SEO metadata
 */

export interface Tool {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ToolCategory;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  icon: string;
  featured?: boolean;
  popular?: boolean;
}

export type ToolCategory = 'text' | 'developer' | 'image' | 'seo';

export interface ToolCategoryInfo {
  id: ToolCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const toolCategories: Record<ToolCategory, ToolCategoryInfo> = {
  text: {
    id: 'text',
    name: 'Text Tools',
    description: 'Transform, analyze, and format text with powerful utilities',
    icon: 'FiFileText',
    color: 'blue',
  },
  developer: {
    id: 'developer',
    name: 'Developer Tools',
    description: 'Essential tools for developers and programmers',
    icon: 'FiCode',
    color: 'purple',
  },
  image: {
    id: 'image',
    name: 'Image Tools',
    description: 'Convert, compress, and edit images online',
    icon: 'FiImage',
    color: 'green',
  },
  seo: {
    id: 'seo',
    name: 'SEO Tools',
    description: 'Optimize your website for search engines',
    icon: 'FiTrendingUp',
    color: 'orange',
  },
};

export const tools: Tool[] = [
  // TEXT TOOLS
  {
    id: 'word-counter',
    title: 'Word Counter',
    slug: 'word-counter',
    description: 'Count words, characters, sentences, and paragraphs instantly. Perfect for writers, students, and content creators.',
    category: 'text',
    seoTitle: 'Free Word Counter - Count Words & Characters',
    seoDescription: 'Free online word counter tool. Instantly count words, characters, sentences, paragraphs, and reading time. No signup required.',
    keywords: ['word counter', 'character counter', 'word count tool', 'count words online', 'text analyzer'],
    icon: 'FiTrendingUp',
    featured: true,
    popular: true,
  },
  {
    id: 'character-counter',
    title: 'Character Counter',
    slug: 'character-counter',
    description: 'Count characters with and without spaces. Essential for social media posts, meta descriptions, and character limits.',
    category: 'text',
    seoTitle: 'Character Counter - Free Online Counter Tool',
    seoDescription: 'Count characters online with or without spaces. Perfect for Twitter, Instagram, and SEO meta descriptions.',
    keywords: ['character counter', 'count characters', 'character limit', 'character count tool', 'letter counter'],
    icon: 'FiType',
    popular: true,
  },
  {
    id: 'case-converter',
    title: 'Case Converter',
    slug: 'case-converter',
    description: 'Convert text to uppercase, lowercase, title case, sentence case, and more. One-click case transformation.',
    category: 'text',
    seoTitle: 'Case Converter - Convert Text Case Online',
    seoDescription: 'Free online case converter. Transform text to uppercase, lowercase, title case, sentence case, and toggle case.',
    keywords: ['case converter', 'uppercase converter', 'lowercase converter', 'title case', 'text case changer'],
    icon: 'FiChevronsUp',
  },
  {
    id: 'remove-duplicate-lines',
    title: 'Remove Duplicate Lines',
    slug: 'remove-duplicate-lines',
    description: 'Remove duplicate lines from text instantly. Clean up lists, data, and any text content with one click.',
    category: 'text',
    seoTitle: 'Remove Duplicate Lines - Clean Text',
    seoDescription: 'Free tool to remove duplicate lines from text. Clean up lists, remove repeated entries, and deduplicate content instantly.',
    keywords: ['remove duplicates', 'remove duplicate lines', 'deduplicate list', 'remove repeated lines', 'clean text list'],
    icon: 'FiMinusCircle',
  },
  {
    id: 'text-to-slug',
    title: 'Text to Slug Converter',
    slug: 'text-to-slug',
    description: 'Convert any text into URL-friendly slugs. Perfect for creating clean URLs, permalinks, and SEO-friendly links.',
    category: 'text',
    seoTitle: 'Text to Slug Converter - URL-Friendly Slugs',
    seoDescription: 'Convert text to URL-friendly slugs instantly. Create clean, SEO-friendly URLs and permalinks for your content.',
    keywords: ['text to slug', 'url slug generator', 'slug converter', 'permalink generator', 'friendly url'],
    icon: 'FiLink',
  },

  // DEVELOPER TOOLS
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    slug: 'json-formatter',
    description: 'Format, beautify, and validate JSON data. Syntax highlighting, error detection, and one-click formatting.',
    category: 'developer',
    seoTitle: 'JSON Formatter Online - Beautify & Validate JSON',
    seoDescription: 'Free online JSON formatter and validator. Beautify JSON, syntax highlighting, error detection, and format compact JSON.',
    keywords: ['json formatter', 'json beautifier', 'json validator', 'format json', 'json prettify'],
    icon: 'FiCode',
    featured: true,
    popular: true,
  },
  {
    id: 'base64-encoder-decoder',
    title: 'Base64 Encoder/Decoder',
    slug: 'base64-encoder-decoder',
    description: 'Encode and decode Base64 strings instantly. Support for text, images, and any data format.',
    category: 'developer',
    seoTitle: 'Base64 Encoder/Decoder Online - Free Base64 Tool',
    seoDescription: 'Free online Base64 encoder and decoder. Convert text and data to Base64 format instantly. No signup required.',
    keywords: ['base64 encoder', 'base64 decoder', 'base64 converter', 'encode base64', 'decode base64'],
    icon: 'FiLock',
    popular: true,
  },
  {
    id: 'html-minifier',
    title: 'HTML Minifier',
    slug: 'html-minifier',
    description: 'Minify HTML code to reduce file size. Remove whitespace, comments, and optimize your HTML.',
    category: 'developer',
    seoTitle: 'HTML Minifier Online - Compress HTML Code',
    seoDescription: 'Free online HTML minifier. Compress HTML code, remove whitespace and comments to reduce file size.',
    keywords: ['html minifier', 'html compressor', 'minify html', 'html optimizer', 'reduce html size'],
    icon: 'FiMinimize2',
  },
  {
    id: 'css-minifier',
    title: 'CSS Minifier',
    slug: 'css-minifier',
    description: 'Minify CSS code to reduce file size. Remove whitespace, comments, and optimize stylesheets.',
    category: 'developer',
    seoTitle: 'CSS Minifier Online - Compress CSS Code',
    seoDescription: 'Free online CSS minifier. Compress CSS code, remove whitespace and comments to reduce file size.',
    keywords: ['css minifier', 'css compressor', 'minify css', 'css optimizer', 'reduce css size'],
    icon: 'FiLayers',
  },
  {
    id: 'jwt-decoder',
    title: 'JWT Decoder',
    slug: 'jwt-decoder',
    description: 'Decode and inspect JSON Web Tokens. View header, payload, and signature information instantly.',
    category: 'developer',
    seoTitle: 'JWT Decoder Online - Decode JSON Web Tokens',
    seoDescription: 'Free online JWT decoder. Decode and inspect JSON Web Tokens, view header and payload data instantly.',
    keywords: ['jwt decoder', 'jwt decoder online', 'json web token decoder', 'decode jwt', 'jwt inspector'],
    icon: 'FiKey',
  },

  // IMAGE TOOLS
  {
    id: 'image-to-base64',
    title: 'Image to Base64',
    slug: 'image-to-base64',
    description: 'Convert images to Base64 strings instantly. Support for PNG, JPG, GIF, WebP and more formats.',
    category: 'image',
    seoTitle: 'Image to Base64 Converter - Images Online',
    seoDescription: 'Free online image to Base64 converter. Convert PNG, JPG, GIF, WebP images to Base64 strings instantly.',
    keywords: ['image to base64', 'convert image to base64', 'base64 image', 'img to base64', 'image base64 converter'],
    icon: 'FiImage',
    featured: true,
    popular: true,
  },
  {
    id: 'image-compressor',
    title: 'Image Compressor',
    slug: 'image-compressor',
    description: 'Compress images without quality loss. Reduce file size while maintaining image quality.',
    category: 'image',
    seoTitle: 'Image Compressor - Free Image Compression',
    seoDescription: 'Free online image compressor. Reduce image file size while maintaining quality. Supports JPG, PNG, WebP.',
    keywords: ['image compressor', 'compress image', 'reduce image size', 'image optimizer', 'shrink image'],
    icon: 'FiAperture',
    popular: true,
  },
  {
    id: 'png-to-jpg',
    title: 'PNG to JPG Converter',
    slug: 'png-to-jpg',
    description: 'Convert PNG images to JPG format. Fast conversion with quality control options.',
    category: 'image',
    seoTitle: 'PNG to JPG - Convert PNG to JPEG Online',
    seoDescription: 'Free online PNG to JPG converter. Convert PNG images to JPEG format with quality control options.',
    keywords: ['png to jpg', 'convert png to jpeg', 'png to jpeg converter', 'png converter', 'image converter'],
    icon: 'FiRefreshCw',
  },
  {
    id: 'resize-image',
    title: 'Resize Image',
    slug: 'resize-image',
    description: 'Resize images to any dimension. Maintain aspect ratio or set custom dimensions.',
    category: 'image',
    seoTitle: 'Image Resizer Online - Resize Images Free',
    seoDescription: 'Free online image resizer. Resize images to any dimension, maintain aspect ratio, or set custom size.',
    keywords: ['resize image', 'image resizer', 'resize photo', 'resize picture', 'image size converter'],
    icon: 'FiMaximize2',
  },
  {
    id: 'image-crop',
    title: 'Image Crop Tool',
    slug: 'image-crop',
    description: 'Crop images to any size or aspect ratio. Interactive crop tool with preset dimensions.',
    category: 'image',
    seoTitle: 'Image Crop Tool - Crop Images Online Free',
    seoDescription: 'Free online image crop tool. Crop images to any size or aspect ratio with interactive cropping.',
    keywords: ['crop image', 'image crop tool', 'crop photo', 'image cropper', 'crop picture'],
    icon: 'FiCrop',
  },

  // SEO TOOLS
  {
    id: 'meta-tag-generator',
    title: 'Meta Tag Generator',
    slug: 'meta-tag-generator',
    description: 'Generate SEO-friendly meta tags for your website. Title, description, keywords, Open Graph, and Twitter cards.',
    category: 'seo',
    seoTitle: 'Meta Tag Generator - SEO Meta Tags Online',
    seoDescription: 'Free meta tag generator. Create SEO-friendly meta tags, Open Graph, and Twitter card meta tags for your website.',
    keywords: ['meta tag generator', 'meta tags creator', 'seo meta tags', 'generate meta tags', 'meta tag builder'],
    icon: 'FiTag',
    featured: true,
  },
  {
    id: 'robots-generator',
    title: 'Robots.txt Generator',
    slug: 'robots-generator',
    description: 'Generate robots.txt files for your website. Control crawler access and sitemap locations.',
    category: 'seo',
    seoTitle: 'Robots.txt Generator - Free Online Tool',
    seoDescription: 'Free robots.txt generator. Create robots.txt files to control search engine crawler access to your website.',
    keywords: ['robots.txt generator', 'create robots.txt', 'robots txt creator', 'robots file generator', 'crawl control'],
    icon: 'FiRobot',
  },
  {
    id: 'sitemap-generator',
    title: 'Sitemap Generator',
    slug: 'sitemap-generator',
    description: 'Generate XML sitemaps for search engines. Easy sitemap creation for better SEO.',
    category: 'seo',
    seoTitle: 'Sitemap Generator - Create XML Sitemaps Online',
    seoDescription: 'Free XML sitemap generator. Create sitemaps for Google and other search engines to improve your SEO.',
    keywords: ['sitemap generator', 'xml sitemap', 'create sitemap', 'sitemap builder', 'google sitemap'],
    icon: 'FiMap',
  },
  {
    id: 'keyword-density-checker',
    title: 'Keyword Density Checker',
    slug: 'keyword-density-checker',
    description: 'Analyze keyword density in your content. Optimize your text for SEO with keyword frequency analysis.',
    category: 'seo',
    seoTitle: 'Keyword Density Checker - Analyze Keywords',
    seoDescription: 'Free keyword density checker. Analyze keyword frequency and optimize your content for better SEO rankings.',
    keywords: ['keyword density', 'keyword checker', 'keyword density tool', 'seo keyword analyzer', 'keyword frequency'],
    icon: 'FiBarChart',
  },
  {
    id: 'open-graph-generator',
    title: 'Open Graph Generator',
    slug: 'open-graph-generator',
    description: 'Generate Open Graph meta tags for social media sharing. Preview how your content appears on Facebook, LinkedIn, etc.',
    category: 'seo',
    seoTitle: 'Open Graph Generator - Create OG Tags Online',
    seoDescription: 'Free Open Graph generator. Create OG meta tags for better social media sharing on Facebook, LinkedIn, and more.',
    keywords: ['open graph generator', 'og tags generator', 'open graph meta', 'social media meta tags', 'og preview'],
    icon: 'FiShare2',
    popular: true,
  },
];

// Helper functions
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter(tool => tool.category === category);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter(tool => tool.featured);
}

export function getPopularTools(): Tool[] {
  return tools.filter(tool => tool.popular);
}

export function searchTools(query: string): Tool[] {
  const lowerQuery = query.toLowerCase();
  return tools.filter(tool =>
    tool.title.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
}

export function getRelatedTools(currentSlug: string, category?: ToolCategory, limit = 4): Tool[] {
  const currentTool = getToolBySlug(currentSlug);
  if (!currentTool) return [];

  let related = tools.filter(tool => tool.slug !== currentSlug);

  // Prioritize same category
  if (category) {
    const sameCategory = related.filter(tool => tool.category === category);
    if (sameCategory.length >= limit) {
      return sameCategory.slice(0, limit);
    }
    related = [...sameCategory, ...related.filter(tool => tool.category !== category)];
  }

  return related.slice(0, limit);
}

export const totalToolCount = tools.length;
