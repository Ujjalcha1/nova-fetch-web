import { Navbar } from "@/components/layout";
import { Hero } from "@/components/hero";
import { WhyNovaFetch } from "@/components/why";
import { DownloadDemo } from "@/components/demo";
import { Features } from "@/components/features";
import { Screenshots } from "@/components/screenshots";
import { Testimonials } from "@/components/testimonials";
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
        <DownloadDemo />
        <Features />
        <Screenshots />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
