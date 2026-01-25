import Image from "next/image";
import Tarsier from "../../public/tarsier.png";
import Bug from "../../public/bedbug.svg"

export default function Problem2({ answer="justify-center" }){
    return (
        <div className="flex justify-center h-full w-full rounded-2xl bg-indigo-950">
            <div className={`flex flex-1 h-full w-full items-center ${answer}`}>
                <Image 
                src={Tarsier} 
                alt='tarsier' 
                height={150}/>
            </div>
            <div className="flex flex-1 h-full w-full items-center justify-start">
                <Image src={Bug} alt='bug' height={70}/>
            </div>
        </div>
    )
}