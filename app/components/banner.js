// app/components/banner.js
"use client"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/contexts/AuthContext"
import Image from "next/image"
import Tarsier from "@/public/tarsier.png";

export default function Banner() {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <div className="flex items-center justify-between bg-indigo-950 text-white px-6 py-3 w-full">
      <button
        onClick={() => router.push("/")}
        className="text-[#FFCF60] font-bold text-lg hover:text-amber-500 transition-colors cursor-pointer"
      >
        <div className={`flex flex-row`}>
          <Image src={Tarsier} alt="tarsier" height={18} width={26} />
          <p className={`pl-2`}>Tailwind Tarsier</p>
        </div>
      </button>

      <div className="flex items-center gap-4">
        {user ? (
          <div className={`flex flex-row items-center justify-center`}>
            <span className="text-amber-200 text-sm m-2">{user.displayName}</span>
            {user.photoURL && (
              <Image src={user.photoURL} alt="avatar" width={26} height={26} className="rounded-full mr-2" />
            )}
            <button
              onClick={logout}
              className="border border-amber-400 text-amber-400 px-4 py-1 rounded-lg text-sm hover:bg-amber-400 hover:text-indigo-950 transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-amber-200 text-sm">Not signed in</span>
            <button
              onClick={() => router.push("/")}
              className="border border-amber-400 text-amber-400 px-4 py-1 rounded-lg text-sm hover:bg-amber-400 hover:text-indigo-950 transition-colors"
            >
              Go To Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  )
}