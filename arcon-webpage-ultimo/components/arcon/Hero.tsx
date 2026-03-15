export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://placehold.co/1920x1080?text=Almacen+de+materiales+electricos+con+estantes+llenos+de+cables+y+productos+industriales+en+ambiente+oscuro+profesional"
          alt="Almacén de materiales eléctricos con estantes llenos de cables y productos industriales"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#111111]" />
      </div>

      {/* Decorative blue accent line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-40 bg-[#1a6fc4]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1a6fc4]/20 border border-[#1a6fc4]/40 rounded-sm px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#1a6fc4] animate-pulse" />
          <span className="text-[#1a6fc4] text-sm font-semibold uppercase tracking-widest">
            Distribuidora Eléctrica
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight text-balance">
          Iluminación y
          <span className="block text-[#1a6fc4]">Materiales Eléctricos</span>
          de Primera Calidad
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Focos LED, reflectores, paneles, cables y todo lo que necesitás para tus
          instalaciones eléctricas. Stock permanente. Precios mayoristas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/543644161250"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-8 py-4 rounded-sm transition-all duration-200 text-lg uppercase tracking-wider shadow-lg shadow-green-900/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </a>
          <a
            href="#productos"
            className="flex items-center justify-center gap-2 border-2 border-[#1a6fc4] text-[#1a6fc4] hover:bg-[#1a6fc4] hover:text-white font-bold px-8 py-4 rounded-sm transition-all duration-200 text-lg uppercase tracking-wider"
          >
            Ver Productos
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "+500", label: "Productos" },
            { value: "100%", label: "Garantía" },
            { value: "24hs", label: "Respuesta" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-[#1a6fc4]">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
