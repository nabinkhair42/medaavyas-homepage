"use client";
import React from "react";
import Image from "next/image";
import Learning from "@/public/LandigPage/HeroSection/Learning.svg";
import { Spotlight } from "@/components/ui/Spotlight";
import Pencil from "@/public/LandigPage/HeroSection/pencil-dynamic-color.png";
import BGEffect from "@/public/LandigPage/bg-effect.svg"
import { Bell, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const mainSection = () => {
  return (
    <main>
      
      <div className="h-[80vh] w-full dark:bg-background bg-background dark:bg-grid-green-400/[0.08] bg-grid-green-400/[0.05] relative flex justify-evenly items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"/>
        <div className="h-[80vh] absolute pointer-events-none inset-0 flex items-center justify-center bg-background dark:bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container h-full w-full mx-auto p-4 flex flex-col justify-around items-center absolute">
        
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm border hover:border-primary rounded-full dark:bg-background dark:text-primary/80 hover:bg-primary/40 dark:hover:bg-primary/20 transition-colors ease-linear duration-300 hover:text-primary">
        
            <span className="text-xs rounded-full px-4 py-1"><Bell/></span> <span className="text-sm font-medium">We are hiring new tutors and employees</span> 
            <ArrowRight/>
        </a>
          
          <div className="w-full justify-around items-center flex pl-8 md:p-4 text-center md:text-left isolate">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h1 className="text-6xl font-extrabold md:text-5xl lg:text-6xl">
                Welcome to Med<span className="text-green-400">aavyas</span>.
              </h1>
              <p className="text-2xl font-medium md:text-3xl lg:text-4xl">
                Nepal Largest Learning Platform
              </p>
              <div className="flex gap-4">
              <Button size="default" className="drop-shadow-md">
      Get Started
    </Button>
                <Button className="flex" variant={"outline"} size="default">
                  Lern More
                  <ArrowRight className="ml-2 animate-move-right drop-shadow-md"></ArrowRight>
                </Button>
              </div>
            </div>
              
            {/* Laptop Mock */}
            <div className="rounded-xl hidden md:block  ">
              <div className="relative mx-auto border-gray-800 dark:border-gray-700 bg-gray-800 border-[12px] rounded-t-2xl rounded-b-lg max-w-[301px] md:max-w-[512px] shadow-2xl">
                <div className="group rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                  <Image
                    src={Learning}
                    className="select-none dark:hidden h-full w-fit rounded-lg"
                    alt="Light Image"
                    height={500}
                    width={500}
                  ></Image>
                  <Image
                    src={Learning}
                    className="select-none hidden dark:block h-full w-fit rounded-lg"
                    alt="Dark Image"
                    height={500}
                    width={500}
                  ></Image>
                </div>
              </div>
              <div className="relative mx-auto shadow-inner bg-gray-900 dark:bg-slate-800 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default mainSection;
