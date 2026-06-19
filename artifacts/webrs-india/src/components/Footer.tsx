import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#060d18] border-t border-white/10 py-14">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold font-display text-white mb-2" data-testid="footer-logo">WebRS India</div>
            <p className="text-white/50 text-sm mb-5 leading-relaxed">Professional Websites for Local Businesses</p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/918800788654"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
                aria-label="WhatsApp"
                data-testid="footer-whatsapp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 hover:bg-sky-500/20 hover:border-sky-500/40 transition-all duration-200"
                aria-label="Telegram"
                data-testid="footer-telegram"
              >
                <FaTelegram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold font-display mb-4 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white/50 text-sm hover:text-white transition-colors" data-testid="footer-link-home">Home</button>
              </li>
              <li>
                <button onClick={() => scrollTo("pricing")} className="text-white/50 text-sm hover:text-white transition-colors" data-testid="footer-link-pricing">Pricing</button>
              </li>
              <li>
                <button onClick={() => scrollTo("portfolio")} className="text-white/50 text-sm hover:text-white transition-colors" data-testid="footer-link-portfolio">Portfolio</button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="text-white/50 text-sm hover:text-white transition-colors" data-testid="footer-link-contact">Contact</button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold font-display mb-4 text-sm uppercase tracking-widest">Contact</h3>
            <div className="space-y-2.5">
              <p className="text-white/50 text-sm">contact@webrsindia.com</p>
              <a
                href="https://wa.me/918800788654"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 text-sm hover:text-green-400 transition-colors"
                data-testid="footer-phone"
              >
                +91 8800788654
              </a>
              <p className="text-white/50 text-sm">Mon–Sat 10AM–7PM</p>
              <p className="text-white/50 text-sm">Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2024 WebRS India. All Rights Reserved.</p>
          <p className="text-white/30 text-sm">Made with ❤️ in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
