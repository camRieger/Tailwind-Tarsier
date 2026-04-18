// app/context/authContext.js
"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import {getUserProgress, logCompletion} from "@/app/utils/user-progress"
import { auth } from "@/app/utils/firebase"

const AuthContext = createContext(null)

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [completedLevels, setCompletedLevels] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      if (user) {
        const progress = await getUserProgress(user.uid)
        setCompletedLevels(progress)
      } else {
        setCompletedLevels([])
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  async function completeLevel(levelID) {
    if (!user) return
    await logCompletion(user.uid, levelID)
    setCompletedLevels(prevState => [...new Set([...prevState, levelID])])
  }

  async function logout() {
    await signOut(auth)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout, completedLevels, completeLevel }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}