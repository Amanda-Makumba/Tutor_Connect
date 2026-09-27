import Link from 'next/link'
import { GraduationCap, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <GraduationCap className="size-5" />
            </span>
            <span className="font-serif text-lg font-semibold">Precision Tutor Connect</span>
          </Link>
          <p className="max-w-sm text-sm text-primary-foreground/70">
            Online accounting tutoring for aspiring chartered accountants and
            university students across Zimbabwe. Expert tutors, flexible plans
            and mentorship — wherever you are.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
            Explore
          </h3>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link href="/#modules" className="hover:text-primary-foreground">Modules</Link>
            <Link href="/#tutors" className="hover:text-primary-foreground">Tutors</Link>
            <Link href="/#pricing" className="hover:text-primary-foreground">Payment plans</Link>
            <Link href="/#mentorship" className="hover:text-primary-foreground">Mentorship</Link>
            <Link href="/sign-up" className="hover:text-primary-foreground">Create account</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
            Contact us
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <li>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="flex items-center gap-2.5 hover:text-primary-foreground"
              >
                <Phone className="size-4 shrink-0 text-accent" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-primary-foreground"
              >
                <MessageCircle className="size-4 shrink-0 text-accent" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 hover:text-primary-foreground"
              >
                <Mail className="size-4 shrink-0 text-accent" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-accent" />
              {CONTACT.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Precision Tutor Connect. All rights reserved.</p>
          <p>Proudly supporting Zimbabwean accounting students.</p>
        </div>
      </div>
    </footer>
  )
}
