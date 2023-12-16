import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, img, projectUrl, tech}) => {
  return (
    <div>
         <div className='relative flex items-center justify-center h-72 w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to -[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={img} alt='/' fill style={{ objectFit: 'cover' }} sizes="(max-width: 1200px) 100vw, 33vw" />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wide text-center'>{title}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                        <Link href={projectUrl} target='_blank'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>
    </div>
  )
}

export default ProjectItem