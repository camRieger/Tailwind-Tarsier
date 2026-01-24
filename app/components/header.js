import NavBlock from "@/app/components/navBlock";

export default function Header() {
  return (
    <header className="flex rounded-4xl w-auto sm:h-1/2 md:h-full bg-amber-600">
      <h1 className="flex-3 flex items-center justify-center text-4xl sm:test-2xl">
        Header
      </h1>
      <NavBlock/>
    </header>
  )
}