import tarsier from "@/public/tarsier.png"
import bug from "@/public/bedbug.svg"
import Image from "next/image";

export default function Problem1({input}) {
  return (
    <div className={`flex justify-center h-full w-full rounded-2xl ${input}`}>
      <div className="flex flex-1 h-full w-full items-center justify-center">
        <Image src={tarsier} alt='tarsier' height={150}/>
      </div>
      <div className="flex flex-1 h-full w-full items-center justify-center">
        <Image src={bug} alt='bug' height={70}/>
      </div>
    </div>
  )
}