import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({
  value,
  className,
  size = 'default',
}: {
  value: number
  className?: string
  size?: 'sm' | 'default'
}) {
  const dimension = size === 'sm' ? 'size-3.5' : 'size-4'
  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.round(value)
        return (
          <Star
            key={i}
            className={cn(
              dimension,
              filled
                ? 'fill-accent text-accent'
                : 'fill-transparent text-muted-foreground/40',
            )}
            aria-hidden="true"
          />
        )
      })}
    </div>
  )
}
