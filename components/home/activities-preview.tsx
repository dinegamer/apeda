import { BookOpen, Users, Compass, HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ActivitiesPreview() {
  const activities = [
    {
      icon: HeartPulse,
      title: "Consultation Psychopédagogique",
      description: "Évaluation et diagnostic personnalisé pour chaque élève en difficulté d'apprentissage.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Formation des Enseignants",
      description: "500 enseignants formés aux méthodes d'enseignement adaptées aux élèves dyslexiques.",
      color: "secondary",
    },
    {
      icon: Compass,
      title: "Orientation Scolaire",
      description: "Accompagnement personnalisé pour guider les élèves vers la réussite académique.",
      color: "accent",
    },
    {
      icon: BookOpen,
      title: "Traitement et Rééducation",
      description: "Programmes de rééducation adaptés pour surmonter les difficultés d'apprentissage.",
      color: "primary",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Nos Activités</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un accompagnement complet pour transformer l'expérience éducative des élèves dyslexiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 bg-${activity.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <activity.icon className={`w-7 h-7 text-${activity.color}`} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{activity.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
            <Link href="/activites">Découvrir Toutes Nos Activités</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
