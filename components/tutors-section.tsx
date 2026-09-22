import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Clock } from 'lucide-react'
import { TUTORS, getModule } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { StarRating } from '@/components/star-rating'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function TutorsSection() {
  return (
    <section id="tutors" className="scroll-mt-20 border-b border-border/60 bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Meet your tutors"
          title="Learn from specialists who get results"
          description="Our tutors combine real professional experience with a talent for making tough accounting topics simple. Click a profile to see the modules they teach."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TUTORS.map((tutor) => (
            <article
              key={tutor.slug}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:p-7"
            >
              <div className="relative mx-auto size-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border sm:mx-0">
                <Image
                  src={tutor.image}
                  alt={`Portrait of ${tutor.name}`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {tutor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tutor.title}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <span className="flex items-center gap-1.5">
                    <StarRating value={tutor.rating} size="sm" />
                    <span className="font-medium text-foreground">{tutor.rating}</span>
                    <span className="text-muted-foreground">({tutor.reviews})</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="size-4" /> {tutor.students}+ students
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="size-4" /> {tutor.years} yrs
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tutor.specialties.map((key) => (
                    <Badge key={key} variant="secondary" className="rounded-full">
                      {getModule(key)?.name}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{tutor.bio}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-1 w-fit"
                  nativeButton={false}
                  render={<Link href={`/tutors/${tutor.slug}`} />}
                >
                  View full profile
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
