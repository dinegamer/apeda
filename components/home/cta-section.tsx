"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function CTASection() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-white fill-white" />
            <span className="text-sm font-medium">Rejoignez Notre Mission</span>
          </div>

          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-tight text-balance">
            Ensemble, Brisons le Silence sur la Dyslexie au Mali
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto text-balance">
            Chaque enfant mérite une chance égale d'apprendre. Votre soutien peut transformer des vies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#f97316] text-white hover:bg-[#ea580c] hover:scale-105 text-xl px-10 h-16 group transition-all duration-300 font-bold shadow-xl"
            >
              <a href="#partenaires" onClick={(e) => handleScrollToSection(e, "#partenaires")}>
                Devenir Partenaire
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-xl px-10 h-16 backdrop-blur-sm hover:scale-105 transition-all duration-300 font-bold"
            >
              <a href="#contact" onClick={(e) => handleScrollToSection(e, "#contact")}>
                Nous Contacter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
