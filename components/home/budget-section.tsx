"use client"

import { TrendingUp } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function BudgetSection() {
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

  const budgetItems = [
    { category: "Kits Pédagogiques", amount: "50 400 000", percentage: 36, color: "bg-primary" },
    { category: "Formation Enseignants", amount: "30 000 000", percentage: 22, color: "bg-secondary" },
    { category: "Dépistage & Évaluation", amount: "25 000 000", percentage: 18, color: "bg-accent" },
    { category: "Accompagnement Familial", amount: "20 000 000", percentage: 14, color: "bg-primary/70" },
    { category: "Centres de Ressources", amount: "13 600 000", percentage: 10, color: "bg-secondary/70" },
  ]

  return (
    <section id="budget" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Budget Details */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Budget du Projet
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                Répartition du Budget
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Budget total de <span className="font-bold text-primary">139 000 000 FCFA</span> pour transformer
                l'éducation de 840 élèves dyslexiques
              </p>

              <div className="space-y-6">
                {budgetItems.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">{item.category}</span>
                      <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${item.percentage}%` : "0%",
                            transitionDelay: `${300 + index * 100}ms`,
                          }}
                        />
                      </div>
                      <span className="font-bold text-foreground min-w-[120px] text-right">{item.amount} FCFA</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="font-heading font-bold text-lg text-foreground">Impact Attendu</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque franc investi contribue directement à améliorer la vie scolaire et l'avenir de nos enfants
                  dyslexiques.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative w-full h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://my.spline.design/interactivecardsbyahmadi-8CldXwDlwnFudTo2nV053JwF/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  title="Interactive Cards"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
