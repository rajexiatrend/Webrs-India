import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Kya mujhe koi technical knowledge chahiye?",
    a: "Bilkul nahi! Aap bas apni business details do, baaki sab hum handle karte hain.",
  },
  {
    q: "Website kitne time mein ready hogi?",
    a: "Hum 24-48 ghante mein aapki demo website ready kar dete hain.",
  },
  {
    q: "Kya main baad mein apni website update kar sakta hoon?",
    a: "Haan! Monthly plan mein unlimited photo aur price updates included hain.",
  },
  {
    q: "Domain aur hosting ka kya?",
    a: "Hosting bilkul free hai. Domain Annual plan mein free milta hai, baaki plans mein ₹400/year ka domain alag se.",
  },
  {
    q: "Agar mujhe website pasand nahi aayi to?",
    a: "Hum revision karte hain jab tak aap 100% satisfied nahi ho jaate.",
  },
  {
    q: "Payment kaise karein?",
    a: "UPI, PhonePe, GPay, Razorpay — sab accepted hai.",
  },
  {
    q: "Kya aap e-commerce aur dropshipping websites bhi banate hain?",
    a: "Haan! Hum product catalog, shopping cart, aur payment integration ke saath e-commerce websites bhi banate hain.",
  },
  {
    q: "Website mera khud ka rahega ya aapka?",
    a: "Website 100% aapka hoga. Hum sirf design aur maintenance support dete hain.",
  },
  {
    q: "Kya main plan beech mein change/upgrade kar sakta hoon?",
    a: "Bilkul! Aap kabhi bhi apna plan upgrade kar sakte hain, hum baaki amount adjust kar dete hain.",
  },
  {
    q: "Refund policy kya hai?",
    a: "Agar demo dekhne ke baad aap satisfied nahi hain, to hum poora refund karte hain — koi sawaal nahi puchhte.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#080f1a] relative overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,144,255,0.05)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#4da3ff]">
              Questions
            </span>
          </h2>
          <p className="text-white/60 text-lg">Got questions? We have answers.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden data-[state=open]:border-primary/40 transition-all duration-300"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white font-semibold hover:text-primary hover:no-underline transition-colors duration-200 text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-white/65 text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
