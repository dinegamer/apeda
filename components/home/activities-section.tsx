"use client"

import { GraduationCap, Users, BookOpen, Heart, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function ActivitiesSection() {
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

  const activities = [
    {
      icon: GraduationCap,
      title: "Dépistage et Évaluation",
      description: "Tests de dépistage précoce dans 100 écoles de Bamako pour identifier les 840 cas ciblés.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Users,
      title: "Formation des Enseignants",
      description: "Programme de formation pour 200 enseignants aux méthodes pédagogiques adaptées à la dyslexie.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: BookOpen,
      title: "Kits Pédagogiques",
      description: "Distribution de 840 kits comprenant outils numériques, manuels adaptés et matériel spécialisé.",
      color: "from-accent to-accent/80",
    },
    {
      icon: Heart,
      title: "Accompagnement Familial",
      description: "Soutien psychologique et guidance pour les familles d'enfants dyslexiques.",
      color: "from-primary to-secondary",
    },
  ]

  return (
    <section
      id="activites"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
            <iframe
              src="https://my.spline.design/helloliquidtext-RWIQOObRATkk24oso9Ftk4Pz-fC2/"
              className="w-full h-full border-0"
              title="Découvrez nos activités - Animation 3D"
            />
          </div> */}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-semibold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Nos Activités
          </div>
          <h2
            className={`font-heading font-bold text-5xl md:text-6xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Découvrir Nos Activités
          </h2>
          <p
            className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Des actions concrètes pour soutenir les élèves dyslexiques et transformer leur parcours éducatif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={index}
                className={`group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
