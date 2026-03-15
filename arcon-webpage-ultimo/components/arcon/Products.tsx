"use client"

import { useState } from "react"

const categories = ["Todos", "Iluminación LED", "Cables", "Tableros", "Accesorios"]

const products = [
  {
    id: 1,
    name: "Foco LED Dicroico",
    category: "Iluminación LED",
    description: "Foco LED GU10 7W. Luz blanca fría o cálida. Alta eficiencia energética. Vida útil +25.000hs.",
    image: "https://placehold.co/400x300?text=Foco+LED+dicroico+GU10+blanco+plateado+sobre+fondo+oscuro+con+luz+brillante+emitida",
    alt: "Foco LED dicroico GU10 plateado emitiendo luz blanca brillante sobre fondo oscuro",
    badge: "Más Vendido",
    badgeColor: "#1a6fc4",
  },
  {
    id: 2,
    name: "Reflector LED 50W",
    category: "Iluminación LED",
    description: "Reflector LED exterior 50W. IP65 resistente al agua. Ideal para fachadas, jardines y locales.",
    image: "https://placehold.co/400x300?text=Reflector+LED+50W+negro+rectangular+para+exterior+con+disipador+de+calor+metalico",
    alt: "Reflector LED 50W negro rectangular para exterior con disipador de calor metálico",
    badge: "Stock",
    badgeColor: "#25D366",
  },
  {
    id: 3,
    name: "Panel LED Embutido 18W",
    category: "Iluminación LED",
    description: "Panel LED cuadrado embutido 18W. Marco blanco o plateado. Luz uniforme y sin parpadeos.",
    image: "https://placehold.co/400x300?text=Panel+LED+cuadrado+embutido+blanco+18W+con+luz+uniforme+y+bordes+plateados",
    alt: "Panel LED cuadrado embutido blanco 18W con luz uniforme y bordes plateados",
    badge: null,
    badgeColor: null,
  },
  {
    id: 4,
    name: "Panel LED Redondo",
    category: "Iluminación LED",
    description: "Downlight circular LED 12W. Perfil ultra delgado. Embutible. Luz blanca neutra 4000K.",
    image: "https://placehold.co/400x300?text=Downlight+circular+LED+redondo+plateado+12W+ultra+delgado+embutible+fondo+blanco",
    alt: "Downlight circular LED redondo plateado 12W ultra delgado embutible sobre fondo blanco",
    badge: "Oferta",
    badgeColor: "#e53e3e",
  },
  {
    id: 5,
    name: "Panel LED Exterior",
    category: "Iluminación LED",
    description: "Panel LED de superficie para exterior IP65. 24W. Resistente a lluvia y polvo. Ideal para patios.",
    image: "https://placehold.co/400x300?text=Panel+LED+exterior+cuadrado+superficie+gris+oscuro+IP65+24W+para+patio+y+garaje",
    alt: "Panel LED exterior cuadrado de superficie gris oscuro IP65 24W para patio y garaje",
    badge: null,
    badgeColor: null,
  },
  {
    id: 6,
    name: "Reflector LED 100W",
    category: "Iluminación LED",
    description: "Reflector LED alta potencia 100W. IP66. Para canchas, depósitos y grandes espacios.",
    image: "https://placehold.co/400x300?text=Reflector+LED+alta+potencia+100W+negro+grande+con+disipador+metalico+para+uso+industrial",
    alt: "Reflector LED alta potencia 100W negro grande con disipador metálico para uso industrial",
    badge: "Industrial",
    badgeColor: "#805ad5",
  },
  {
    id: 7,
    name: "Cable Unipolar 2.5mm",
    category: "Cables",
    description: "Cable unipolar IRAM 2183-NM247-3 2.5mm. Distintos colores. Rollo x 100m. Apto intemperie.",
    image: "https://placehold.co/400x300?text=Rollo+de+cable+unipolar+electrico+2.5mm+rojo+amarillo+y+verde+sobre+fondo+gris+industrial",
    alt: "Rollo de cable unipolar eléctrico 2.5mm en colores rojo, amarillo y verde sobre fondo gris industrial",
    badge: "Mayorista",
    badgeColor: "#dd6b20",
  },
  {
    id: 8,
    name: "Cable Unipolar 4mm",
    category: "Cables",
    description: "Cable unipolar 4mm para instalaciones de alta demanda. Rollo x 100m. Norma IRAM.",
    image: "https://placehold.co/400x300?text=Rollo+cable+unipolar+4mm+negro+azul+para+instalaciones+electricas+industriales+fondo+oscuro",
    alt: "Rollo de cable unipolar 4mm negro y azul para instalaciones eléctricas industriales sobre fondo oscuro",
    badge: null,
    badgeColor: null,
  },
  {
    id: 9,
    name: "Cable Bipolar 2x2.5mm",
    category: "Cables",
    description: "Cable bipolar plano 2x2.5mm. Aislación doble. Para electrodomésticos y herramientas.",
    image: "https://placehold.co/400x300?text=Cable+bipolar+plano+2x2.5mm+blanco+arrollado+para+electrodomesticos+fondo+gris+claro",
    alt: "Cable bipolar plano 2x2.5mm blanco arrollado para electrodomésticos sobre fondo gris claro",
    badge: null,
    badgeColor: null,
  },
  {
    id: 10,
    name: "Caja Térmica 4 Módulos",
    category: "Tableros",
    description: "Caja para termomagnética DIN 4 módulos. Riel DIN incluido. Tapa transparente.",
    image: "https://placehold.co/400x300?text=Caja+termica+electrica+plastica+blanca+4+modulos+con+riel+DIN+y+tapa+transparente",
    alt: "Caja térmica eléctrica plástica blanca de 4 módulos con riel DIN y tapa transparente",
    badge: null,
    badgeColor: null,
  },
  {
    id: 11,
    name: "Disyuntor Termomagnético",
    category: "Tableros",
    description: "Disyuntor termomagnético 10A-40A. Curva C. Norma IEC 60947-2. Marca certificada.",
    image: "https://placehold.co/400x300?text=Disyuntor+termomagnetico+negro+10+40A+para+tablero+electrico+DIN+con+palanca+roja",
    alt: "Disyuntor termomagnético negro de 10 a 40A para tablero eléctrico DIN con palanca roja",
    badge: "Certificado",
    badgeColor: "#1a6fc4",
  },
  {
    id: 12,
    name: "Cinta Aisladora",
    category: "Accesorios",
    description: "Cinta aisladora PVC 19mm x 20m. Pack x 10 unidades. Distintos colores. Alta resistencia.",
    image: "https://placehold.co/400x300?text=Pack+de+cintas+aisladoras+PVC+de+colores+rojo+negro+azul+amarillo+apiladas+sobre+blanco",
    alt: "Pack de cintas aisladoras PVC de colores rojo, negro, azul y amarillo apiladas sobre fondo blanco",
    badge: "Pack x10",
    badgeColor: "#dd6b20",
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="productos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a6fc4]/10 border border-[#1a6fc4]/30 rounded-sm px-4 py-2 mb-4">
            <span className="text-[#1a6fc4] text-xs font-semibold uppercase tracking-widest">
              Catálogo
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 text-balance">
            Nuestros Productos
          </h2>
          <div className="w-16 h-1 bg-[#1a6fc4] mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Stock permanente de materiales eléctricos de primera línea.
            Precios mayoristas para instaladores y electricistas.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1a6fc4] text-white"
                  : "bg-[#1d1d1d] text-gray-400 border border-[#2d2d2d] hover:border-[#1a6fc4] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#1a6fc4]/50 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#1a6fc4]/10 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider"
                    style={{ backgroundColor: product.badgeColor ?? "#1a6fc4" }}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-[#1a6fc4] font-semibold uppercase tracking-wider mb-2">
                  {product.category}
                </span>
                <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>
                <a
                  href={`https://wa.me/543644161250?text=Hola! Me interesa el producto: ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1a6fc4] hover:bg-[#1558a0] text-white text-sm font-bold py-2.5 px-4 rounded-sm transition-colors uppercase tracking-wider"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Consultar Precio
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
