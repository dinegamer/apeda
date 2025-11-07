"use client"

import { Heart, Users, Target, Award } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function AboutSection() {
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

  const features = [
    {
      icon: Heart,
      title: "Notre Mission",
      description:
        "Soutenir les élèves dyslexiques et leurs familles avec des ressources adaptées et un accompagnement personnalisé.",
    },
    {
      icon: Users,
      title: "Notre Équipe",
      description:
        "Fondée en 2021 par Ya Samaké, notre association regroupe des parents, éducateurs et professionnels engagés.",
    },
    {
      icon: Target,
      title: "Notre Vision",
      description:
        "Un système éducatif malien inclusif où chaque enfant dyslexique peut réussir et s'épanouir pleinement.",
    },
    {
      icon: Award,
      title: "Nos Valeurs",
      description:
        "Inclusion, excellence éducative, solidarité et innovation pédagogique au service de tous les apprenants.",
    },
  ]

  return (
    <section id="a-propos" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <iframe
          src="https://my.spline.design/purpleweb-gpp5Uwq9z949NKD9Zz2Tthbh/"
          className="w-full h-full border-0"
          title="Purple Web Background"
        /> */}
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            À Propos de Nous
          </div>
          <h2
            className={`font-heading font-bold text-5xl md:text-6xl text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            APEDA-MALI
          </h2>
          <p
            className={`text-xl text-white/90 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Association des Parents d'Élèves en Difficulté d'Apprentissage au Mali - SOS Apprenant en Difficulté
            Spécifique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-white/40 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
