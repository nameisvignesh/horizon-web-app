import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const keyFeatures = [
    "Current Weather Conditions:", 
    "7-Day Forecast:", 
    "Interactive Radar:", 
    "Severe Weather Alerts:", 
    "Personalized Experience:"
  ];

  const mail = 'mailto:horizonweather@gmail.com';
  
  return (
    <div className='mx-4 md:mx-20 my-8 md:my-16'>
      <div className='relative h-64 md:h-96'>
        <Image 
          src='https://images.unsplash.com/photo-1640105704101-5a53fa46e2bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          layout='fill'
          alt='horizon'
          className='object-cover z-[-1]' 
        />
      </div>
      <h1 className='text-red-500 font-bold text-2xl md:text-4xl text-center mt-4'>Welcome to Horizon</h1>
      <p className='mx-2 md:mx-10 w-full md:w-[50rem] text-lg text-white font-medium text-center'>
        Stay informed and prepared with Horizon Weather, your go-to app for real-time weather updates, forecasts, and alerts. Whether you're planning a day out or just want to know what to expect, Horizon Weather has you covered.
      </p>
      <h1 className='text-red-500 font-bold text-xl md:text-2xl text-center mt-6'>Key Features</h1>
      <div className='mx-2 md:mx-10'>
        {keyFeatures.map((feature, index) => (
          <div key={index} className='mb-6'>
            <h2 className='text-white font-bold text-lg md:text-xl'>{feature}</h2>
            <p className='mx-2 w-full md:w-[57rem] text-lg text-white font-medium'>
              {/* Replace this with the corresponding description for each feature */}
              {`Description for ${feature}`}
            </p>
          </div>
        ))}
      </div>
      <h1 className='text-red-500 font-bold text-xl md:text-2xl text-center mt-6'>Get Started</h1>
      <p className='mx-2 md:mx-10 w-full md:w-[57rem] text-md text-white font-medium text-center'>
        Download Horizon Weather Today! Download now and enjoy accurate forecasts and alerts right at your fingertips!
      </p>
      <Link href='/pages/founders' className='text-red-300'>Meet the Founders</Link>
      <h1 className='text-red-500 font-bold text-xl md:text-2xl text-center mt-6'>Contact Us</h1>
      <a className='mx-2 md:mx-10 text-red-300 underline text-center' href={mail}>horizonweather@gmail.com</a>
    </div>
  );
};

export default About;
