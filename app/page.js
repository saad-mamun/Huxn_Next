"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {Roboto} from "next/font/google"


const roboto = Roboto({
  subsets: ['latin'],
  display:"swap",
  weight:"700"
})

function Home() {
  const router = useRouter();

  // Navigate 2 rule
  const navigate = (page) => {
    router.push(page);
  };

  return (
    <section className="container mx-auto py-2">
      <div className="space-x-2">
        <h1 className={roboto.className}>useRouter Method</h1>

        {/* <button 
onClick={() => router.push("about")}
className='border-2 px-3 py-2 rounded-lg shadow-2xl'
>Got To About Page
</button> */}

        <button
          onClick={() => navigate("about")}
          className="border-2 px-3 py-2 rounded-lg shadow-2xl"
        >
          Got To About Page
        </button>

        <button
          onClick={() => navigate("portfolio")}
          className="border-2 px-3 py-2 rounded-lg shadow-2xl"
        >
          Got To Portfolio Page
        </button>
      </div>
    </section>
  );
}

export default Home;
