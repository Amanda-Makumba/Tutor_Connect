import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const POINTS = [
  'Learn 100% online from anywhere in Zimbabwe',
  'Expert tutors for every accounting module',
  'AI study assistant available around the clock',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-6">
          <Badge
            variant="secondary"
            className="w-fit gap-1.5 rounded-full px-3 py-1 text-xs"
          >
            <MapPin className="size-3.5" />
            Online tutoring across Zimbabwe
          </Badge>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Master accounting with tutors who&apos;ve been there
          </h1>
          <p className="max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            Precision Tutor Connect pairs aspiring chartered accountants and university
            students with specialist tutors in Financial Accounting, Taxation,
            Management Accounting and Auditing — all online, all on your
            schedule.
          </p>
          <ul className="flex flex-col gap-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<Link href="/#modules" />}>
              Explore modules
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Link
              href="/#tutors"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              Meet the tutors
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-border shadow-xl shadow-primary/5">
            <Image
              src="/hero-study.png"
              alt="A Zimbabwean student studying accounting online with a laptop and calculator"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
            <p className="font-serif text-2xl font-semibold text-foreground">4</p>
            <p className="text-xs text-muted-foreground">core modules covered</p>
          </div>
          <div className="absolute -right-4 -top-5 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
            <p className="font-serif text-2xl font-semibold text-foreground">80+</p>
            <p className="text-xs text-muted-foreground">subtopics to study</p>
          </div>
        </div>
      </div>
    </section>
  )
}
