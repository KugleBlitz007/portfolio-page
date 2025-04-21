"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-[#c44587] p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          {/* @ts-expect-error */}
          <Typography
            variant="h1"
            color="white"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my personal <br /> portofolio!
          </Typography>
          {/* @ts-expect-error */}
          <Typography
            variant="lead"
            className="mb-4 !text-white md:pr-16 xl:pr-28"
          >
            I&apos;m Corrinthina Rabemanantsoa, a passionate content creator based in Canada. Here,
            you&apos;ll get a glimpse of my journey in the world of content creation, where creativity meets functionality.
          </Typography>
          <div className="grid">
            {/* @ts-expect-error */}
            <Typography
              variant="small"
              className="mb-2 text-white font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="white" label="Enter your email" size="lg" className="border-1 border-b-white" />
              {/* @ts-expect-error */}
              <Button color="white" className="w-full px-4 md:w-[12rem]">
                contact me
              </Button>
            </div>
          </div>
          {/* <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/avatar1.jpg"
          className="md:h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
