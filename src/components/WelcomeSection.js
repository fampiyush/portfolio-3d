import { Canvas } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import React from 'react';

export default (x, y, z, isMobile) => {

  return (
    <>
    <Html position={[x - 6, y + 0.5, z - 10]} rotation={[-0.1, 0.1, 0]} transform>
      <div className="container">
        <div className='bg-[#9e2424] w-72 rounded-md border-4 border-[#732402]'>
          <p className="text-white text-lg p-4">Hello, Welcome to <span className='text-[#f5d47a]'>Piyush's</span> Portfolio</p>
        </div>
      </div>
    </Html>
    {!isMobile &&
    <Html position={[x, y, z]}>
      <div className='h-screen'>
        <div className='fixed left-1 bottom-1'>
          <div className='bg-[#9e2424] w-72 rounded-md border-4 border-[#732402] pl-1'>
            <h2 className='text-lg'>Instructions :</h2>
            <ul className='list-disc list-inside'>
              <li className='text-sm'>Scroll Down to go to next section</li>
              <li className='text-sm'>Scroll Up to go to previous section</li>
            </ul>
          </div>
        </div>
      </div>
    </Html>}
    </>
  );
};