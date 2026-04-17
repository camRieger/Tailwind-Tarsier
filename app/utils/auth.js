// app/utils/auth.js
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "./firebase"

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (err) {
    console.error("Sign in failed:", err)
  }
}