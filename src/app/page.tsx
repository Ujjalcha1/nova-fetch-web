import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import WhyNovaFetch from "@/components/why/WhyNovaFetch";
import DownloadDemo from "@/components/demo/DownloadDemo";
import Features from "@/components/features/Features";
import Screenshots from "@/components/screenshots/Screenshots";
import Testimonials from "@/components/testimonials/Testimonials";
import CTA from "@/components/cta/CTA";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyNovaFetch />
      <DownloadDemo />
      <Features />
      <Screenshots />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
