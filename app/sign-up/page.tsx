import type { Metadata } from 'next'
import { AuthForm } from '@/components/auth-form'

export const metadata: Metadata = {
  title: 'Sign up | TutorConnect',
  description: 'Create your TutorConnect account and start learning accounting online.',
}

export default function SignUpPage() {
  return <AuthForm mode="sign-up" />
}
