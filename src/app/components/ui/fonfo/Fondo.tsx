import React from 'react';
import Image from 'next/image';

const Fondo = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Image 
        src={'/fondo1.jpg'} 
        alt={'Fondo'}
        layout="fill"
        objectFit="cover"
        quality={100}
        className='object-cover w-full h-full'
      />
    </div>
  );
};

export default Fondo;