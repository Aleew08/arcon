"use client"

import { useState, useEffect } from "react"

const WA_NUMBER = "543644161250"
const WA_BASE = `https://wa.me/${WA_NUMBER}`
const WA_MAIN = `${WA_BASE}?text=Hola%20ARCON!%20Me%20gustar%C3%ADa%20consultar%20sobre%20sus%20productos.`

function waProduct(name: string) {
  return `${WA_BASE}?text=Hola!%20Me%20interesa%3A%20${encodeURIComponent(name)}`
}

const PRODUCTS = [
  { id: 1, name: "Foco LED Dicroico 7W", cat: "Iluminación LED", desc: "Foco LED GU10 7W. Luz blanca fría o cálida. Alta eficiencia energética. Vida útil +25.000hs.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/wYMtWPwEa5QE8EzSoNMdt-9zisWIx5G4OojeMy0pwdKzlsAJhsJB.jpg", badge: "Más Vendido", badgeColor: "#1a6fc4" },
  { id: 2, name: "Reflector LED 50W", cat: "Iluminación LED", desc: "Reflector LED exterior 50W. IP65 resistente al agua. Ideal para fachadas y jardines.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/BtTWx8Gt66TcgpgaZCwUi-7HPqLuBSSNeErzg74PTSWd0LbvzccT.jpg", badge: "Stock", badgeColor: "#16a34a" },
  { id: 3, name: "Panel LED Embutido 18W", cat: "Iluminación LED", desc: "Panel LED cuadrado embutido 18W. Marco plateado. Luz uniforme sin parpadeos.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/OSG9KzejCI0zDITcNEu4U-qYlYik7724yXte6p1B6x7u9BH0Mo3A.jpg", badge: null, badgeColor: null },
  { id: 4, name: "Downlight Circular 12W", cat: "Iluminación LED", desc: "Downlight LED circular embutible 12W. Perfil ultra delgado. Luz blanca neutra 4000K.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/sNRDhr8WTxjvAKdNPipq5-i4May1ECc5dTYwUwZigfqieMyaxGzj.jpg", badge: "Oferta", badgeColor: "#dc2626" },
  { id: 5, name: "Panel LED Exterior 24W", cat: "Iluminación LED", desc: "Panel LED de superficie exterior IP65. 24W. Resistente a lluvia y polvo.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/mCeRRaQfgrELlxrn3ror4-zjRt0lHckN0MQrCcmGlpEyw7PSBg1Z.jpg", badge: null, badgeColor: null },
  { id: 6, name: "Reflector LED 100W", cat: "Iluminación LED", desc: "Reflector LED alta potencia 100W. IP66. Para canchas, depósitos y grandes espacios.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/s3nssarEPZm4zQ4T4TZNB-Bp81YLGcikpgj2Mo9x0afEbkqILBKi.jpg", badge: "Industrial", badgeColor: "#7c3aed" },
  { id: 7, name: "Cable Unipolar 2.5mm", cat: "Cables", desc: "Cable unipolar IRAM 2.5mm. Distintos colores. Rollo x 100m. Apto intemperie.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/8woCWvZjmxNA8Wg2B3AGV-YUHBhJVZryCSWANdxHHAUKyi5RaHl4.jpg", badge: "Mayorista", badgeColor: "#ea580c" },
  { id: 8, name: "Cable Unipolar 4mm", cat: "Cables", desc: "Cable unipolar 4mm para instalaciones de alta demanda. Rollo x 100m. Norma IRAM.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/d9Q1cXU06FW6RYKN0VoO5-2YMWTzAfSWouvT5sBWbtlZSRyp8Lz8.jpg", badge: null, badgeColor: null },
  { id: 9, name: "Cable Bipolar 2x2.5mm", cat: "Cables", desc: "Cable bipolar plano 2x2.5mm. Aislación doble. Para electrodomésticos y herramientas.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/IU4rX6GBq2n9BDfi74cYi-LElJHPNLAcuCxq5q9773ZJLNktjpNF.jpg", badge: null, badgeColor: null },
  { id: 10, name: "Caja Térmica 4 Módulos", cat: "Tableros", desc: "Caja para termomagnética DIN 4 módulos. Riel DIN incluido. Tapa transparente.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/lkDleBu5yu99tjTtfCUbt-L0x93qKnKxzsbj0muQ2j7QxBxPrFuN.jpg", badge: null, badgeColor: null },
  { id: 11, name: "Disyuntor Termomagnético SICA C25", cat: "Tableros", desc: "Disyuntor termomagnético SICA Limit C25, 240V/415V. Curva C. Certificado IRAM.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/0uPHIzpN6Byg1OEwfb5Bl-DeuCs3eMuB4GuiVngOV579IhpODmB7.jpg", badge: "Certificado", badgeColor: "#1a6fc4" },
  { id: 12, name: "Cinta Aisladora Pack x10", cat: "Accesorios", desc: "Cinta aisladora PVC MERAKI 19mm x 10m. Autoextinguible. Pack x10 unidades. Color negro.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/lnAVnuMutMtttp3cyqXNU-sDaAbg3cRpgYInqSkuFW1sWlWQ1wsM.jpg", badge: "Pack x10", badgeColor: "#ea580c" },
  { id: 13, name: "Amoladora Angular LUSQTOFF 720W 4.5\"", cat: "Herramientas", desc: "Amoladora angular LUSQTOFF 720W, disco 115mm (4.5\"), 50Hz. Ideal para corte y desbaste en obra.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/zEj3q8Nxz431cz2g2yohD-qrJpdnpwJBHtpbar0gpCozzbtNUdHG.webp", badge: "Nuevo", badgeColor: "#ea580c" },
  { id: 14, name: "Taladro Percutor LUSQTOFF 13mm + Kit", cat: "Herramientas", desc: "Taladro percutor eléctrico LUSQTOFF 13mm con kit de accesorios. Color azul claro. 60Hz. Reversible y potente.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/HOBCe17Yuv3akYjYVK6ZD-2jcbmYxEmMF8E2AoMlRiQxfrWI51RI.webp", badge: "Nuevo", badgeColor: "#ea580c" },
]

