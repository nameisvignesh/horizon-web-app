import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {

  const userData = {
    log: "Loged"
}

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-red-500 font-bold text-center text-3xl mb-4'>
        Successfully {userData.log} In!
      </h1>
      <Link href='/' className='bg-red-500 rounded-3xl text-xl'>
         👈
      </Link>
    </div>
  );
};

export default SuccessPage;
