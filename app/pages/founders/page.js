'use client';
import React from 'react';
import Image from 'next/image';

const Founders = () => {
  const founders = [
    { name: "Vignesh", position: "Founder", image: "/vignesh.jpg" }, // Corrected paths
    { name: "Sharukesh", position: "Co-Founder", image: "/sharukesh.jpg" },
    { name: "Udhaya Ganesh", position: "Co-Founder", image: "/udhaya.jpg" }
  ];

  const currentDate = new Date().toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  });

  return (
    <div className='mx-4 md:mx-20'>
      <h1 className='text-4xl font-bold text-center text-red-500 mb-4'>Founders</h1>
      <p className='text-center text-lg text-white mb-6'>{currentDate}</p>
      <div className='flex flex-col items-center'>
        {founders.map((founder, index) => (
          <div key={index} className='bg-gray-800 p-4 rounded-lg mb-4 w-full md:w-[50%] flex justify-between items-center'>
            <div>
              <h2 className='text-xl font-semibold text-white'>{founder.name}</h2>
              <p className='text-lg text-gray-300'>{founder.position}</p>
            </div>  
            <Image 
              src={founder.image} 
              alt={founder.name} 
              className='w-16 h-16 rounded-full ml-4' // Adjust size as needed
              width={64} // Set width for the image
              height={64} // Set height for the image
              priority // Ensures image is loaded faster
            />
          </div>
        ))}
      </div>
      <p className='text-lg text-white mt-6'>
        Horizon Weather was founded by a group of weather enthusiasts who wanted to create a better way to stay informed about the weather. Our team is dedicated to providing accurate, up-to-date weather information to help you plan your day and stay safe during severe weather events. We are committed to delivering the best possible user experience and are always looking for ways to improve our app. If you have any feedback or suggestions, we'd love to hear from you!
      </p>
    </div>
  );
};

export default Founders;
