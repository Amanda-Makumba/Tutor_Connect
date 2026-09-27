import {
  MonitorSmartphone,
  UserCheck,
  Bot,
  CalendarClock,
  Wallet,
  HeartHandshake,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const REASONS = [
  {
    icon: MonitorSmartphone,
    title: 'Learn from anywhere',
    description:
      'Every session is online, so you can study from any city or rural area in Zimbabwe with just a phone or laptop.',
  },
  {
    icon: UserCheck,
    title: 'Specialist tutors',
    description:
      'Work with tutors who focus on specific modules, so you get depth and exam technique — not generic help.',
  },
  {
    icon: Bot,
    title: 'AI study assistant',
    description:
      'Get instant answers on Financial Accounting, Taxation, Management Accounting and Auditing between your sessions.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible scheduling',
    description:
      'Book sessions around lectures, work and family life, with recordings so you can revise on your own time.',
  },
  {
    icon: Wallet,
    title: 'Affordable local payments',
    description:
      'Pay online with the methods you already use — EcoCash, Cash or InnBucks.',
  },
  {
    icon: HeartHandshake,
    title: 'Mentorship, not just tutoring',
    description:
      'We support you through academic and personal challenges so you can stay focused and keep progressing.',
  },
]

export function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-20 border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Why choose Precision Tutor Connect"
          title="Everything you need to pass, in one place"
          description="Here is why students across the country choose to learn with us."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <reason.icon className="size-5" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
