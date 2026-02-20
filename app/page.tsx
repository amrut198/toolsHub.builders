import { Block as Navbar } from '@/src/components/blocks/marketing-navbars/navbar-with-call-to-action/block';
import { Block as Hero } from '@/src/components/blocks/heroes/hero-with-command/block';
import { Block as Problems } from '@/src/components/blocks/features/feature-bento-grid-02/block';
import { Block as Mission } from '@/src/components/blocks/features/feature-mission/block';
import { Block as StatsOld } from '@/src/components/blocks/stats/stat-centered-with-separator/block';
import { Block as Features } from '@/src/components/blocks/features/feature-04/block';
import { Block as Products } from '@/src/components/blocks/features/feature-bento-grid-01/block';
import { Block as StatsNew } from '@/src/components/blocks/features/feature-10/block';
import { Block as Testimonials } from '@/src/components/blocks/testimonials/testimonial-with-card/block';
import { Block as PricingPhilosophy } from '@/src/components/blocks/pricing/pricing-philosophy/block';
import { Block as DifferenceBlock } from '@/src/components/blocks/features/feature-difference/block';
import { Block as ComparisonTable } from '@/src/components/blocks/features/feature-comparison-table/block';
import { Block as UseCases } from '@/src/components/blocks/features/feature-use-cases/block';
import { Block as ROICalculator } from '@/src/components/blocks/calculators/roi-calculator/block';
import { Block as GettingStarted } from '@/src/components/blocks/getting-started/three-ways-to-start/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Block as FinalCTA } from '@/src/components/blocks/cta/final-cta/block';
import { Block as JoinCommunityCTA } from '@/src/components/blocks/cta/join-community-cta/block';
import { Block as Footer } from '@/src/components/blocks/footers/footer-with-four-columns/block';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <section id="home">
          <Hero />
        </section>
        <Problems />
        <StatsOld />
        <JoinCommunityCTA
          tagline="Join Our Community of Innovators"
          subline="Connect with like-minded professionals, share insights, and collaborate on groundbreaking projects"
          buttonText="Join Our Community"
        />
        <section id="solutions">
          <Features />
          <Mission />
          <DifferenceBlock />
          <ComparisonTable />
          <UseCases />
        </section>
        <section id="products">
          <Products />
          <StatsNew />
          <Testimonials />
          <JoinCommunityCTA
            tagline="Ready to Transform Your Business?"
            subline="Join thousands of companies already using toolshub-builders to drive innovation and growth"
            buttonText="Get Started Today"
          />
        </section>
        <section id="pricing">
          <PricingPhilosophy />
          <ROICalculator />
          <GettingStarted />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <JoinCommunityCTA
          tagline="Become Part of Something Bigger"
          subline="Join our growing community of entrepreneurs, developers, and innovators shaping the future"
          buttonText="Join Our Community Now"
        />
        <FinalCTA />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}
