"use client"

import type React from "react"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    if (sectionId === "#accueil") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.querySelector(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO_APEDA_MALI1%5B1%5D-IFUekn3CVtQ98o0XkwbbogGY9FxQFc.jpg"
                  alt="APEDA-MALI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-heading font-bold text-lg">APEDA-MALI</div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Ensemble, brisons le silence sur la dyslexie au Mali. Chaque enfant mérite une chance égale d'apprendre.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#a-propos"
                  onClick={(e) => handleScrollToSection(e, "#a-propos")}
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#projet"
                  onClick={(e) => handleScrollToSection(e, "#projet")}
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Le Projet
                </a>
              </li>
              <li>
                <a
                  href="#dyslexie"
                  onClick={(e) => handleScrollToSection(e, "#dyslexie")}
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  La Dyslexie
                </a>
              </li>
              <li>
                <a
                  href="#activites"
                  onClick={(e) => handleScrollToSection(e, "#activites")}
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Activités
                </a>
              </li>
              <li>
                <a
                  href="#partenaires"
                  onClick={(e) => handleScrollToSection(e, "#partenaires")}
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Partenaires
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Sébénikoro-Bamako, Rue 664, Porte 40</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>78 05 91 22 / 76 43 21 34</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>apedamali@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/80 mt-4 leading-relaxed">
              Rejoignez notre communauté et restez informé de nos actions.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} APEDA-MALI. Tous droits réservés. Fondée en 2021 par Ya Samaké.</p>
        </div>
      </div>
    </footer>
  )
}
