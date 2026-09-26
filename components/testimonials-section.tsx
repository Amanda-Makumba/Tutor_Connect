"use client"
import { useEffect, useState } from "react"

type Review = {
  name: string
  module: string
  rating: number
  text: string
  date: string
}

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const load = () => {
      const saved = JSON.parse(localStorage.getItem("tutor-reviews") || "[]")
      setReviews(saved)
    }
    load()
    // Listen for new reviews
    window.addEventListener("reviews-updated", load)
    window.addEventListener("storage", load)
    return () => {
      window.removeEventListener("reviews-updated", load)
      window.removeEventListener("storage", load)
    }
  }, [])

  if (reviews.length === 0) {
    return (
      <section className="py-16 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-2">What students say about their tutors</h2>
        <p className="text-gray-500">No reviews yet. Be the first to rate your tutor!</p>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">What students say about their tutors</h2>
        <p className="text-center text-gray-500 mb-8">{reviews.length} real student reviews</p>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="border p-6 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  {r.name?.[0]?.toUpperCase() || "S"}
                </div>
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.module} • {r.date}</p>
                </div>
              </div>
              <p className="text-sm mb-2">{"⭐".repeat(r.rating)}</p>
              <p className="text-sm text-gray-700">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}