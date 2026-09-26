"use client"
import { useState } from "react"
import { TUTORS } from "@/lib/data"

export function TutorsSection() {
  const [selectedTutor, setSelectedTutor] = useState<any>(null)
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState(5)
  const [name, setName] = useState("")
  const [text, setText] = useState("")

  const submitReview = () => {
    if (!text.trim()) {
      alert("Please write a review")
      return
    }
    const newReview = {
      name: name || "Anonymous Student",
      module: selectedTutor?.title || selectedTutor?.name || "Tutor",
      rating: rating,
      text: text,
      date: new Date().toLocaleDateString()
    }
    const old = JSON.parse(localStorage.getItem("tutor-reviews") || "[]")
    old.unshift(newReview)
    localStorage.setItem("tutor-reviews", JSON.stringify(old))
    window.dispatchEvent(new Event("reviews-updated"))
    
    setOpen(false)
    setName("")
    setText("")
    setRating(5)
    alert("✅ Review added! Scroll down to 'What students say' - you will see it there now!")
  }

  return (
    <section id="tutors" className="py-16 border-b">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Tutors</h2>
        <p className="text-center text-gray-500 mb-8">Click Rate to leave a review</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {TUTORS.map((tutor: any) => (
            <div key={tutor.id || tutor.name} className="border rounded-xl p-5 bg-white">
              <h3 className="font-bold text-lg">{tutor.title || tutor.name}</h3>
              <p className="text-sm text-gray-500">Rating: {tutor.rating} • {tutor.reviews || 0} reviews</p>
              <p className="text-sm mt-2 text-gray-700">{tutor.bio || tutor.description || ""}</p>
              <button 
                onClick={() => { setSelectedTutor(tutor); setOpen(true) }}
                className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm"
              >
                Rate this tutor
              </button>
            </div>
          ))}
        </div>

        {open && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="font-bold text-lg mb-1">Rate {selectedTutor?.title || selectedTutor?.name}</h3>
              <p className="text-sm text-gray-500 mb-4">Your review will appear automatically</p>
              
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)" 
                className="w-full border rounded-lg p-2.5 mb-3 text-sm"
              />
              
              <div className="flex gap-1 mb-3">
                <span className="text-sm mr-2">Rating:</span>
                {[1,2,3,4,5].map(n => (
                  <button key={n} onClick={() => setRating(n)} className={`text-2xl ${n <= rating ? "text-yellow-400" : "text-gray-300"}`}>★</button>
                ))}
              </div>
              
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your review here..." 
                className="w-full border rounded-lg p-2.5 mb-4 h-28 text-sm"
              />
              
              <div className="flex gap-2 justify-end">
                <button onClick={() => setOpen(false)} className="px-4 py-2 border rounded-lg text-sm">Cancel</button>
                <button onClick={submitReview} className="px-4 py-2 bg-black text-white rounded-lg text-sm">Submit Review</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}