const CATS = ["Todos", "Iluminación LED", "Cables", "Tableros", "Accesorios", "Herramientas"]

const WA_ICON = (size = 20) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCat, setActiveCat] = useState("Todos")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const filtered = activeCat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === activeCat)

  const S = {
    page: { backgroundColor: "#0f0f0f", color: "#ffffff", fontFamily: "'Segoe UI', Arial, sans-serif", minHeight: "100vh", margin: 0, padding: 0 } as React.CSSProperties,
    nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.3s", backgroundColor: scrolled ? "rgba(15,15,15,0.96)" : "transparent", borderBottom: scrolled ? "1px solid #222" : "none", backdropFilter: scrolled ? "blur(12px)" : "none" } as React.CSSProperties,
    navInner: { maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 } as React.CSSProperties,
    container: { maxWidth: 1280, margin: "0 auto", padding: "0 24px" } as React.CSSProperties,
    sectionTitle: { fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#ffffff", marginBottom: 12, marginTop: 0 } as React.CSSProperties,
    blueLine: { width: 52, height: 4, backgroundColor: "#1a6fc4", margin: "0 auto 20px", borderRadius: 2 } as React.CSSProperties,
    badge: { display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 4, border: "1px solid rgba(26,111,196,0.35)", backgroundColor: "rgba(26,111,196,0.1)", marginBottom: 14 } as React.CSSProperties,
    badgeText: { color: "#1a6fc4", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const },
  }

  return (
    <div style={S.page}>

      {/* ── NAVBAR ── */}
      <header style={S.nav}>
        <div style={S.navInner}>
          <a href="#inicio" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tlTLvynfZFzT6Ph2GCQi9-qvumbqacOsRNaa4S7QeE2Ret445N43.jpg" alt="ARCON Materiales Eléctricos" referrerPolicy="no-referrer" crossOrigin="anonymous" style={{ height: 46, width: "auto", objectFit: "contain" }} />
          </a>

          {/* Desktop links */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {["Inicio", "Productos", "Nosotros", "Contacto"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ color: "#aaa", textDecoration: "none", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}>
                {l}
              </a>
            ))}
            <a href={WA_MAIN} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 7, backgroundColor: "#25D366", color: "#fff", textDecoration: "none", padding: "9px 18px", borderRadius: 6, fontSize: 12, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>
              {WA_ICON(18)} WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="inicio" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0a0a0a 0%, #0f1829 50%, #0a0a0a 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "radial-gradient(circle at 20% 50%, rgba(26,111,196,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,111,196,0.08) 0%, transparent 40%)" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 880, margin: "0 auto", padding: "140px 24px 80px", textAlign: "center" }}>
          <div style={S.badge}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#1a6fc4", display: "inline-block" }} />
            <span style={S.badgeText}>Distribuidora Eléctrica — Stock Permanente</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 22, marginTop: 0, color: "#fff" }}>
            Iluminación LED y{" "}
            <span style={{ color: "#1a6fc4" }}>Materiales Eléctricos</span>{" "}
            de Primera Calidad
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#999", lineHeight: 1.75, marginBottom: 40, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
            Focos LED, reflectores, paneles, cables, tableros y todo lo que necesitás para tus instalaciones. Precios mayoristas para instaladores y electricistas.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={WA_MAIN} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#25D366", color: "#fff", textDecoration: "none", padding: "15px 30px", borderRadius: 6, fontSize: 15, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {WA_ICON(20)} Consultar por WhatsApp
            </a>
            <a href="#productos"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid #1a6fc4", color: "#1a6fc4", textDecoration: "none", padding: "15px 30px", borderRadius: 6, fontSize: 15, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", backgroundColor: "transparent" }}>
              Ver Productos
            </a>
          </div>

          <div style={{ marginTop: 80, display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap" }}>
            {[{ v: "+500", l: "Productos" }, { v: "100%", l: "Garantía" }, { v: "24hs", l: "Respuesta" }].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.1rem", fontWeight: 900, color: "#1a6fc4", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: 11, color: "#666", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="productos" style={{ padding: "96px 0", backgroundColor: "#0f0f0f" }}>
        <div style={S.container}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={S.badge}><span style={S.badgeText}>Catálogo</span></div>
            <h2 style={S.sectionTitle}>Nuestros Productos</h2>
            <div style={S.blueLine} />
            <p style={{ color: "#777", maxWidth: 500, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
              Stock permanente de materiales eléctricos de primera línea. Consultá precio por WhatsApp.
            </p>
          </div>

          {/* Category filters */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 44 }}>
            {CATS.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                style={{ padding: "8px 18px", borderRadius: 6, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", cursor: "pointer", border: activeCat === cat ? "1px solid #1a6fc4" : "1px solid #2a2a2a", backgroundColor: activeCat === cat ? "#1a6fc4" : "#181818", color: activeCat === cat ? "#fff" : "#777", transition: "all 0.2s" }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 22 }}>
            {filtered.map((p) => (
              <div key={p.id} style={{ backgroundColor: "#181818", border: "1px solid #252525", borderRadius: 8, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative" }}>
                  <img src={p.img} alt={p.name} referrerPolicy="no-referrer" crossOrigin="anonymous" style={{ width: "100%", height: 195, objectFit: "cover", display: "block" }} />
                  {p.badge && (
                    <span style={{ position: "absolute", top: 10, left: 10, backgroundColor: p.badgeColor!, color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {p.badge}
                    </span>
                  )}
                  <div style={{ position: "absolute", top: 10, right: 10, backgroundColor: "rgba(26,111,196,0.15)", border: "1px solid rgba(26,111,196,0.35)", borderRadius: 4, padding: "3px 8px" }}>
                    <span style={{ color: "#1a6fc4", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.cat}</span>
                  </div>
                </div>
                <div style={{ padding: "18px 18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 8, marginTop: 0, lineHeight: 1.35 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6, flex: 1, marginTop: 0, marginBottom: 18 }}>{p.desc}</p>
                  <a href={waProduct(p.name)} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, backgroundColor: "#25D366", color: "#fff", textDecoration: "none", padding: "10px 16px", borderRadius: 6, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    {WA_ICON(14)} Consultar Precio
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="nosotros" style={{ padding: "96px 0", backgroundColor: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
        <div style={S.container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={S.badge}><span style={S.badgeText}>Nosotros</span></div>
            <h2 style={S.sectionTitle}>¿Por qué elegirnos?</h2>
            <div style={S.blueLine} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { icon: "✓", title: "Calidad Garantizada", desc: "Todos nuestros productos cumplen normas IRAM y certificaciones internacionales." },
              { icon: "□", title: "Stock Permanente", desc: "Más de 500 productos disponibles para entrega inmediata sin demoras." },
              { icon: "$", title: "Precios Mayoristas", desc: "Precios competitivos para instaladores, electricistas y constructoras." },
              { icon: "?", title: "Asesoramiento Técnico", desc: "Nuestro equipo te asesora para elegir el producto correcto para cada proyecto." },
            ].map((f) => (
              <div key={f.title} style={{ backgroundColor: "#131313", border: "1px solid #222", borderRadius: 8, padding: "30px 24px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, backgroundColor: "rgba(26,111,196,0.12)", border: "1px solid rgba(26,111,196,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#1a6fc4" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10, marginTop: 0 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" style={{ padding: "96px 0", backgroundColor: "#0f0f0f", borderTop: "1px solid #1a1a1a" }}>
        <div style={S.container}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={S.badge}><span style={S.badgeText}>Contacto</span></div>
            <h2 style={S.sectionTitle}>Contactanos</h2>
            <div style={S.blueLine} />
            <p style={{ color: "#777", maxWidth: 480, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
              Consultá precios, disponibilidad y asesoramiento técnico directamente por WhatsApp.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
            <div style={{ backgroundColor: "#131313", border: "1px solid #222", borderRadius: 8, padding: "28px 24px", textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#25D366" style={{ display: "inline-block" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 6, marginTop: 0 }}>WhatsApp Directo</h3>
              <p style={{ color: "#666", fontSize: 13, marginBottom: 18, marginTop: 0 }}>+54 364 416-1250</p>
              <a href={WA_MAIN} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 7, backgroundColor: "#25D366", color: "#fff", textDecoration: "none", padding: "11px 22px", borderRadius: 6, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                {WA_ICON(16)} Escribir ahora
              </a>
            </div>

            <div style={{ backgroundColor: "#131313", border: "1px solid #222", borderRadius: 8, padding: "28px 24px", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, backgroundColor: "rgba(26,111,196,0.12)", border: "1px solid rgba(26,111,196,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#1a6fc4" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 8, marginTop: 0 }}>Horarios de Atención</h3>
              <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7, margin: 0 }}>Lunes a Viernes: 8:00 – 18:00<br />Sábados: 8:00 – 13:00</p>
            </div>

            <div style={{ backgroundColor: "#131313", border: "1px solid #222", borderRadius: 8, padding: "28px 24px", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, backgroundColor: "rgba(26,111,196,0.12)", border: "1px solid rgba(26,111,196,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#1a6fc4" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 8, marginTop: 0 }}>Formas de Pago</h3>
              <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7, margin: 0 }}>Efectivo · Transferencia<br />Mercado Pago · Tarjetas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#080808", borderTop: "1px solid #1a1a1a", padding: "48px 0 24px" }}>
        <div style={S.container}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32, marginBottom: 40 }}>
            <div style={{ maxWidth: 280 }}>
              <img src="/images/arcon-logo.jpg" alt="ARCON Materiales Eléctricos" style={{ height: 42, width: "auto", objectFit: "contain", marginBottom: 14 }} />
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Distribuidora de materiales eléctricos. Calidad, stock y precios mayoristas para instaladores y electricistas.
              </p>
            </div>
            <div>
              <h4 style={{ color: "#fff", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, marginTop: 0 }}>Productos</h4>
              {["Iluminación LED", "Cables", "Tableros", "Accesorios", "Herramientas"].map((l) => (
                <a key={l} href="#productos" onClick={() => setActiveCat(l)}
                  style={{ display: "block", color: "#555", textDecoration: "none", fontSize: 13, marginBottom: 8 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1a6fc4")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
                  {l}
                </a>
              ))}
            </div>
            <div>
              <h4 style={{ color: "#fff", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, marginTop: 0 }}>Contacto</h4>
              <a href={WA_MAIN} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 7, backgroundColor: "#25D366", color: "#fff", textDecoration: "none", padding: "10px 20px", borderRadius: 6, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>
                {WA_ICON(15)} WhatsApp
              </a>
              <p style={{ color: "#555", fontSize: 13, marginTop: 14, marginBottom: 0 }}>+54 364 416-1250</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 20, textAlign: "center" }}>
            <p style={{ color: "#444", fontSize: 12, margin: 0 }}>
              © {new Date().getFullYear()} ARCON Materiales Eléctricos. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a href={WA_MAIN} target="_blank" rel="noopener noreferrer"
        style={{ position: "fixed", bottom: 28, right: 28, zIndex: 200, width: 58, height: 58, borderRadius: "50%", backgroundColor: "#25D366", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,0.45)", textDecoration: "none" }}>
        {WA_ICON(26)}
      </a>
    </div>
  )
}
