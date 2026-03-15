import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ARCON Materiales Eléctricos",
  description: "Distribuidor de materiales eléctricos: focos LED, reflectores, paneles, cables y más.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
