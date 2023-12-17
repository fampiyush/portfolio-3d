import { AiOutlineMail } from 'react-icons/ai';
import { BsFile, BsFillPersonLinesFill } from 'react-icons/bs';
import {FaGithub, FaLinkedinIn } from "react-icons/fa"

export default ({last}) => {
    return (
        !last ?
        <div className='absolute top-0 right-1 flex items-center min-w-[10rem] max-w-sm justify-between m-auto py-4'>
            <a title='linkedIn' href="http://linkedin.com/in/fampiyush" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
            <FaLinkedinIn />
            </div>
            </a>
            <a title='Github' href="http://github.com/fampiyush" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
            <FaGithub />
            </div>
            </a>
            <a title='Email' href="mailto:piyushgupta941d@gmail.com" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
            <AiOutlineMail />
            </div>
            </a>
        </div>
        :
        <div className='absolute top-0 left-8 flex items-center min-w-[15rem] max-w-sm justify-between m-auto py-4'>
            <a title='linkedIn' href="http://linkedin.com/in/fampiyush" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
            <FaLinkedinIn />
            </div>
            </a>
            <a title='Github' href="http://github.com/fampiyush" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
            <FaGithub />
            </div>
            </a>
            <a title='Email' href="mailto:piyushgupta941d@gmail.com" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff]">
            <AiOutlineMail />
            </div>
            </a>
            <a title='resume' href="https://drive.google.com/file/d/1cEzpJgqoU83J-z-9LxydktsZ3s4d96il/view?usp=drive_link" target='_blank' rel='noreferrer'>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-[#fff">
            <BsFillPersonLinesFill />
            </div>
            </a>
        </div>
    )
}