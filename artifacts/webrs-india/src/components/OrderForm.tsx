import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

// Google Apps Script URL for future Google Sheets integration
// Replace with your deployed script URL to enable spreadsheet logging
const GOOGLE_SCRIPT_URL = "";

const businessTypes = [
  "Salon", "Gym/Fitness", "Cafe", "Restaurant", "Doctor/Clinic",
  "School", "Coaching Institute", "E-commerce Store", "Dropshipping Business",
  "Boutique/Shop", "Other",
];

const pageOptions = ["3-5 Pages", "6-8 Pages", "9-10 Pages", "Not Sure"];

interface FormData {
  fullName: string;
  businessName: string;
  businessType: string;
  pages: string;
  phone: string;
  city: string;
  message: string;
}

const empty: FormData = {
  fullName: "", businessName: "", businessType: "", pages: "",
  phone: "", city: "", message: "",
};

export default function OrderForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>(empty);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const msg =
      `Hi! I want a free demo website from WebRS India.\n\n` +
      `Name: ${form.fullName}\n` +
      `Business: ${form.businessName}\n` +
      `Business Type: ${form.businessType}\n` +
      `Pages Needed: ${form.pages}\n` +
      `Phone: +91 ${form.phone}\n` +
      `City: ${form.city}\n` +
      (form.message ? `Requirements: ${form.message}` : "");

    window.open(
      `https://wa.me/918800788654?text=${encodeURIComponent(msg)}`,
      "_blank",
    );

    toast({
      title: "Thank you!",
      description: "We'll contact you within 24 hours on WhatsApp.",
    });

    if (GOOGLE_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
        });
      } catch {
        // Silently ignore — WhatsApp redirect already happened
      }
    }

    setForm(empty);
    setSubmitting(false);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200";
  const labelClass = "block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5";

  return (
    <section className="py-24 bg-[#080f1a] relative overflow-hidden" id="order">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,144,255,0.08)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Get Your Free Demo Website in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#4da3ff]">24 Hours 🚀</span>
          </h2>
          <p className="text-white/60 text-lg">
            Fill the form below and we'll send your demo link on WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={form.fullName}
                  onChange={set("fullName")}
                  className={inputClass}
                  data-testid="input-full-name"
                />
              </div>
              <div>
                <label className={labelClass}>Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Glow Unisex Salon"
                  value={form.businessName}
                  onChange={set("businessName")}
                  className={inputClass}
                  data-testid="input-business-name"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Business Type *</label>
                <select
                  required
                  value={form.businessType}
                  onChange={set("businessType")}
                  className={inputClass + " appearance-none cursor-pointer"}
                  data-testid="select-business-type"
                >
                  <option value="" disabled>Select type...</option>
                  {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Number of Pages *</label>
                <select
                  required
                  value={form.pages}
                  onChange={set("pages")}
                  className={inputClass + " appearance-none cursor-pointer"}
                  data-testid="select-pages"
                >
                  <option value="" disabled>Select pages...</option>
                  {pageOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Phone Number *</label>
                <div className="relative flex">
                  <span className="flex items-center px-3 rounded-l-xl border border-r-0 border-white/10 bg-white/5 text-white/60 text-sm font-medium">+91</span>
                  <input
                    type="number"
                    required
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputClass + " rounded-l-none"}
                    data-testid="input-phone"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>City *</label>
                <input
                  type="text"
                  required
                  placeholder="Delhi"
                  value={form.city}
                  onChange={set("city")}
                  className={inputClass}
                  data-testid="input-city"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Message / Special Requirements</label>
              <textarea
                rows={4}
                placeholder="Tell us anything special about your business or website requirements (optional)"
                value={form.message}
                onChange={set("message")}
                className={inputClass + " resize-none"}
                data-testid="textarea-message"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-[0_0_24px_rgba(30,144,255,0.4)] hover:bg-primary/90 hover:shadow-[0_0_32px_rgba(30,144,255,0.5)] transition-all duration-200 disabled:opacity-60"
              data-testid="btn-submit-form"
            >
              <Send className="h-5 w-5" />
              {submitting ? "Opening WhatsApp..." : "Submit & Generate My Demo Website 🚀"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs mb-4">🔒 Your information is 100% safe. We never spam.</p>
            <a
              href="https://wa.me/918800788654"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
              data-testid="link-direct-whatsapp"
            >
              Or directly WhatsApp us →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
