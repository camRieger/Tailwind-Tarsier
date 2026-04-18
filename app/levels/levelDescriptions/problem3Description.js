export default function Problem3Description() {
  return (
    <div className="flex flex-col gap-3">
      <p className='text-xl'>
        Uh oh, looks like the bug is getting a bit trickier... where could it be hiding? Maybe if we move that box, there might be something underneath?
      </p>
      <p className='text-lg'>
        So far we've used Tailwind classes that position items relative to their container. But sometimes we need more precise control — that's where classes like <code className="bg-slate-700 px-1 rounded">bottom-[]</code> come in.
      </p>
      <p className='text-lg'>
        These classes use Tailwind's arbitrary value syntax, letting you specify an exact percentage to move an element. For example, <code className="bg-slate-700 px-1 rounded">bottom-[25%]</code> moves an element 25% up from the bottom of its container.
      </p>
      <ul className="list-disc list-inside text-lg flex flex-col gap-1">
        <li>Use <code className="bg-slate-700 px-1 rounded">bottom-[n%]</code> on the box to push it up out of the way</li>
        <li>Then use what you learned previously to get the tarsier over to where the bug is hiding!</li>
      </ul>
      <p className="text-lg text-amber-300">
        Hint: the box needs to move at least halfway up before you'll find anything underneath...
      </p>
    </div>
  )
}