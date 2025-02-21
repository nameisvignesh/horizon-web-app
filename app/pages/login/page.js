'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import Image from 'next/image';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const router = useRouter(); // Initialize useRouter for navigation
  const styles = "px-10 py-3 rounded-2xl outline-none text-black text-xl";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Here you can perform any actions you need with formData
    console.log('Login submitted:', formData);

    // Navigate to the desired route upon successful login
    router.push('/pages/request/logedin'); // Change this to your desired route
  };

  return (
    <div className='flex flex-col place-items-center min-h-screen'>
      <Image 
        src='https://images.unsplash.com/photo-1640105704101-5a53fa46e2bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        layout='fill'
        alt='horizon'
        className='object-cover z-[-1] absolute top-0 left-0 w-full h-full' 
      />
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3 mt-20 bg-slate-200 px-6 py-8 sm:px-12 sm:py-10 rounded-3xl w-full sm:w-96'>
        <h1 className='text-red-500 font-bold text-3xl'>Log In</h1>
        <input 
          className={`${styles} w-full`} 
          type='email' 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email' 
          required
        />
        <input 
          className={`${styles} w-full`} 
          type='password' 
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Password' 
          required
        />
        <button type='submit' className='bg-red-500 px-10 py-3 my-3 text-white w-full sm:w-auto'>
          Log In
        </button>
        <Link className='text-red-500 underline' href='/pages/sign'>
          New to Horizon? Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;
