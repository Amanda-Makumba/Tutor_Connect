'use client'

import { useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { toast } from 'sonner'
import { TESTIMONIALS, TUTORS, getTutor } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { StarRating } from '@/components/star-rating'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Field, FieldLabel, FieldGroup } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function TestimonialsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Student ratings"
          title="What students say about their tutors"
          description="Real feedback from Zimbabwean students rating their experience with our tutors."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => {
            const tutor = getTutor(t.tutorSlug)
            return (
              <figure
                key={t.name + t.quote}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <StarRating value={t.rating} size="sm" />
                  <Quote className="size-5 text-accent" aria-hidden="true" />
                </div>
                <blockquote className="flex-1 text-sm text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="rounded-full">{t.module}</Badge>
                  <span>with {tutor?.name}</span>
                </div>
              </figure>
            )
          })}
        </div>

        <RateTutorForm />
      </div>
    </section>
  )
}

function RateTutorForm() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [tutorSlug, setTutorSlug] = useState<string>('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!rating || !tutorSlug) {
      toast.error('Please select a tutor and a star rating.')
      return
    }
    toast.success('Thanks for your review!', {
      description: 'Your rating helps other students choose the right tutor.',
    })
    setRating(0)
    setTutorSlug('')
  }

  return (
    <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h3 className="font-serif text-xl font-semibold text-foreground">
        Rate your tutor
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Studied with us? Share your experience to help fellow students.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="review-tutor">Your tutor</FieldLabel>
            <Select value={tutorSlug} onValueChange={(v) => setTutorSlug(v ?? '')}>
              <SelectTrigger id="review-tutor">
                <SelectValue placeholder="Select a tutor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TUTORS.map((t) => (
                    <SelectItem key={t.slug} value={t.slug}>
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>Your rating</FieldLabel>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => {
                const val = i + 1
                const active = (hover || rating) >= val
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setRating(val)}
                    onMouseEnter={() => setHover(val)}
                    onMouseLeave={() => setHover(0)}
                    className="rounded-md p-0.5 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`${val} star${val === 1 ? '' : 's'}`}
                  >
                    <Star
                      className={cn(
                        'size-7 transition-colors',
                        active
                          ? 'fill-accent text-accent'
                          : 'fill-transparent text-muted-foreground/40',
                      )}
                    />
                  </button>
                )
              })}
            </div>
          </Field>

          <Field>
            <FieldLabel htmlFor="review-text">Your review</FieldLabel>
            <Textarea
              id="review-text"
              rows={3}
              placeholder="Tell us about your experience..."
            />
          </Field>
        </FieldGroup>

        <Button type="submit" className="w-fit">
          Submit review
        </Button>
      </form>
    </div>
  )
}
