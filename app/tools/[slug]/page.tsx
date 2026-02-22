/**
 * Dynamic Tool Page
 * Individual tool pages with metadata and schema
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlug, getRelatedTools, tools } from '@/lib/tools-data';
import { generateToolMetadata, generateSoftwareApplicationSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { ClientToolPage } from './client-tool-page';

// Force static generation for all tool pages
export const dynamic = 'force-static';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all tools
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// Generate metadata for each tool
export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return generateToolMetadata(tool);
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getRelatedTools(slug, tool.category);

  // Generate schema data
  const softwareSchema = generateSoftwareApplicationSchema(tool);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: tool.title, url: `/tools/${tool.slug}` },
  ]);

  const defaultFAQ = [
    {
      question: `Is ${tool.title} free to use?`,
      answer: 'Yes, this tool is completely free to use with no signup required.',
    },
    {
      question: 'Is my data safe?',
      answer: 'All processing happens in your browser. We do not store or transmit your data.',
    },
    {
      question: 'Can I use this tool on mobile?',
      answer: 'Yes, this tool is fully responsive and works on all devices.',
    },
  ];

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'toolsHub.builders',
      alternateName: 'ToolsHub',
      url: 'https://toolshub.builders',
      description: '50+ free AI tools for text, images, audio, video, and code. No sign-up required. Instant results.',
      publisher: {
        '@type': 'Organization',
        name: 'toolsHub.builders',
        url: 'https://toolshub.builders',
        logo: {
          '@type': 'ImageObject',
          url: 'https://toolshub.builders/icon.png',
          width: 32,
          height: 32,
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'toolsHub.builders',
      url: 'https://toolshub.builders',
      logo: 'https://toolshub.builders/icon.png',
      description: 'Free AI tools directory for students, creators, and developers',
      sameAs: [
        'https://twitter.com/toolshubbuilders',
        'https://github.com/toolshubbuilders',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'hello@toolshub.builders',
      },
    },
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(defaultFAQ)) }}
      />

      <ClientToolPage toolId={tool.id} tool={tool} relatedTools={relatedTools} />
    </>
  );
}
