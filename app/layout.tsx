import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/page-loader"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "APEDA-MALI | Association des Parents d'Élèves en Difficultés d'Apprentissage",
  description:
    "Ensemble, brisons le silence sur la dyslexie au Mali. Programme d'urgence éducatif pour la prise en charge de 840 élèves dyslexiques à Bamako.",
  keywords: "dyslexie, Mali, éducation, APEDA, Bamako, apprentissage, élèves",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <PageLoader />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
