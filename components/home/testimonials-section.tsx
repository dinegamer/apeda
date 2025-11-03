"use client"

import { Quote } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function TestimonialsSection() {
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

  const testimonials = [
    {
      quote:
        "Grâce à APEDA-MALI, mon fils a retrouvé confiance en lui. Les enseignants comprennent maintenant ses difficultés et l'aident à progresser.",
      author: "Fatoumata D.",
      role: "Parent d'élève",
      image: "/african-mother-portrait.jpg",
    },
    {
      quote:
        "La formation m'a ouvert les yeux sur la dyslexie. Je peux maintenant identifier et aider mes élèves en difficulté avec des méthodes adaptées.",
      author: "Mamadou K.",
      role: "Enseignant, École Primaire",
      image: "/african-male-teacher-portrait.jpg",
    },
    {
      quote:
        "Ce programme est essentiel pour notre système éducatif. Il permet de ne laisser aucun enfant sur le bord du chemin.",
      author: "Aminata S.",
      role: "Directrice d'École",
      image: "/african-female-principal-portrait.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className={`inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Témoignages
          </div>
          <h2
            className={`font-heading font-bold text-3xl md:text-4xl mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Témoignages
          </h2>
          <p
            className={`text-lg text-white/80 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Découvrez l'impact de notre programme à travers les voix de notre communauté
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-accent mb-4" />
              <p className="text-white/90 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-heading font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/70">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
