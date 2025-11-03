import { Heart, Target, Eye, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">À Propos d'APEDA-MALI</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Depuis 2021, nous œuvrons pour un système éducatif inclusif où chaque enfant, quelle que soit sa
              difficulté d'apprentissage, peut réussir.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'APEDA-MALI (Association des Parents d'Élèves en Difficultés d'Apprentissage au Mali) a été créée en{" "}
                  <strong className="text-foreground">2021</strong> par{" "}
                  <strong className="text-foreground">Ya Samaké</strong>, enseignant-chercheur malien passionné par
                  l'éducation inclusive.
                </p>
                <p>
                  Constatant que de nombreux élèves étaient renvoyés de l'école sans que leurs difficultés
                  d'apprentissage ne soient identifiées ni prises en charge, Ya Samaké a décidé d'agir. La dyslexie,
                  touchant environ 6% des élèves selon l'OMS, restait largement méconnue au Mali.
                </p>
                <p>
                  Depuis sa création, APEDA-MALI s'est donnée pour mission de sensibiliser, former et accompagner tous
                  les acteurs de l'éducation pour que plus aucun enfant ne soit laissé pour compte.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src="/ya-samake-teacher-mali-education-founder.jpg"
                  alt="Ya Samaké, fondateur d'APEDA-MALI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Identifier, accompagner et soutenir les élèves en difficultés d'apprentissage, en particulier les
                dyslexiques, à travers la formation des enseignants, la sensibilisation des familles et la mise en place
                de programmes de rééducation adaptés.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Notre Vision 2033</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  "Zéro échec scolaire lié aux difficultés spécifiques d'apprentissage"
                </strong>{" "}
                - Un système éducatif malien où chaque enfant, quelle que soit sa difficulté, reçoit le soutien
                nécessaire pour réussir.
              </p>
            </div>
          </div>

          {/* Valeurs */}
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-4">Nos Valeurs</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Inclusion", description: "Chaque enfant a sa place dans le système éducatif" },
              { title: "Bienveillance", description: "Accompagner avec empathie et respect" },
              { title: "Excellence", description: "Former aux meilleures pratiques pédagogiques" },
              { title: "Collaboration", description: "Travailler ensemble pour plus d'impact" },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Notre Équipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une équipe dévouée de professionnels de l'éducation et de la psychopédagogie
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Ya Samaké</h3>
                  <p className="text-secondary font-medium mb-4">Fondateur & Coordinateur</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Enseignant-chercheur malien, spécialiste des difficultés d'apprentissage. Passionné par l'éducation
                    inclusive, Ya Samaké a consacré sa carrière à aider les élèves en difficulté à réaliser leur plein
                    potentiel.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { role: "Superviseurs", count: "3", description: "Coordination terrain" },
                { role: "Animateurs", count: "12", description: "Accompagnement direct" },
                { role: "Psychopédagogues", count: "5", description: "Évaluation & suivi" },
              ].map((team, index) => (
                <div key={index} className="bg-white border border-border rounded-2xl p-6 text-center">
                  <div className="font-heading font-bold text-3xl text-primary mb-2">{team.count}</div>
                  <div className="font-heading font-bold text-lg text-foreground mb-1">{team.role}</div>
                  <p className="text-sm text-muted-foreground">{team.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
