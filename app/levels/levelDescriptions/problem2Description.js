export default function Problem2Description() {
  return(
    <div>
      <p className='text-xl'>
        Great work! Now the tarsier is awake and ready to get some grub. Its time to help the little guy hunt...
      </p>
      <p className='text-lg'>
        Lets use some of Tailwind's 'flexbox' classes to help the tarsier find the tasty bug.
      </p>
      <ul className='list-disc p-6'>
        <li className='text-lg'>
          'justify-start' moves items in a flex container all the way to the left of that container
        </li>
        <li className='text-lg'>
          'justify-center' will similarly move an item to the middle
        </li>
        <li className='text-lg'>
          'justify-end' will move the item all the way to the right of the container it is in.
        </li>
        <li className='text-lg'>
          Which of these tags will bring the tarsier closer to his tasty bug?
        </li>
      </ul>
    </div>
  )
}