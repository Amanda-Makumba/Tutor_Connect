'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, GraduationCap } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

const NAV = [
  { href: '/#modules', label: 'Modules' },
  { href: '/#tutors', label: 'Tutors' },
  { href: '/#why', label: 'Why us' },
  { href: '/#audience', label: 'Who we help' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#mentorship', label: 'Mentorship' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
              Pecision Tutor Connect
            </span>
            <span className="text-[0.7rem] text-muted-foreground">
              PTC 
          </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" nativeButton={false} render={<Link href={item.href} />}>
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" nativeButton={false} render={<Link href="/sign-in" />}>
            Log in
          </Button>
          <Button size="sm" nativeButton={false} render={<Link href="/sign-up" />}>
            Sign up
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu" />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="font-serif">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-2">
              {NAV.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
              <div className="mt-4 flex flex-col gap-2 px-1">
                <SheetClose
                  render={
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: 'outline', className: 'w-full' })}
                    />
                  }
                >
                  Log in
                </SheetClose>
                <SheetClose
                  render={
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ className: 'w-full' })}
                    />
                  }
                >
                  Sign up
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
