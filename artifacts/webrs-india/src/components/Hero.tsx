import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, ShieldCheck, Smartphone } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C2E] via-[#0a2151] to-[#0F1C2E] z-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Premium Design for Indian Businesses
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight" data-testid="hero-headline">
            Get a Premium Website for Your Business at Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#4da3ff]">₹699/Month</span>.<br/> No Setup Fees.
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto" data-testid="hero-subheadline">
            We build websites for Salons, Gyms, Cafes, Doctors, Schools, Coaching Institutes & E-commerce Stores with free Google Maps SEO.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/918800788654?text=Hi%2C%20I%20want%20a%20free%2024-hour%20demo%20website%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_20px_rgba(30,144,255,0.4)] transition-all hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              data-testid="btn-claim-demo"
            >
              Claim Your Free 24-Hour Demo
            </a>
            <button
              onClick={() => scrollTo("portfolio")}
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-border bg-card/30 backdrop-blur-sm px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
              data-testid="btn-see-examples"
            >
              See Live Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto border-t border-border/50 pt-8" data-testid="trust-badges">
            <div className="flex flex-col items-center justify-center gap-2 text-white/80">
              <Clock className="h-6 w-6 text-[hsl(51,100%,50%)]" />
              <span className="text-sm font-medium">⚡ 24hr Delivery</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-white/80">
              <ShieldCheck className="h-6 w-6 text-[hsl(51,100%,50%)]" />
              <span className="text-sm font-medium">🔒 No Contract</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-white/80">
              <Star className="h-6 w-6 text-[hsl(51,100%,50%)]" />
              <span className="text-sm font-medium">🌟 5-Star Rated</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-white/80">
              <Smartphone className="h-6 w-6 text-[hsl(51,100%,50%)]" />
              <span className="text-sm font-medium">📱 Mobile Ready</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Mockups (Abstract Representation) */}
      <motion.div 
        className="absolute -right-20 top-1/4 w-64 h-80 rounded-xl bg-card border border-border/50 shadow-2xl opacity-20 hidden lg:block rotate-12"
        animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -left-20 bottom-1/4 w-72 h-48 rounded-xl bg-primary/20 border border-primary/30 shadow-[0_0_30px_rgba(30,144,255,0.2)] opacity-20 hidden lg:block -rotate-6"
        animate={{ y: [0, 20, 0], rotate: [-6, -2, -6] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
}
