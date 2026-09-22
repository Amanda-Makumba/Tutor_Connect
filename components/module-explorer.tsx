'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  Search,
  BookOpen,
  Calculator,
  LineChart,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import { MODULES, TUTORS, type ModuleKey } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from '@/components/ui/input-group'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const MODULE_ICONS: Record<ModuleKey, typeof BookOpen> = {
  'financial-accounting': BookOpen,
  'taxation-accounting': Calculator,
  'management-accounting': LineChart,
  auditing: ShieldCheck,
}

export function ModuleExplorer() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return MODULES.map((m) => ({ module: m, matches: m.subtopics }))
    return MODULES.map((m) => {
      const nameMatch = m.name.toLowerCase().includes(q)
      const matches = m.subtopics.filter((s) => s.toLowerCase().includes(q))
      return { module: m, matches: nameMatch ? m.subtopics : matches }
    }).filter((r) => r.matches.length > 0)
  }, [query])

  return (
    <section id="modules" className="scroll-mt-20 border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Search & explore"
          title="Find your accounting module"
          description="Search across every module and its subtopics, then jump straight to the tutors who teach it. Each module covers more than 20 exam-focused subtopics."
        />

        <div className="mx-auto mt-8 max-w-xl">
          <InputGroup>
            <InputGroupInput
              placeholder="Search modules or subtopics (e.g. VAT, leases, variance)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search modules and subtopics"
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {results.map(({ module, matches }) => {
            const Icon = MODULE_ICONS[module.key]
            const tutors = TUTORS.filter((t) => module.tutorSlugs.includes(t.slug))
            return (
              <div
                key={module.key}
                className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {module.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{module.tagline}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="shrink-0 rounded-full">
                    {module.subtopics.length} topics
                  </Badge>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">{module.description}</p>

                <Accordion className="mt-2">
                  <AccordionItem value="topics" className="border-b-0">
                    <AccordionTrigger className="font-medium text-primary hover:no-underline">
                      View {matches.length} subtopic{matches.length === 1 ? '' : 's'}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                        {matches.map((topic) => (
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

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-muted-foreground">Tutors:</span>
                    {tutors.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/tutors/${t.slug}`}
                        className="text-xs font-medium text-primary underline-offset-2 hover:underline"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    nativeButton={false}
                    render={<Link href={`/tutors/${module.tutorSlugs[0]}`} />}
                  >
                    Find a tutor
                    <ArrowRight data-icon="inline-end" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {results.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No modules or subtopics match &ldquo;{query}&rdquo;. Try a different term.
          </p>
        ) : null}
      </div>
    </section>
  )
}
