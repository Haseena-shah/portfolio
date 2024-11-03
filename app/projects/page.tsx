import React from 'react';
import Image from "next/image";
import proIcon from "@/app/public/project-icon.png";
import proPic from "@/app/public/proPic.png"
const project = () => {
  return (
   <> 
   <div className='flex flex-col items-center '>
    <div> <Image
   src={proIcon}
   alt='project.logo'
   className=' mt-14 md:w-60 md:mt-4 '
   /> </div>
   <div className=' flex flex-col md:flex-row md:mt-24 md:ml-36'>  <div>
   <Image
                src={proPic}
                alt='portfolio'
                className=' mt-24 w-64 md:mt-4 md:w-4/6 '
                />
   </div>
   <div>
   <Image
                src={proPic}
                alt='portfolio.2'
                className=' mt-24 w-64 md:mt-4 md:w-4/6 '
                />
   </div> </div>
 
   </div></>
  )
}

export default project