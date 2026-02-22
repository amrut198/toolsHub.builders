import { Block as Hero } from '@/src/components/blocks/heroes/hero-with-command/block';
import { Block as ValueProps } from '@/src/components/blocks/features/feature-value-props/block';
import { Block as ToolsGrid } from '@/src/components/blocks/tools/tools-grid-section/block';
import { Block as Categories } from '@/src/components/blocks/categories/categories-grid/block';
import { Block as FinalCTA } from '@/src/components/blocks/cta/final-cta-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Block as Stats } from '@/src/components/blocks/stats/stat-centered-with-separator/block';
import { Block as Testimonials } from '@/src/components/blocks/testimonials/testimonial-with-card/block';
import { Block as GettingStarted } from '@/src/components/blocks/getting-started/three-ways-to-start/block';
import { Block as UseCases } from '@/src/components/blocks/features/feature-use-cases/block';
import { Block as JoinCommunity } from '@/src/components/blocks/cta/join-community-cta/block';
import SchemaOrg from './components/SchemaOrg';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Hero />
      <ValueProps />
      <Stats />
      <ToolsGrid />
      <Categories />
      <UseCases />
      <GettingStarted />
      <Testimonials />
      <FinalCTA />
      <FAQ />
    </>
  );
}

