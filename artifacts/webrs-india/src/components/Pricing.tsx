import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly Growth",
    price: "₹699",
    period: "/month",
    badge: null,
    gold: false,
    features: [
      "Professional Custom Website Design",
      "WhatsApp Booking Button",
      "Social Media Links Integration (Instagram/Facebook/Telegram)",
      "Google Maps Business Listing Setup",
      "Advanced SEO Optimization",
      "Mobile Responsive Design",
      "Free SSL Security",
      "Free Hosting Included",
      "Monthly Content Updates (photos/prices)",
      "Email Support",
      "Up to 5 Pages",
      "Contact Form with Auto-Notifications",
    ],
  },
  {
    name: "Quarterly Boost",
    price: "₹1,999",
    period: "/quarter",
    badge: "POPULAR",
    gold: false,
    features: [
      "Everything in Monthly PLUS:",
      "Priority WhatsApp Support",
      "1 Extra Page (6 total)",
      "Basic Analytics Dashboard",
      "Festival/Offer Banner Updates",
      "Faster 12-Hour Demo Delivery",
    ],
  },
  {
    name: "Half Yearly Pro",
    price: "₹3,999",
    period: "/6 months",
    badge: null,
    gold: false,
    features: [
      "Everything in Quarterly PLUS:",
      "Social Media Post Templates (4/month)",
      "Monthly SEO Performance Report",
      "8 Total Pages",
      "Google Business Profile Optimization",
      "Customer Review Widget Setup",
      "Priority Bug Fixes within 24 hours",
    ],
  },
  {
    name: "Annual Champion",
    price: "₹7,499",
    period: "/year",
    badge: "BEST VALUE 🏆",
    gold: true,
    features: [
      "Everything in Half Yearly PLUS:",
      "FREE .in Domain for 1 Year",
      "10 Total Pages",
      "WhatsApp Catalog/Business API Setup",
      "Dedicated Account Support",
      "2 Free Major Redesigns per year",
      "Google Ads Setup Guidance",
      "Priority 24-Hour Support Response",
    ],
  },
];

const WA_LINK = "https://wa.me/918800788654?text=Hi%2C%20I%20want%20to%20get%20started%20with%20WebRS%20India";

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,144,255,0.07)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#4da3ff]">Transparent Pricing</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            No hidden fees. Cancel anytime. Start with a free 24-hour demo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-6 flex flex-col border transition-all duration-300 ${
                plan.gold
                  ? "border-[#FFD700] bg-gradient-to-b from-[#1a1500] to-card shadow-[0_0_40px_rgba(255,215,0,0.15)] scale-[1.02]"
                  : "border-border bg-card hover:border-[#1E90FF]/50"
              }`}
              data-testid={`pricing-card-${i}`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                    plan.gold
                      ? "bg-[#FFD700] text-[#0F1C2E]"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold font-display mb-2 ${plan.gold ? "text-[#FFD700]" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/50 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    {f.includes("Everything") ? (
                      <span className="text-white/70 italic">{f}</span>
                    ) : (
                      <>
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.gold ? "text-[#FFD700]" : "text-primary"}`} />
                        <span className="text-white/80">{f}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] ${
                  plan.gold
                    ? "bg-[#FFD700] text-[#0F1C2E] hover:bg-[#FFD700]/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                data-testid={`pricing-cta-${i}`}
              >
                Get Started on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
