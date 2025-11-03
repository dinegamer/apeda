"use client"

import type React from "react"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-100 pointer-events-none z-0">
        <iframe
          src="https://my.spline.design/liquidglass-fIzBzobPNxqnYBljE20u54yK-3l5/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full scale-110"
          title="6% des élèves souffrent de dyslexie au Mali"
        />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-8 py-4 mb-12 transition-all duration-1000 shadow-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-lg md:text-xl font-semibold text-white">Programme d'Urgence Éducatif 2025-2026</span>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-40">
            {[
              { value: "3,15M", label: "Élèves au fondamental", delay: "delay-500" },
              { value: "840", label: "Cas dyslexiques ciblés", delay: "delay-700" },
              { value: "100", label: "Écoles à Bamako", delay: "delay-[900ms]" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur-md border-2 border-white rounded-3xl p-10 hover:bg-white hover:scale-105 hover:shadow-2xl transition-all duration-500 ${
                  stat.delay
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="text-6xl md:text-7xl font-heading font-bold text-primary mb-4">{stat.value}</div>
                <div className="text-lg md:text-xl font-semibold text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-[1100ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-110 hover:shadow-2xl text-xl md:text-2xl px-12 h-20 group transition-all duration-500 font-bold rounded-full"
            >
              <a href="#projet" onClick={(e) => handleScrollToSection(e, "#projet")}>
                Découvrir le Projet
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#f97316] text-white hover:bg-[#ea580c] hover:scale-110 hover:shadow-2xl text-xl md:text-2xl px-12 h-20 backdrop-blur-md transition-all duration-500 font-bold rounded-full shadow-lg"
            >
              <a href="#partenaires" onClick={(e) => handleScrollToSection(e, "#partenaires")}>
                Devenir Partenaire
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2 backdrop-blur-sm bg-white/10">
              <div className="w-1.5 h-4 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
