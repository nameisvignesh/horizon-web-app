import React from 'react'
import { metadata } from 'layout'
import Link from 'next/link'
import Weather from 'components/Weather'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='bg-black/40 flex flex-col items-center text-center min-h-screen z-[10] overflow-hidden'>
      <Image 
        src='https://images.unsplash.com/photo-1640105704101-5a53fa46e2bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        layout='fill'
        alt='horizon'
        className='object-cover z-[-1]' 
      />
      <div className='flex flex-col items-center mt-24'>
        <h1 className='text-red-500 font-bold text-5xl'>{metadata.heading}</h1>
        <p className='text-white font-bold text-lg'>{metadata.description}</p>
        <Link className='text-red-200 underline' href='/pages/about'>Learn More</Link>
      </div>
      <Weather />
    </div>
  )
}

export default Home
