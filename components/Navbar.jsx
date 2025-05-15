import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul className='container mx-auto flex items-end justify-between '>
        <div>
            <h1 className='text-4xl font-semibold'>Logo</h1>
        </div>
        <div className='flex flex-row items-center gap-3'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/users'>Users</Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
