import tarsier from "../../public/tarsier.png"
import bug from "../../public/bedbug.svg"
import box from "../../public/Icon_box_hat_brown.png"
import Image from "next/image";
export default function Problem3({ input }) {
  return (
    <main className="flex justify-center h-full w-full">
      
      <div className="relative flex flex-1 h-full w-full items-center justify-center">
        <Image
          src={tarsier}
          alt="tarsier"
          height={150}
          className={`absolute transition-all duration-300`}
        />
      </div>

      <div className="relative flex flex-1 h-full w-full items-center justify-center">
        <Image
          src={bug}
          alt="bug"
          height={70}
          className="absolute z-10"
        />

        <Image
          src={box}
          alt="box"
          height={70}
          width={500}
          className={`absolute z-20 transition-all duration-300 ${input}`}
        />
      </div>

    </main>
  )
}