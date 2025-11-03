"use client"

import { Calendar, MapPin, Users, DollarSign, CheckCircle2 } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projectDetails = [
    { icon: Calendar, label: "Durée", value: "2025-2026 (1 an)" },
    { icon: MapPin, label: "Localisation", value: "Bamako, Mali" },
    { icon: Users, label: "Bénéficiaires", value: "840 élèves dyslexiques" },
    { icon: DollarSign, label: "Budget", value: "139 000 000 FCFA" },
  ]

  const objectives = [
    "Dépistage précoce de 840 cas de dyslexie dans 100 écoles",
    "Formation de 200 enseignants aux méthodes adaptées",
    "Distribution de 840 kits pédagogiques spécialisés",
    "Accompagnement psychologique des familles",
    "Création de 10 centres de ressources éducatives",
  ]

  return (
    <section id="projet" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Notre Projet
          </div>
          <h2
            className={`font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Programme d'Urgence Éducatif
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Un projet ambitieux pour transformer l'éducation des enfants dyslexiques au Mali
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Project Details */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Détails du Projet</h3>
              <div className="space-y-6">
                {projectDetails.map((detail, index) => {
                  const Icon = detail.icon
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{detail.label}</div>
                        <div className="font-semibold text-lg text-foreground">{detail.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Objectifs Clés</h3>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group hover:translate-x-2 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-muted-foreground leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
