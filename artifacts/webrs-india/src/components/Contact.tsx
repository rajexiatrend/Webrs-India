import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "contact@webrsindia.com", href: "mailto:contact@webrsindia.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 8800788654", href: "https://wa.me/918800788654" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat  10AM–7PM", href: null },
  { icon: MapPin, label: "Location", value: "Delhi, India", href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,144,255,0.06)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#4da3ff]">Touch</span>
          </h2>
          <p className="text-white/60 text-lg">We're always here to help. Reach out anytime.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {info.map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`block rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-center transition-all duration-300 hover:border-[#1E90FF]/40 hover:bg-[#1E90FF]/5 ${item.href ? "cursor-pointer" : ""}`}
                  data-testid={`contact-card-${i}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
