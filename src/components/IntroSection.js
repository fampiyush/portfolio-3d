import { Canvas } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import { useState } from 'react';
import Image from 'next/image';

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
      <Html occlude distanceFactor={10} position={[x+5 , y + 0.8, z - 10]} rotation={[-0.1, -0.2, 0]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-52 rounded-md border-4 border-[#732402] p-4 flex-row text-center'>
            <p className="text-white text-lg">Introduction</p>
            <p className="text-white bg-[#546d26] text-sm inline border-2 rounded-md"><button className='px-1' onClick={onClick}>OPEN</button></p>
          </div>
        </div>
      </Html>
      :
      <Html occlude distanceFactor={10} position={[x , y + 0.8, z - 10]} rotation={[-0.1, 0, 0]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-80 rounded-md border-4 p-2 border-[#732402]'>
            <p className="text-white text-base">Hi, I'm Piyush a Full-Stack Developer</p>
            <p className="text-white text-base">specializing in building and designing exceptional digital experiences. Currently, I'm focused on building responsive 3D full stack web applications.</p>
          </div>
          {/* <div className='absolute -right-12 top-[4.7rem] bg-[#fff] h-6 w-6'></div>
          <div className='absolute -right-16 top-16'>
            <button onClick={onNext}><Image src='/images/next.png' width={50} height={50} alt='Next icon' /></button>
          </div> */}
          <div className='absolute -top-3 -right-2 bg-[#fff] h-4 w-4'></div>
          <div className='absolute -top-4 -right-4'>
            <button onClick={onClose}><Image src='/images/close.png' width={30} height={30} alt='Close icon' /></button>
          </div>
        </div>
      </Html>
  );
};