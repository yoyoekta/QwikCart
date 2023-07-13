import React from 'react'
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import linkedin from '../icons/linkedin.png'
import github from '../icons/github.png'
import instagram from '../icons/instagram.png'
import twitter from '../icons/twitter.png'
import gmail from '../icons/gmail.png'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <BottomBar />
        <div className='max-w-7xl h-full mx-auto my-12'>
            <div className='w-full flex flex-col justify-center items-center space-y-12'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h1 className='text-4xl font-semibold'>Contact Me</h1>
                    <h1 className='text-xl font-normal'>I would love to hear from you...</h1>
                </div>
                <div className='w-full flex items-center justify-between space-x-5'>
                    <div className='px-4'>
                        <Link to="https://www.linkedin.com/in/ekta9290/" target='_blank'>
                            <img src={linkedin} alt='LinkedIn' height={50} width={50} className='cursor-pointer'/>
                        </Link>
                    </div>
                    <div className='px-4'>
                        <Link to="https://www.github.com/yoyoekta" target='_blank'>
                            <img src={github} alt='GitHub' height={50} width={50} className='cursor-pointer'/>
                        </Link>
                    </div>
                    <div className='px-4'>
                        <Link to="https://www.instagram.com/ekta_9290/" target='_blank'>
                            <img src={instagram} alt='Instagram' height={60} width={60} className='cursor-pointer'/>
                        </Link>
                    </div>
                    <div className='px-4'>
                        <Link to="https://www.twitter.com/ekta_9290/" target='_blank'>
                            <img src={twitter} alt='Twitter' height={50} width={50} className='cursor-pointer'/>
                        </Link>
                    </div>
                    <div className='px-4'>
                        <Link to="mailto:officialekta9290@gmail.com" target='_blank'>
                            <img src={gmail} alt='Gmail' height={50} width={50} className='cursor-pointer'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact