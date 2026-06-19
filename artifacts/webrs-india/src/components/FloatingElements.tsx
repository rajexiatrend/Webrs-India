import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingElements() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918800788654"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
        data-testid="floating-whatsapp"
      >
        <div className="relative">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
          <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:bg-green-400 hover:scale-110 transition-all duration-200">
            <FaWhatsapp size={26} className="text-white" />
          </div>
        </div>
      </a>

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-200 shadow-lg"
            aria-label="Scroll to top"
            data-testid="btn-scroll-top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
