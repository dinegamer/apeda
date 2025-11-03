import { DollarSign, MapPin, Clock, Target } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src="/african-children-learning-in-classroom-mali-educat.jpg"
                alt="Élèves en classe au Mali"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div className="font-heading font-bold text-2xl text-accent">6%</div>
              </div>
              <p className="text-sm text-muted-foreground">des élèves souffrent de dyslexie selon l'OMS</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Février 2025 - Février 2026
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Programme d'Urgence Éducatif
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Un projet ambitieux pour identifier, former et accompagner les élèves dyslexiques dans le district de
              Bamako. Ensemble, nous pouvons transformer leur parcours éducatif.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-foreground mb-1">Budget: 139 026 800 FCFA</div>
                  <p className="text-sm text-muted-foreground">
                    Financement en 2 tranches semestrielles pour une gestion optimale
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-foreground mb-1">District de Bamako</div>
                  <p className="text-sm text-muted-foreground">100 écoles ciblées dans toutes les communes de Bamako</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-foreground mb-1">4 Trimestres d'Action</div>
                  <p className="text-sm text-muted-foreground">
                    Méthodologie structurée: Identification, Formation, Sensibilisation, Suivi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
