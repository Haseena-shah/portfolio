import React from "react";
import Image from "next/image";
import aboutPic from "@/app/public/about-pic.png";
import { Josefin_Sans } from "next/font/google";

const writting = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

const About = () => {
  return (
    <>
      {" "}
      <div  className="flex justify-center  mt-8 ">
        <Image
          src={aboutPic}
          alt="about.logo"
          className="md:w-72"
        />
         </div>
        <div className="text-white text-center mt-10 ml-10 mr-10 text-3xl md:text-4xl md:ml-36 md:mr-36 md:mt-20">
          {" "}
          <p className={writting.className}>
            {" "}
            Hi! I’m Haseena shah, a primary education teacher and currently
            exploring programming, believing it can enhance education in
            exciting ways. In my spare time, I love to create through crafting
            and design, finding joy in expressing my creativity. Thanks for
            visiting my portfolio.
          </p>
        </div>
     
    </>
  );
};

export default About;
