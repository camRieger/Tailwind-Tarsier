import NavBlock from "@/app/components/navBlock";

export default function Header() {
  return (
    <header className="flex rounded-4xl w-auto h-1/2 md:h-full bg-amber-600">
      <h1 className="flex-3 flex items-center justify-center text-3xl">
        Header
      </h1>
      <NavBlock/>
    </header>
  )
}