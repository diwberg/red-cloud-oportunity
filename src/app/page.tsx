import Image from 'next/image'
export default function Home() {
  return (
    <div className='p-2'>
    <div className='flex flex-col md:flex-row md:justify-evenly items-center gap-6 px-3'>
      <Image className='w-40 h-40 rounded-full ring-2 ring-indigo-700' src='https://github.com/diwberg.png' width={400} height={400} alt='Profile' />
      <h1 className="text-2xl">Hello, my name is Diwberg de Andrade</h1>
    </div>
      

    </div>
  )
}
