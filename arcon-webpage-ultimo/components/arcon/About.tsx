export default function About() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#1a6fc4]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Calidad Garantizada",
      desc: "Todos nuestros productos cumplen con las normas IRAM y estándares de calidad eléctrica nacionales e internacionales.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#1a6fc4]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Stock Permanente",
      desc: "Amplio inventario disponible para entrega inmediata. Trabajamos con los mejores proveedores del mercado.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#1a6fc4]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Precios Mayoristas",
      desc: "Ofrecemos los mejores precios del mercado para instaladores, electricistas y constructoras.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#1a6fc4]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Asesoramiento Técnico",
      desc: "Nuestro equipo técnico te ayuda a elegir el material correcto para cada proyecto de instalación.",
    },
  ]

  return (
    <section id="nosotros" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-[#1a6fc4] opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-[#1a6fc4] opacity-60" />
            <img
              src="https://placehold.co/600x500?text=Interior+de+deposito+de+materiales+electricos+con+estantes+organizados+cables+y+productos+iluminados+profesionalmente"
              alt="Interior de depósito de materiales eléctricos con estantes organizados y productos iluminados profesionalmente"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm relative z-10"
            />
            {/* Floating stat */}
            <div className="absolute bottom-8 -right-6 bg-[#1a6fc4] text-white px-6 py-4 rounded-sm shadow-2xl z-20 hidden lg:block">
              <div className="text-3xl font-black">+10</div>
              <div className="text-xs uppercase tracking-wider opacity-90">Años de experiencia</div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1a6fc4]/10 border border-[#1a6fc4]/30 rounded-sm px-4 py-2 mb-6">
              <span className="text-[#1a6fc4] text-xs font-semibold uppercase tracking-widest">
                Quiénes somos
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 text-balance">
              Tu Distribuidora Eléctrica de Confianza
            </h2>
            <div className="w-12 h-1 bg-[#1a6fc4] mb-6" />
            <p className="text-gray-400 leading-relaxed mb-4">
              En <strong className="text-white">ARCON Materiales Eléctricos</strong> nos especializamos en la
              distribución de materiales eléctricos de primera calidad. Atendemos a instaladores,
              electricistas, constructoras y particulares.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Contamos con un amplio stock de iluminación LED, cables, tableros y accesorios
              eléctricos a los mejores precios del mercado, con asesoramiento técnico personalizado.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                  <div className="shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
