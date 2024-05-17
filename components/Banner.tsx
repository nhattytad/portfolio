"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/Me.png"
            height={300}
            width={300}
            alt="Nathanael Tafese"
          />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
        Nathanael Tafese
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <Image src="/popcorn.gif" height={50} width={50} alt="chill" />
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
        As a full-stack software engineer, I have experience throughout the entire software development life cycle, from conceptualization to design, development, and maintenance. I am dedicated to creating maintainable code and enhancing product functionality. I excel in team environments and have a strong technical foundation, a passion for learning, and a love for software development, which allows me to quickly learn and adapt to new technologies. I also have a track record of participating in quality assurance activities to ensure the best possible product. 

        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:nhattytad11@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
