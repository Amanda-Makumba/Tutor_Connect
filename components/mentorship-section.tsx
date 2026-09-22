import Link from 'next/link'
import {
  HeartHandshake,
  Brain,
  Compass,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { CONTACT } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Button, buttonVariants } from '@/components/ui/button'

const SUPPORT = [
  {
    icon: Brain,
    title: 'Academic challenges',
    description:
      'Struggling to keep up, falling behind, or losing motivation? We help you build a plan to get back on track.',
  },
  {
    icon: Compass,
    title: 'Study & career guidance',
    description:
      'Advice on qualifications, choosing modules and mapping a realistic path towards becoming a chartered accountant.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal challenges',
    description:
      'A safe, confidential space to talk through any other issues affecting your studies, with tutors who care.',
  },
]

export function MentorshipSection() {
  return (
    <section id="mentorship" className="scroll-mt-20 border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Mentorship & support"
              title="More than tutoring — we mentor you"
              description="Studying accounting is demanding, and life happens. Our mentorship helps aspiring chartered accountants and university students facing challenges at school or beyond keep moving forward."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<Link href="/sign-up" />}>
                Request mentorship
              </Button>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                <MessageCircle data-icon="inline-start" />
                Chat on WhatsApp
              </a>
            </div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4 text-primary" />
              Prefer to talk? Call us on{' '}
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="font-medium text-primary hover:underline"
              >
                {CONTACT.phone}
              </a>
            </p>
          </div>

          <div className="grid gap-4">
            {SUPPORT.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-accent-foreground">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
