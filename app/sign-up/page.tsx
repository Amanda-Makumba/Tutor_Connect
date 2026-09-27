import type { Metadata } from 'next'
import { AuthForm } from '@/components/auth-form'

export const metadata: Metadata = {
  title: 'Sign up | Precision Tutor Connect',
  description: 'Create your Precision Tutor Connect account and start learning accounting online.',
}

export default function SignUpPage() {
  return <AuthForm mode="sign-up" />
}
