'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldDescription,
} from '@/components/ui/field'
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from '@/components/ui/input-group'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const isSignUp = mode === 'sign-up'
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast.success(isSignUp ? 'Account created' : 'Welcome back', {
      description: isSignUp
        ? 'This is a demo — your account is not yet stored. You can start exploring the site.'
        : 'This is a demo login — no real authentication is performed.',
    })
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-secondary/40 px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="font-serif text-lg font-semibold text-foreground">
            Precision Tutor Connect
          </span>
        </Link>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-1.5 text-center">
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isSignUp
                ? 'Start learning accounting online, anywhere in Zimbabwe.'
                : 'Log in to continue your accounting journey.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6">
            <FieldGroup>
              {isSignUp ? (
                <Field>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input id="name" name="name" placeholder="e.g. Tariro Moyo" autoComplete="name" required />
                </Field>
              ) : null}

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </Field>
                    <Field>
        <FieldLabel htmlFor="level">Academic Level *</FieldLabel>
        <select
          id="level"
          name="level"
          required
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
        >
          <option value="">Select your level</option>
          <option value="CTA Route">CTA Route</option>
          <option value="University">University</option>
          <option value="ACCA">ACCA</option>
          <option value="Other">Other</option>
        </select>
      </Field>

              {isSignUp ? (
                <Field>
                  <FieldLabel htmlFor="phone">Mobile number</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="077 000 0000"
                    autoComplete="tel"
                  />
                </Field>
              ) : null}

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    autoComplete={isSignUp ? 'new-password' : 'current-password'}
                    required
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      type="button"
                      size="icon-xs"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {isSignUp ? (
                  <FieldDescription>Use at least 8 characters.</FieldDescription>
                ) : null}
              </Field>

              <Button type="submit" className="w-full">
                {isSignUp ? 'Create account' : 'Log in'}
              </Button>
            </FieldGroup>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            <Link
              href={isSignUp ? '/sign-in' : '/sign-up'}
              className="font-medium text-primary hover:underline"
            >
              {isSignUp ? 'Log in' : 'Sign up'}
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            &larr; Back to home
          </Link>
        </p>
      </div>
    </div>
  )
}
