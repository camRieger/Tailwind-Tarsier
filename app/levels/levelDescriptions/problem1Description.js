export default function Problem1Description() {
  return(
    <div>
      <p className='text-xl'>
        Welcome to Tailwind Tarsier! Your friend - the tarsier - is very hungry for a tasty bug. Let's see if we can learn Tailwind to help him get his dinner!
      </p>
      <p className='text-lg'>
        Tarsiers are nocturnal - this means they like to hunt at night. Let's use Tailwind class names to make things a bit darker so we can help wake them up!
      </p>
      <ul className='list-disc p-6'>
        <li className='text-lg'>
          Tailwind classes are added to JSX tags, in the 'className' property
        </li>
        <li className='text-lg'>
          We can change the background colour of these elements by using 'bg' followed by a dash and a colour from Tailwind's colour library
        </li>
        <li className='text-lg'>
          Tailwind's indigo-950 seems like a good nighttime colour... Try putting 'bg-indigo-950' into the 'className' property
        </li>
      </ul>
    </div>
  )
}