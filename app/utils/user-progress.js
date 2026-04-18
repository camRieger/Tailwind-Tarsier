// app/utils/progress.js
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/app/utils/firebase"

export async function getUserProgress(uid) {
  const ref = doc(db, "completedLevels", uid)
  const snap = await getDoc(ref)
  return snap.exists() ? snap.data().completedLevels : []
}

export async function logCompletion(uid, levelId) {
  const ref = doc(db, "completedLevels", uid)
  const current = await getUserProgress(uid)
  if (!current.includes(levelId)) {
    await setDoc(ref, { completedLevels: [...current, levelId] })
  }
}