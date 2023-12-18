import { Canvas } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import { useState } from 'react';
import Image from 'next/image';
import SocialsBanner from './SocialsBanner';

export default (x, y, z) => {

  return (
      <Html position={[x-10 , y + 4, z]} rotation={[-0.1, 1.5, 0.1]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-80 rounded-md border-4 p-2 border-[#732402]'>
            <p className="text-white text-base">Thank You for visiting 🥂</p>
            <p className="text-white text-base"></p>
          </div>
          <div className='relative'>
            <SocialsBanner last />
          </div>
        </div>
      </Html>
  );
};