export default function Owner() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-[#0A1628] to-[#0F1C2E]">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-blue-400 font-semibold tracking-widest uppercase text-xs mb-3">
          Meet The Founder
        </p>

        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Shivam Kumar
        </h2>

        <p className="text-blue-300 font-medium text-lg mb-8">
          Founder & Web Designer · WebRS India
        </p>

        <div className="w-16 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

        <p className="text-gray-300 leading-relaxed mb-4 text-base max-w-2xl mx-auto">
          Hi, I'm Shivam — the founder of WebRS India. I started this
          after noticing how many talented local businesses were losing
          customers simply because they had no professional online
          presence, while competitors thrived on Google & WhatsApp bookings.
        </p>

        <p className="text-gray-300 leading-relaxed mb-12 text-base max-w-2xl mx-auto">
          My mission is simple: give every local business owner a premium,
          professional website without the premium price tag. I personally
          handle every project from start to finish — because your
          business deserves to be found online.
        </p>

        <div className="flex justify-center gap-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">24h</p>
            <p className="text-gray-500 text-xs mt-1">Delivery</p>
          </div>
          <div className="w-px bg-gray-700/50"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">100%</p>
            <p className="text-gray-500 text-xs mt-1">Client Owned</p>
          </div>
          <div className="w-px bg-gray-700/50"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">₹699</p>
            <p className="text-gray-500 text-xs mt-1">Starting Price</p>
          </div>
        </div>

      </div>
    </section>
  );
}
