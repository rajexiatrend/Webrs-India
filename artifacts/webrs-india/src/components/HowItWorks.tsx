import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { icon: "📋", label: "Fill the Form", desc: "Share your business details in under 2 minutes." },
  { icon: "📲", label: "We Contact You", desc: "Our team reaches out on WhatsApp to understand your needs." },
  { icon: "🎨", label: "Demo Ready in 24hrs", desc: "We build and send your custom demo website link." },
  { icon: "🚀", label: "Go Live!", desc: "Approve the design and your site goes live instantly." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,144,255,0.05)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            How It Works —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#4da3ff]">
              Simple 4-Step Process
            </span>
          </h2>
          <p className="text-white/60 text-lg">From form to live website — faster than you think.</p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex-1 flex flex-col items-center text-center px-4 relative"
              data-testid={`step-${i}`}
            >
              {/* Step number badge */}
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center text-4xl shadow-[0_0_24px_rgba(30,144,255,0.15)]">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>

              {/* Arrow between steps (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden text-2xl text-white/20 mb-4 rotate-90">→</div>
              )}

              <h3 className="font-bold font-display text-white text-lg mb-2">{step.label}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/918800788654?text=Hi%2C%20I%20want%20a%20free%2024-hour%20demo%20website%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-primary-foreground shadow-[0_0_24px_rgba(30,144,255,0.4)] hover:scale-105 hover:bg-primary/90 transition-all duration-200"
            data-testid="btn-start-now"
          >
            Start Now — It's Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
