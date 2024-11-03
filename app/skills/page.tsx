import React from 'react'
import Image from 'next/image'
import skillTag from "@/app/public/skills-icon.png"
import htmlCard from '@/app/public/html.png'
import cssCard from '@/app/public/css.png'
import nextCard from '@/app/public/next.png'
import reactCard from '@/app/public/react.png'
import figmaCard from '@/app/public/figma.png'
import tscrptCard from '@/app/public/ts.png'
import tailwindCard from '@/app/public/t.css.png'

const skill = () => {
  return (
   <> <div className='flex flex-col items-center md:space-y-10 '>
    <div className='py-10'>
<Image src={skillTag} alt="icon" className='w-48 md:w-56'
/> 
 </div>
 <div className='md:flex md:flex-row md:space-x-14'> <div>
  <Image src={htmlCard} alt='html-card'  className='w-60 mt-6'
   /> </div>
 <div>
  <Image src={cssCard} alt='css-card' className='w-60 mt-6'
  /> </div>
 <div>
  <Image src={nextCard} alt='next-card' className='w-[245px] mt-6'
  /> </div> 
   </div> 
  <div className='md:flex md:flex-row md:space-x-14'> <div>
  <Image src={reactCard} alt='react-card' className='w-60 mt-6'
  /> </div>
  <div>
  <Image src={figmaCard} alt='figma-card' className='w-60 mt-6'
  /> </div>
  <div>
  <Image src={tscrptCard} alt='ts-card' className='w-[245px] mt-6'
  /> </div> </div>
  <div>
  <Image src={tailwindCard} alt='t.css-card' className='w-[245px] mt-6'
  /> </div>
  
    </div>



</>


  )
}

export default skill
