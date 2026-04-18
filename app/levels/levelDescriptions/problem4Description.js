export default function Problem4Description() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl">
        The tarsier can see his bug, but there's a gap between them! Can you help him close the distance?
      </p>
      <p className="text-lg">
        Tailwind's <code className="bg-slate-700 px-1 rounded">w-[]</code> classes control the width of an element. The pesky gap between the tarsier and his dinner is actually just a div with a width — if we set it to zero, there's nothing in the way!
      </p>
      <ul className="list-disc list-inside text-lg flex flex-col gap-1">
        <li><code className="bg-slate-700 px-1 rounded">w-32</code> sets a width of 128px</li>
        <li><code className="bg-slate-700 px-1 rounded">w-16</code> sets a width of 64px</li>
        <li><code className="bg-slate-700 px-1 rounded">w-0</code> sets a width of 0 — no gap at all!</li>
      </ul>
      <p className="text-lg">
        But closing the gap isn't enough — use what you've learned about{" "}
        <code className="bg-slate-700 px-1 rounded">justify-</code> classes to
        push the tarsier to the right side so he's right next to his dinner!
      </p>
    </div>
  )
}