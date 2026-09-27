'use client'

import { useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { Bot, Send, X, Sparkles, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SUGGESTIONS = [
  'Explain the general deduction formula in Zimbabwean tax',
  'What is the difference between marginal and absorption costing?',
  'How do I account for a lease under IFRS 16?',
  'What are the steps in the external audit process?',
]

export function AiAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const busy = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  function submit(text: string) {
    const value = text.trim()
    if (!value || busy) return
    sendMessage({ text: value })
    setInput('')
  }

  return (
    <>
      <Button
        size="lg"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close study assistant' : 'Open study assistant'}
        className="fixed bottom-5 right-5 z-50 size-14 rounded-full p-0 shadow-lg shadow-primary/30"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </Button>

      {open ? (
        <div
          className="fixed bottom-24 right-5 z-50 flex h-[32rem] max-h-[calc(100dvh-8rem)] w-[calc(100vw-2.5rem)] max-w-96 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          role="dialog"
          aria-label="Precision Tutor Connect study assistant"
        >
          <header className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15">
              <Bot className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Study Assistant</p>
              <p className="text-xs text-primary-foreground/70">
                Financial · Management · Tax · Audit
              </p>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/60 p-4 text-center">
                  <Sparkles className="size-6 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    Ask me anything about accounting
                  </p>
                  <p className="text-xs text-muted-foreground">
                    I help with Financial Accounting, Management Accounting,
                    Taxation and Applied Auditing.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="rounded-lg border border-border bg-background px-3 py-2 text-left text-xs text-foreground transition-colors hover:bg-muted"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex',
                    message.role === 'user' ? 'justify-end' : 'justify-start',
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm',
                      message.role === 'user'
                        ? 'rounded-br-sm bg-primary text-primary-foreground'
                        : 'rounded-bl-sm bg-muted text-foreground',
                    )}
                  >
                    {message.parts.map((part, i) =>
                      part.type === 'text' ? <span key={i}>{part.text}</span> : null,
                    )}
                  </div>
                </div>
              ))
            )}
            {status === 'submitted' ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2.5">
                  <span className="flex gap-1">
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60" />
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              submit(input)
            }}
            className="flex items-end gap-2 border-t border-border p-3"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (
                  e.key === 'Enter' &&
                  !e.shiftKey &&
                  !e.nativeEvent.isComposing &&
                  e.keyCode !== 229
                ) {
                  e.preventDefault()
                  submit(input)
                }
              }}
              rows={1}
              placeholder="Ask a question..."
              className="max-h-28 flex-1 resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
            />
            <Button
              type="submit"
              size="icon"
              disabled={busy || !input.trim()}
              aria-label="Send message"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      ) : null}
    </>
  )
}
