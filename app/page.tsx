import CTA from "@/components/CTA";
import Content_01 from "@/components/Content-01";
import Content_02 from "@/components/Content-02";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Content_01 />
      <Stats />
      <Content_02 />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main >

  )
}
