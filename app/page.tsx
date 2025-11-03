import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { AboutSection } from "@/components/home/about-section"
import { ProjectSection } from "@/components/home/project-section"
import { DyslexiaSection } from "@/components/home/dyslexia-section"
import { ActivitiesSection } from "@/components/home/activities-section"
import { BudgetSection } from "@/components/home/budget-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PartnersSection } from "@/components/home/partners-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProjectSection />
      <DyslexiaSection />
      <ActivitiesSection />
      <BudgetSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  )
}
