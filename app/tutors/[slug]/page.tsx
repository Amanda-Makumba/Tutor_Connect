import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  Users,
  Clock,
  Check,
  BookOpen,
  MessageCircle,
  Phone,
} from 'lucide-react'
import {
  TUTORS,
  getTutor,
  modulesForTutor,
  CONTACT,
  type TutorSlug,
} from '@/lib/data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AiAssistant } from '@/components/ai-assistant'
import { StarRating } from '@/components/star-rating'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export function generateStaticParams() {
  return TUTORS.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tutor = getTutor(slug)
  if (!tutor) return { title: 'Tutor not found | TutorConnect' }
  return {
    title: `${tutor.name} | TutorConnect`,
    description: tutor.bio,
  }
}

export default async function TutorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tutor = getTutor(slug)
  if (!tutor) notFound()

  const modules = modulesForTutor(tutor.slug as TutorSlug)

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:py-14">
            <Link
              href="/#tutors"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to tutors
            </Link>

            <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
              <div className="relative mx-auto size-40 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border sm:mx-0">
                <Image
                  src={tutor.image}
                  alt={`Portrait of ${tutor.name}`}
                  fill
                  sizes="160px"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {tutor.name}
                  </h1>
                  <p className="mt-1 text-muted-foreground">{tutor.title}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <span className="flex items-center gap-1.5">
                    <StarRating value={tutor.rating} size="sm" />
                    <span className="font-medium text-foreground">{tutor.rating}</span>
                    <span className="text-muted-foreground">({tutor.reviews} reviews)</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="size-4" /> {tutor.students}+ students
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="size-4" /> {tutor.years} years experience
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tutor.specialties.map((key) => {
                    const m = modules.find((mod) => mod.key === key)
                    return (
                      <Badge key={key} className="rounded-full bg-primary/10 text-primary">
                        {m?.name}
                      </Badge>
                    )
                  })}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/sign-up" className={buttonVariants({ size: 'lg' })}>
                    Book a session
                  </Link>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: 'outline', size: 'lg' })}
                  >
                    <MessageCircle data-icon="inline-start" />
                    Message tutor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:py-16">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">About</h2>
              <p className="mt-3 text-muted-foreground">{tutor.bio}</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Modules taught
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Expand a module to see the subtopics {tutor.name.split(' ')[0]} covers.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {modules.map((module) => (
                  <div
                    key={module.key}
                    className="rounded-2xl border border-border bg-card px-5 shadow-sm"
                  >
                    <Accordion>
                      <AccordionItem value={module.key} className="border-b-0">
                        <AccordionTrigger className="hover:no-underline">
                          <span className="flex items-center gap-3">
                            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <BookOpen className="size-4" />
                            </span>
                            <span className="flex flex-col">
                              <span className="font-serif text-base font-semibold text-foreground">
                                {module.name}
                              </span>
                              <span className="text-xs font-normal text-muted-foreground">
                                {module.subtopics.length} subtopics
                              </span>
                            </span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid gap-x-4 gap-y-1.5 pb-2 sm:grid-cols-2">
                            {module.subtopics.map((topic) => (
                              <li
                                key={topic}
                                className="flex items-start gap-2 text-sm text-foreground"
                              >
                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Teaching highlights
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {tutor.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground shadow-sm">
              <h3 className="font-serif text-lg font-semibold">Ready to start?</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Book online and learn from anywhere in Zimbabwe.
              </p>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  className:
                    'mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90',
                })}
              >
                Create your account
              </Link>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="mt-3 flex items-center justify-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Phone className="size-4" />
                {CONTACT.phone}
              </a>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
      <AiAssistant />
    </div>
  )
}
