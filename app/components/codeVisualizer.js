"use client";

import Image from "next/image";
import Tarsier from "@/public/tarsier.png";
import Bug from "@/public/bedbug.svg";
import { useLevelContext } from "@/app/levels/context";

export default function CodeVisualizer() {
  const { visualizerConfig } = useLevelContext()
  const { containerClass, tarsierClass, bugClass, extras = [] } = visualizerConfig

  return (
    <div className={`relative flex h-full w-full rounded-2xl ${containerClass}`}>
      <div className={`flex flex-1 h-full w-full ${tarsierClass}`}>
        <Image src={Tarsier} alt="tarsier" height={150} className="h-16 lg:h-[150px] w-auto" />
      </div>
      {extras.map((extra, i) => (
        <div key={i} className={extra.class}>
          {extra.element}
        </div>
      ))}
      <div className={`flex flex-1 h-full w-full ${bugClass}`}>
        <Image src={Bug} alt="bug" height={70} className="h-8 lg:h-[70px] w-auto" />
      </div>
    </div>
  )
}