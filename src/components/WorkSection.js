import { Canvas } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import { useState } from 'react';
import Image from 'next/image';

export default (x, y, z, isMobile) => {

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
      <Html position={[x+5 , y + 0.8, z - 10]} rotation={[-0.1, -0.2, -0.05]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-52 rounded-md border-4 border-[#732402] p-4 flex-row text-center'>
            <p className="text-white text-lg">Work Experience</p>
            <p className="text-white bg-[#546d26] text-sm inline border-2 rounded-md"><button className='px-1' onClick={onClick}>OPEN</button></p>
          </div>
        </div>
      </Html>
      :
      <Html position={isMobile ? [x+3 , y, z - 10] : [x-1 , y, z - 10]} rotation={[-0.1, 0, 0]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-80 rounded-md border-4 p-2 border-[#732402]'>
            <p className="text-white text-base">Money Mileage | SWE-Frontend Intern</p>
            <p className="text-white text-xs flex justify-end mr-2">(OCT 2022 – JAN 2023)</p>
            <ul className='list-disc list-inside mt-2'>
                <li className="text-white text-sm">Designing and developing hybrid fintech mobile app.</li>
                <li className="text-white text-sm">Created new sections from scratch compatible with both android and Ios.</li>
                <li className="text-white text-sm">Integrated highly secure APIs for selling and buying digital gold.</li>
                <li className="text-white text-sm">Participated in each step of the product development process from ideation to development improvements reaching thousands of users.</li>
            </ul>
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