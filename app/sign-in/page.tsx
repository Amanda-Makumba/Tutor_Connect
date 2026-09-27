import type { Metadata } from 'next'
import { AuthForm } from '@/components/auth-form'

export const metadata: Metadata = {
  title: 'Log in | Precision Tutor Connect',
  description: 'Log in to your Precision Tutor Connect account.',
}

export default function SignInPage() {
  return <AuthForm mode="sign-in" />
}
