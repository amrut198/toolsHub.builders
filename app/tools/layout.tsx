import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All AI Tools | toolsHub.builders',
  description: 'Browse 50+ free AI tools organized by category. Text tools, image tools, audio tools, video tools, and code tools. No sign-up required.',
  keywords: ['AI tools directory', 'free AI tools list', 'AI tools categories', 'productivity AI tools'],
  openGraph: {
    title: 'All AI Tools | toolsHub.builders',
    description: 'Browse 50+ free AI tools organized by category.',
    url: 'https://toolshub.builders/tools',
  },
  alternates: {
    canonical: 'https://toolshub.builders/tools',
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
