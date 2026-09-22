import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ModuleExplorer } from '@/components/module-explorer'
import { TutorsSection } from '@/components/tutors-section'
import { WhyChoose } from '@/components/why-choose'
import { AudienceSection } from '@/components/audience-section'
import { PlansSection } from '@/components/plans-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { MentorshipSection } from '@/components/mentorship-section'
import { SiteFooter } from '@/components/site-footer'
import { AiAssistant } from '@/components/ai-assistant'

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ModuleExplorer />
        <TutorsSection />
        <WhyChoose />
        <AudienceSection />
        <PlansSection />
        <TestimonialsSection />
        <MentorshipSection />
      </main>
      <SiteFooter />
      <AiAssistant />
    </div>
  )
}
