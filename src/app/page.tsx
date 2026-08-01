import { Navbar } from "@/components/layout";
import { Hero } from "@/components/hero";
import { WhyNovaFetch } from "@/components/why";
import { Features } from "@/components/features";
import { Showcase } from "@/components/showcase";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyNovaFetch />
        <Features />
        <Showcase />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
