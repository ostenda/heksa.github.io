export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-950">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/img/image1.jpg"
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          className="w-full h-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Klub Tenisa Stołowego
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight" style={{textWrap: 'balance'}}>
            Witaj w Klubie<br />
            <span className="text-orange-500">HEKSA</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mt-6 leading-relaxed max-w-lg">
            Dołącz do naszej społeczności graczy i odkryj ekscytujący świat tenisa stołowego — dla każdego, na każdym poziomie.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-orange-500 transition-colors duration-200"
            >
              Dołącz teraz
            </a>
            <a
              href="#schedule"
              className="border border-white/30 text-white px-8 py-3 rounded-full text-base font-semibold hover:border-white/70 hover:bg-white/10 transition-colors duration-200"
            >
              Plan Zajęć
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-wrap gap-8 sm:gap-16">
          {[
            { value: '3', label: 'Programy treningowe' },
            { value: '6+', label: 'Lat doświadczenia' },
            { value: '3×', label: 'Treningi w tygodniu' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-orange-500" style={{fontVariantNumeric: 'tabular-nums'}}>{value}</p>
              <p className="text-gray-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom dark fade — blends into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
}
