import { Html } from '@react-three/drei'
import { useState } from 'react';
import Image from 'next/image';
import ProjectItem from './ProjectItem';

import journalApp from 'public/assets/projects/journal-app.png'
import houseMarketPlace from 'public/assets/projects/house-marketplace.png'
import moviesTrailer from 'public/assets/projects/Movies-trailer.png'
import githubFinder from 'public/assets/projects/github-finder.png'
import virtualMeet from 'public/assets/projects/virtual-meet.png'

export default (x, y, z, isMobile) => {

  const [opened, setOpened] = useState(false)
  const [projectNumber, setProjectNumber] = useState(0)

  const onClick = () => {
    setOpened(true)
  }

  const onClose = () => {
    setOpened(false)
    setProjectNumber(0)
  }

  const onNext = () => {
    setProjectNumber(projectNumber + 1)
  }

  const onPrev = () => {
    setProjectNumber(projectNumber - 1)
  }

  const info = [
    {
      title: 'Virtual Meet',
      img: virtualMeet,
      projectUrl: 'http://www.piyushg.com/virtualMeet',
      tech: 'React JS / Node JS'
    },
    {
      title: 'Polaroid Gallery',
      img: journalApp,
      projectUrl: 'https://www.piyushg.com/journalApp',
      tech: 'React Native'
    },
    {
      title: 'House MarketPlace',
      img: houseMarketPlace,
      projectUrl: 'https://www.piyushg.com/houseMarketplace',
      tech: 'React JS'
    },
    {
      title: 'Movies-Trailer',
      img: moviesTrailer,
      projectUrl: 'https://www.piyushg.com/moviesTrailer',
      tech: 'React Native'
    },
    {
      title: 'Github Finder',
      img: githubFinder,
      projectUrl: 'https://www.piyushg.com/githubFinder',
      tech: 'React JS'
    },
  ]

  return (
    !opened ?
      <Html position={[x-5 , y + 0.8, z - 10]} rotation={[-0.1, 0.2, 0]} transform>
        <div className="container">
          <div className='bg-[#9e2424] w-52 rounded-md border-4 border-[#732402] p-4 flex-row text-center'>
            <p className="text-white text-lg">Projects</p>
            <p className="text-white bg-[#546d26] text-sm inline border-2 rounded-md"><button className='px-1' onClick={onClick}>OPEN</button></p>
          </div>
        </div>
      </Html>
      :
      <Html position={isMobile ? [x-3 , y, z - 10] : [x+2 , y-0.8, z - 10]} rotation={[-0.1, 0, 0]} transform>
        <div className="container">
          <div className='bg-[#9e2424] md:w-[30rem] w-[20rem] rounded-md border-4 p-2 border-[#732402] inline-block'>
            <ProjectItem title={info[projectNumber].title} img={info[projectNumber].img} projectUrl={info[projectNumber].projectUrl} tech={info[projectNumber].tech} />
          </div>
          {
            projectNumber < info.length - 1 &&
            <>
            <div className='absolute -right-12 top-[7.7rem] bg-[#fff] h-6 w-6'></div>
            <div className='absolute -right-16 top-[7rem]'>
              <button onClick={onNext}><Image src='/images/next.png' width={50} height={50} alt='Next icon' /></button>
            </div>
            </>
          }
          {
            projectNumber > 0 &&
            <>
              <div className='absolute -left-12 top-[7.7rem] bg-[#fff] h-6 w-6'></div>
              <div className='absolute -left-16 top-[7rem]'>
                <button onClick={onPrev}><Image src='/images/next.png' width={50} height={50} alt='Next icon' style={{ transform: 'rotate(180deg)' }} /></button>
              </div>
            </>
          }
          <div className='absolute -top-3 -right-2 bg-[#fff] h-4 w-4'></div>
          <div className='absolute -top-4 -right-4'>
            <button onClick={onClose}><Image src='/images/close.png' width={30} height={30} alt='Close icon' /></button>
          </div>
        </div>
      </Html>
  );
};