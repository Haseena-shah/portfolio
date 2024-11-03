import React from "react";
import { Aclonica } from "next/font/google";
import Image from "next/image";
import hijabi from '@/app/public/hijabi.girl.png'
import { Button } from "@/components/ui/button"

import Link from "next/link";


const writting = Aclonica({
  subsets: ["latin"],
  weight: ["400"],
});

const Main = () => {
  
  return (
    <> <div className=" flex text-white flex-col text-3xl md:text-5xl mt-10 text-center ">
     <div className="md:flex md:mt-40 md:ml-20 space-x-5 "><div className="" > Hello i'M </div>
     <div className={writting.className}> <h1 className="mt-8 md:mt-0 "> Haseena shah</h1>
        </div> </div>
      <div className=" mt-8 md:mr-[700px]">frontend developer</div>
        </div> 
        <div>
        <Image
          src={hijabi}
          alt="girl"
          className="mt-6 w-72  flex-col ml-12 md:absolute md:mr-20 right-12 bottom-16 md:w-96"
        />

      </div> <div className="md:mr-[800px] md:mt-8">
      <div className="flex justify-center">
      <Link href="/About">
          <Button className="bg-[rgb(66,136,43)] mt-9 rounded-full">
            About me
          </Button>
        </Link>
<Link href="/projects">
< Button className=" bg-[rgb(66,136,43)] mt-9 w-24 ml-11 rounded-full">
             My Projects
            </Button></Link>

            
            </div>
            <div className="flex justify-center">
            <Link href= "/skills">
            <Button className=" bg-[rgb(66,136,43)] mt-9 w-24 rounded-full">
              My Skills
            </Button> </Link>
            <Link href= "/contact">
            < Button className=" bg-[rgb(66,136,43)] mt-9 ml-11 rounded-full">
              Contact me
            </Button>  </Link>
            

            </div> </div>


    </>
  );
};

export default Main;
