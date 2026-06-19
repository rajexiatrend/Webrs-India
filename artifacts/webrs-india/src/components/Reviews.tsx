import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FFD700]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {half && (
        <svg className="w-4 h-4" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#374151" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      <span className="ml-1.5 text-xs font-semibold text-white/60">{rating.toFixed(1)}</span>
    </div>
  );
}

const reviews = [
  { name: "Rohit Sharma", business: "Glow Salon", city: "Delhi", rating: 5.0, text: "WebRS India ne hamare salon ka poora game badal diya. Ab hume 20+ WhatsApp bookings aate hain har mahine. Best investment ever!" },
  { name: "Priya Mehta", business: "FitLife Gym", city: "Mumbai", rating: 4.5, text: "Finally a web service that understands small businesses. Website bani 24 hours mein aur bilkul professional hai!" },
  { name: "Arun Tiwari", business: "Chai Sutta Cafe", city: "Indore", rating: 5.0, text: "699 mein itni achi website? Pehle mujhe believe nahi hua. Ab Google pe hamara cafe aata hai." },
  { name: "Sunita Verma", business: "Dr. Sunita Clinic", city: "Jaipur", rating: 4.5, text: "Mere patients ab online appointment book karte hain. Bahut convenient ho gaya hai." },
  { name: "Deepak Nair", business: "Kerala Spice Restaurant", city: "Bangalore", rating: 5.0, text: "Excellent service. Website ekdum sleek aur fast hai. Highly recommend!" },
  { name: "Kavya Reddy", business: "Trendy Threads Boutique", city: "Hyderabad", rating: 4.5, text: "Saari photos aur prices update karna bahut easy hai. Support team bahut helpful hai." },
  { name: "Manish Gupta", business: "Iron Zone Gym", city: "Lucknow", rating: 5.0, text: "Annual plan liya tha — domain bhi free mila. Total paisa wasool deal!" },
  { name: "Neha Singh", business: "Pink Bliss Salon", city: "Pune", rating: 4.5, text: "Hamare salon ki Google rating improve hui website aane ke baad. 4.8 stars ab!" },
  { name: "Vikram Joshi", business: "Speed Auto Garage", city: "Ahmedabad", rating: 5.0, text: "Log Google Maps se dhundte hain aur seedha WhatsApp karte hain. Kamaal hai!" },
  { name: "Anita Kumari", business: "Sunshine Kids Playschool", city: "Patna", rating: 4.5, text: "Parents ko ab hamare school ki puri info online milti hai. Admissions badhey hain!" },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#080f1a] relative overflow-hidden" id="reviews">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.03)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ffc400]">Clients Say</span>
          </h2>
          <p className="text-white/60 text-lg">Real reviews from real Indian business owners.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-[#FFD700]/30 transition-all duration-300"
              data-testid={`review-card-${i}`}
            >
              <div className="flex items-start gap-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=random&size=48&bold=true`}
                  alt={r.name}
                  className="w-12 h-12 rounded-full shrink-0 border-2 border-white/10"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="font-bold text-white text-sm">{r.name}</p>
                      <p className="text-white/50 text-xs">{r.business} · {r.city}</p>
                    </div>
                    <StarRating rating={r.rating} />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mt-3">"{r.text}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
