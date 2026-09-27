import { Award, GraduationCap, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const AUDIENCES = [
  {
    icon: Award,
    title: 'Aspiring Chartered Accountants',
    description:
      'Candidates working towards their professional qualification who need rigorous, board-exam-focused coaching.',
    points: [
      'CTA and board exam preparation',
      'Deep IFRS, tax and audit application',
      'Exam technique and time management',
      'Structured revision programmes',
    ],
  },
  {
    icon: GraduationCap,
    title: 'University Students',
    description:
      'Undergraduates studying accounting who want to stay ahead of coursework and ace their semester exams.',
    points: [
      'Support aligned with your degree modules',
      'Help with assignments and past papers',
      'Foundations built the right way',
      'Confidence before tests and exams',
    ],
  },
]

export function AudienceSection() {
  return (
    <section id="audience" className="scroll-mt-20 border-b border-border/60 bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Who we help"
          title="Built for the students we know best"
          description="Precision Tutor Connect is designed around two groups of Zimbabwean learners and what each of them needs to succeed."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <audience.icon className="size-6" />
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {audience.title}
              </h3>
              <p className="text-muted-foreground">{audience.description}</p>
              <ul className="mt-1 flex flex-col gap-2">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
