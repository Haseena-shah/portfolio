import React from 'react'
import Image from 'next/image'
import Icon from '@/app/public/contact-icon.png'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from '@/components/ui/button'


const contact = () => {
  return (
  <> <div className='flex flex-col items-center'>
    <div className='flex mt-8 w-60 md:w-64 md:mt-1'>
      <Image src={Icon} alt='contact icon'/> </div>
    <div className="grid w-72 md:w-3/6 py-16 md:py-10 ">                                      
       <Label htmlFor="name" className='text-white mb-1'>Name</Label>  
      <Input type="name" id="name" placeholder="Enter your name" /> 
      <Label htmlFor="email" className='text-white mb-1 mt-5'>Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
      <Label htmlFor="tel" className='text-white mb-1 mt-5'>Phone Number</Label>
      <Input type="tel" id="tel" placeholder="Enter your phone number" />
      <Label  htmlFor="message" className='text-white mb-2 mt-5'>Massage</Label>
      <textarea placeholder="Enter your any massage" className='p-2'></textarea>
    </div>
    <div><Button className="bg-[rgb(66,136,43)] w-36 h-14 rounded-full">
            Submit
          </Button>
            </div>
</div>
    </>
  )
}

export default contact    












