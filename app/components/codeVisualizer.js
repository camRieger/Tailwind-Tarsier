// app/components/codeVisualizer.js
"use client"
import Image from "next/image"
import Tarsier from "@/public/tarsier.png"
import Bug from "@/public/bedbug.svg"
import { useLevelContext } from "@/app/levels/context";

export default function CodeVisualizer() {
  const { answer, visualizerConfig } = useLevelContext();
  const { containerClass, tarsierClass, bugClass} = visualizerConfig

  return (
    <div className={`flex h-full w-full rounded-2xl ${containerClass}`}>
      <div className={`flex flex-1 h-full w-full ${tarsierClass}`}>
        <Image src={Tarsier} alt="tarsier" height={150} />
      </div>
      <div className={`flex flex-1 h-full w-full ${bugClass}`}>
        <Image src={Bug} alt="bug" height={70} />
      </div>
    </div>
  )
}