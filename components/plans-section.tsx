'use client'

import { useState } from 'react'
import { Check, Star, ShieldCheck } from 'lucide-react'
import { toast } from 'sonner'
import { PLANS, PAYMENT_METHODS, type Plan } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Field, FieldLabel, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'

export function PlansSection() {
  const [selected, setSelected] = useState<Plan | null>(null)

  return (
    <section id="pricing" className="scroll-mt-20 border-b border-border/60 bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Payment plans"
          title="Simple online payment, from anywhere in Zimbabwe"
          description="Because tutoring is fully online, anyone across the country can pay and start learning. Choose a plan and pay securely with your preferred local method."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.key}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm',
                plan.popular ? 'border-primary ring-1 ring-primary' : 'border-border',
              )}
            >
              {plan.popular ? (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gap-1 rounded-full bg-accent text-accent-foreground">
                  <Star className="size-3 fill-current" />
                  Most popular
                </Badge>
              ) : null}
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="font-serif text-3xl font-semibold text-foreground">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-muted-foreground">{plan.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 w-full"
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => setSelected(plan)}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-muted-foreground">We accept:</span>
          {PAYMENT_METHODS.map((method) => (
            <Badge key={method} variant="outline" className="rounded-full bg-card">
              {method}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-lg bg-green-50 border border-green-200 p-4 text-center">
        <p className="font-bold text-green-800">
          For your payments please contact this number +263 714 552 095 
        </p>
      </div>

      <CheckoutDialog plan={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  )
}

function CheckoutDialog({
  plan,
  onOpenChange,
}: {
  plan: Plan | null
  onOpenChange: (open: boolean) => void
}) {
  function handlePay() {
    toast.success('Payment request received', {
      description: `We'll confirm your ${plan?.name} plan and follow up on the details you provided.`,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={!!plan} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-lg">
            Pay for {plan?.name}
          </DialogTitle>
          <DialogDescription>
            {plan?.price} {plan?.cadence}. Choose how you&apos;d like to pay — you&apos;ll
            receive confirmation once your payment is verified.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="mobile">
          <TabsList className="w-full">
            <TabsTrigger value="mobile" className="flex-1">
              Mobile money
            </TabsTrigger>
            <TabsTrigger value="card" className="flex-1">
              Card
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mobile" className="mt-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="pay-name">Full name</FieldLabel>
                <Input id="pay-name" placeholder="e.g. Tariro Moyo" />
              </Field>
              <Field>
                <FieldLabel htmlFor="pay-phone">Mobile number</FieldLabel>
                <Input id="pay-phone" type="tel" placeholder="077 000 0000" />
              </Field>
            </FieldGroup>
            <p className="mt-3 rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground">
              Pay via EcoCash, Cash or InnBucks to <strong>+263 714 552 095</strong>
            </p>
          </TabsContent>

          <TabsContent value="card" className="mt-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="card-name">Name on card</FieldLabel>
                <Input id="card-name" placeholder="e.g. Tariro Moyo" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-number">Card number</FieldLabel>
                <Input id="card-number" inputMode="numeric" placeholder="1234 5678 9012 3456" />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field>
                  <FieldLabel htmlFor="card-exp">Expiry</FieldLabel>
                  <Input id="card-exp" placeholder="MM/YY" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
                  <Input id="card-cvc" inputMode="numeric" placeholder="123" />
                </Field>
              </div>
            </FieldGroup>
          </TabsContent>
        </Tabs>

        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="size-3.5 text-primary" />
          This is a demo checkout — no real payment is processed.
        </p>

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button onClick={handlePay}>Pay {plan?.price}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
