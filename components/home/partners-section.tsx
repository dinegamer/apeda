"use client"

import { useEffect, useState, useRef } from "react"

export function PartnersSection() {
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

  const partners = [
    { name: "Ministère de l'Éducation Nationale", logo: "MEN" },
    { name: "DNEF", logo: "DNEF" },
    { name: "Cluster Éducation Mali", logo: "CEM" },
    { name: "UNICEF", logo: "UNICEF" },
    { name: "Save the Children", logo: "STC" },
  ]

  return (
    <section id="partenaires" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Nos Partenaires
          </div>
          <h2
            className={`font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nos Partenaires
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Ensemble, nous construisons un avenir meilleur pour l'éducation au Mali
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 bg-muted rounded-xl hover:bg-primary/5 hover:scale-105 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-heading font-bold text-primary text-sm">{partner.logo}</span>
                </div>
                <p className="text-xs text-muted-foreground font-medium">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Devenez Partenaire</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rejoignez notre réseau de partenaires engagés pour l'éducation inclusive au Mali. Ensemble, nous pouvons
              faire la différence.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector("#contact")
                if (element) {
                  const offset = 80
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
                }
              }}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
