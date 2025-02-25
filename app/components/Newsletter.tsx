"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter signup here
    console.log("Newsletter signup:", email)
    alert("Thank you for signing up for our newsletter!")
    setEmail("")
  }

  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="mb-8">
            Sign up for our newsletter to receive the latest news, special offers, and exclusive invites to Wild Arena
            events.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-md text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              <Send className="mr-2" />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

