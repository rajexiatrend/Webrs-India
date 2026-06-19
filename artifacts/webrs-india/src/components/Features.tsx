import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "🎨", title: "Modern Premium Design", desc: "Sleek, professional websites that stand out from the competition." },
  { icon: "📱", title: "100% Mobile Responsive", desc: "Looks perfect on every phone, tablet, and desktop screen." },
  { icon: "💬", title: "WhatsApp Booking + Social Media Connect", desc: "Direct WhatsApp button and all your social profiles linked." },
  { icon: "🗺️", title: "Google Maps Integration", desc: "Show your location and get discovered by local customers." },
  { icon: "🔍", title: "Advanced SEO Optimization", desc: "Rank higher on Google and get found by the right customers." },
  { icon: "🖼️", title: "Gallery & Photo Section", desc: "Showcase your work, products, or ambience beautifully." },
  { icon: "⭐", title: "Review & Testimonial Section", desc: "Build trust with real customer reviews displayed prominently." },
  { icon: "🔄", title: "Monthly Updates Included", desc: "We update your photos, prices, and offers every month." },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#080f1a] relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,144,255,0.05)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Everything Your Business Needs to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#4da3ff]">
              Grow Online
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            One subscription covers everything — design, hosting, SEO, and ongoing support.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-[#1E90FF]/40 hover:bg-[#1E90FF]/5 transition-all duration-300 cursor-default"
              data-testid={`feature-box-${i}`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold font-display text-white text-sm mb-2 leading-snug">{f.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-transparent via-[#1E90FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
