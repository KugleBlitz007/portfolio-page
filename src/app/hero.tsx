"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="">
      <div className="container mx-auto grid min-h-[80vh] w-full grid-cols-1 lg:grid-cols-2 relative">
        
        {/* LEFT COLUMN: Text that overflows onto the image */}
        <div className="z-10 -mb-[20%] h-full mt-[10rem] px-0">
          <Typography
            variant="h1"
            color="black"
            className="text-4xl ml-[20%] mb-20 lg:text-[200px] font-serif font-bold uppercase"
          >
            Welc<span className="text-black">ome</span>
          </Typography>
          <Typography
            variant="h1"
            color="black"
            className="ml-[15%] mb-5 text-5xl lg:text-7xl font-serif"
          >
            to my
          </Typography>
          <Typography
            variant="h1"
            className="text-[#c44587] ml-[20%] mb-5 text-4xl lg:text-7xl font-sans font-thin italic"
          >
            (personal)
          </Typography>
          
          <div className="w-full flex justify-between mt-3 text-black text-[200px] font-serif font-thin uppercase">
  {"portfolio".split("").map((letter, index) => (
    <Typography key={index} variant="h1" className="px-[2%] text-black text-5xl lg:text-[200px] font-serif font-thin uppercase inset-0">
      {letter}
    </Typography>
  ))}
</div>

        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="relative z-0">
          <Image
            width={1024}
            height={1024}
            alt="team work"
            src="/image/avatar1.png"
            className="h-full w-full rounded-xl object-cover opacity-60"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
