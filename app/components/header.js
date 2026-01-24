import NavBlock from "@/app/components/navBlock";

export default function Header() {
  return (
    <header className="flex rounded-4xl m-4 w-auto h-1/2 md:h-full ">
      <h1 className="flex-1 flex items-center justify-center bg-amber-600">
        Header
      </h1>
      <NavBlock/>
    </header>
  )
}