import tarsier from "@/public/tarsier.png"
import Image from "next/image";

export default function Problem1() {
  return (
    <main className="flex">
        <Image src={tarsier} alt='tarsier'/>
    </main>
  )
}