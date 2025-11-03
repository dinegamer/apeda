"use client"

import { Brain, BookOpen, AlertCircle, Lightbulb } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function DyslexiaSection() {
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

  const infoCards = [
    {
      icon: Brain,
      title: "Qu'est-ce que la dyslexie ?",
      description:
        "Un trouble spécifique de l'apprentissage de la lecture et de l'orthographe, d'origine neurologique, qui affecte 6% des élèves maliens.",
      color: "from-primary to-primary/80",
    },
    {
      icon: AlertCircle,
      title: "Signes à surveiller",
      description:
        "Difficultés à lire, confusion de lettres, lenteur d'écriture, problèmes de mémorisation, et fatigue lors de la lecture.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: BookOpen,
      title: "Impact sur l'apprentissage",
      description:
        "Sans accompagnement adapté, la dyslexie peut entraîner décrochage scolaire, perte de confiance et difficultés d'insertion.",
      color: "from-accent to-accent/80",
    },
    {
      icon: Lightbulb,
      title: "Solutions et adaptations",
      description:
        "Méthodes pédagogiques adaptées, outils numériques, accompagnement personnalisé et formation des enseignants sont essentiels.",
      color: "from-primary to-secondary",
    },
  ]

  return (
    <section id="dyslexie" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/squarechipsfallinginplace-LFb2jAxYePxFAh2wjH9UIiS3/"
          className="w-full h-full border-0"
          title="Square Chips Background"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`inline-block bg-accent/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Comprendre la Dyslexie
          </div>
          <h2
            className={`font-heading font-bold text-5xl md:text-6xl text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            La Dyslexie au Mali
          </h2>
          <p
            className={`text-xl text-white/90 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Informations essentielles pour comprendre et accompagner les élèves dyslexiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infoCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className={`group bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-12 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xl text-foreground mb-2">Important à savoir</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La dyslexie n'est pas un signe d'intelligence réduite. Avec un accompagnement adapté et des outils
                appropriés, les élèves dyslexiques peuvent réussir brillamment leur parcours scolaire et professionnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
