import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Owner from "@/components/Owner";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import OrderForm from "@/components/OrderForm";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <Features />
        <Portfolio />
        <Owner />
        <Pricing />
        <Reviews />
        <OrderForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}
