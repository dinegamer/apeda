"use client"

import { useEffect, useRef, useState } from "react"
import { Users, GraduationCap, School, Target } from "lucide-react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const stats = [
    {
      icon: Users,
      value: "14,000",
      label: "Élèves concernés",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Target,
      value: "840",
      label: "Cas dyslexiques identifiés",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: GraduationCap,
      value: "500",
      label: "Enseignants formés",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: School,
      value: "100",
      label: "Écoles partenaires",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Notre Impact en Chiffres
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un programme ambitieux pour transformer l'éducation des élèves dyslexiques à Bamako
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`font-heading font-bold text-5xl md:text-6xl ${stat.color} mb-3`}>{stat.value}</div>
              <div className="text-lg md:text-xl text-foreground font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
