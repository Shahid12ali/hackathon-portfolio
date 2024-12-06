"use client"
import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import profilepic from "../../../../public/myPic.png"

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-around h-screen mb-40 sm:mt-20">
          <div className='w-[300px] sm:w-[400px] sm:ml-10'>
            <h1 className='text-white text-2xl pt-36'>Hello,</h1>
            <h1 className='text-white text-5xl  font-bold'>I&apos;m Shahid<span>Ali</span></h1>
            <div className='font-bold text-white text-2xl '><Typewriter
            options={{
            strings: ["FullStack Web Developer"],
            autoStart: true,
            loop: true,
            }} /> </div>

            <p className='text-white'>And I am Currently Pursuing Software Engineering&apos; With A Focus On Artificial Intelligence (AI), I Am Passionate About Learning Generative AI And.
                    Developing Solutions Using Tools Like Docker, Ubuntu, And Modern Python. I Enjoy Working On Innovative Projects, From Building Apps To Exploring, Cloud-native Technologies.</p>
            <div className=' sm:flex  w-[300px] sm:w-[500px] gap-6'>
              <a href="./myCv.pdf" target='_blank' className='flex bg-blue-400 items-center justify-center w-40  rounded-lg py-2
                   mt-14 font-semibold hover:bg-white hover:scale-90 duration-500'>
                   Download CV <MdOutlineFileDownload /></a>
                  <div className='md:hidden text-[24px]'></div>
                  <a href="http://www.linkedin.com/in/shahid-ali-64676a2ba" target='_blank' className='flex bg-transparent text-white items-center justify-center w-40 rounded-lg border-2 outline-none py-2 mt-14 font-semibold hover:bg-white hover:text-black hover:scale-90 duration-500 outline'>
                  LinkedIn</a>
                  
            </div> 
          </div>
        
        
        <div>
          <Image src={profilepic} alt="My Profile Picture" width={300} height={300} className='mt-16 mb-20 w-auto h-auto rounded-[50%] shadow-lg shadow-yellow-400'/>
        </div>
      </section>
    </div>
  )
}

export default Hero
