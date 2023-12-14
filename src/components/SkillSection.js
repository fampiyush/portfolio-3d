import { Canvas } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Skills from './Skills';

export default (x, y, z) => {

  const [opened, setOpened] = useState(false)

  const onClick = () => {
    setOpened(true)
  }

  const onClose = () => {
    setOpened(false)
  }

  const onNext = () => {
    console.log('next')
  }

  return (
    !opened ?
      <Html occlude distanceFactor={10} position={[x+8 , y + 0.8, z - 10]} rotation={[0.1, -0.5, 0]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-52 rounded-md border-4 border-[#732402] p-4 flex-row text-center'>
            <p className="text-white text-lg">Skills</p>
            <p className="text-white bg-[#546d26] text-sm inline border-2 rounded-md"><button className='px-1' onClick={onClick}>OPEN</button></p>
          </div>
        </div>
      </Html>
      :
      <Html occlude distanceFactor={10} position={[x+8 , y + 2, z - 10]} rotation={[0.2, -0.18, 0]} transform>
        <div className="w-[50%] relative">
          <div className='bg-[#9e2424] rounded-md border-4 p-2 border-[#732402] inline-block overflow-y-auto max-h-[35rem]'>
            <Skills />
          </div>
          <div className='absolute -top-3 -right-2 bg-[#fff] h-4 w-4'></div>
          <div className='absolute -top-4 -right-4'>
            <button onClick={onClose}><Image src='/images/close.png' width={30} height={30} alt='Close icon' /></button>
          </div>
        </div>
      </Html>
  );
};