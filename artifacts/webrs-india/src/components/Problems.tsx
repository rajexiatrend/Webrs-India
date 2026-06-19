import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "😰",
    title: "No Online Presence = Losing Customers",
    desc: "Your competitors are getting customers from Google while you rely only on word-of-mouth.",
  },
  {
    icon: "💸",
    title: "₹20,000–₹30,000 Upfront is Too Much",
    desc: "Traditional web agencies charge a fortune. We offer the same quality at just ₹699/month.",
  },
  {
    icon: "🗺️",
    title: "Google Maps & Reviews are Confusing",
    desc: "We handle your Google Maps optimization so new customers can find you easily.",
  },
];

export default function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#080f1a] relative overflow-hidden" id="problems">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,144,255,0.06)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Is Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#4da3ff]">Invisible Online?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Most local businesses face these exact challenges. We solve all of them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 hover:border-[#1E90FF]/40 hover:bg-[#1E90FF]/5 transition-all duration-300"
              data-testid={`problem-card-${i}`}
            >
              <div className="text-5xl mb-5">{p.icon}</div>
              <h3 className="text-xl font-bold font-display text-white mb-3">{p.title}</h3>
              <p className="text-white/60 leading-relaxed">{p.desc}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,144,255,0.08)_0%,_transparent_60%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
