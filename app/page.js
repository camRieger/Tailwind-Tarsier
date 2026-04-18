"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Tarsier from "@/public/tarsier.png"
import Bug from "@/public/bedbug.svg"
import { signInWithGoogle } from "@/app/utils/auth"
import { useAuth } from "@/app/contexts/AuthContext"
import { useState } from "react"

export default function LandingPage() {
  const router = useRouter()
  const { user, completedLevels, loading } = useAuth()
  const [error, setError] = useState(null)

  async function handleSignIn() {
    try {
      setError(null)
      await signInWithGoogle()
    } catch (err) {
      setError("Failed to sign in. Please try again.")
    }
  }

  return (
    <div className="flex flex-col min-h-full bg-indigo-950 text-white">

      {/* Hero */}
      <div className="flex flex-col items-center justify-center flex-1 gap-4 px-6 pt-12 pb-8 text-center">
        <div className="flex items-center gap-3 lg:gap-6">
          <Image src={Tarsier} alt="tarsier" height={120} className="h-16 lg:h-[120px] w-auto" />
          <h1 className="text-3xl lg:text-6xl font-bold text-[#FFCF60]">Tailwind Tarsier</h1>
          <Image src={Bug} alt="bug" height={60} className="h-8 lg:h-[60px] w-auto" />
        </div>
        <p className="text-base lg:text-xl text-amber-200 max-w-lg">
          Help the Tarsier catch his dinner using Tailwind CSS!
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4 pb-12">
        <button
          onClick={() => router.push("/levels/level1")}
          className="bg-[#FFCF60] text-indigo-950 font-bold text-lg px-10 py-3 rounded-xl
            transition-all duration-300 ease-out transform-gpu shadow-md
            hover:shadow-2xl hover:-translate-y-2 hover:scale-110
            hover:bg-[#B87A00] hover:text-white
            active:scale-95 active:translate-y-0 active:shadow-md"
        >
          Play Now
        </button>

        <div className="flex flex-col items-center gap-2 mt-2">
          {user ? (
            <p className="text-amber-200 text-lg">
              Welcome back, {user.displayName}!
            </p>
          ) : (
            <button
              onClick={handleSignIn}
              className="border border-amber-400 text-amber-400 px-6 py-2 rounded-lg hover:bg-amber-400 hover:text-indigo-950 transition-colors ease-in-out"
            >
              Sign In with Google
            </button>
          )}
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
      </div>

      {/* Level Select */}
      <div className="bg-[#B87A00] py-8 lg:py-12 px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-indigo-950 mb-6 text-center">Levels</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["level1", "level2", "level3", "level4", "level5"].map((id, i) => (
            <button
              key={id}
              onClick={() => router.push(`/levels/${id}`)}
              className={`w-32 lg:w-40 bg-[#FFCF60] text-indigo-950 font-bold px-6 lg:px-10 py-6 lg:py-8 rounded-xl text-lg lg:text-xl hover:bg-indigo-950 hover:text-[#FFCF60] transition-colors
                ${loading ? "animate-pulse" : ""}
                ${!loading && completedLevels.includes(id) ? "outline outline-8 outline-green-400" : ""}`}
            >
              <div className="flex flex-col items-center gap-1 h-8 justify-center">
                <span>Level {i + 1}</span>
                {loading && (
                  <span className="text-[10px] font-normal text-indigo-400">Loading Data...</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}