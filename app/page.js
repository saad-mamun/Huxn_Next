"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
function Home() {

  const router = useRouter()

  // Navigate 2 rule
  const navigate = (page) =>{
    router.push(page)
  }


  return (
    <section className='flex flex-col gap-3'>
      <h1>useRouter Method</h1>

      {/* <button 
      onClick={() => router.push("about")}
      className='border-2 px-3 py-2 rounded-lg shadow-2xl'
      >Got To About Page
      </button> */}

      <button 
      onClick={() => navigate("about")}
      className='border-2 px-3 py-2 rounded-lg shadow-2xl'
      >Got To About Page
      </button>

      <button 
      onClick={() => navigate("portfolio")}
      className='border-2 px-3 py-2 rounded-lg shadow-2xl'
      >Got To Portfolio Page
      </button>

    </section>
  )
}

export default Home
