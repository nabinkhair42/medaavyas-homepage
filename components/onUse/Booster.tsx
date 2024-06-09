import React from "react";
import Image from "next/image";
import OnlineTest from "@/public/LandigPage/OnlineTest.svg";
import { Button } from "@/components/ui/button";
const Booster = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative overflow-hidden dark:bg-dot-white/[0.2] bg-dot-black/[0.2] px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 fancy border">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#48FB90" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-red-500 px-2 py-1 rounded-md text-white mr-1 ">
                Live
              </span>
              Mock Test <span className="text-primary">Series</span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-gray-600 dark:text-gray-300">
              Get ready for your exam with our online test series. Our online
              test series will help you to improve your score and get the best
              result.
            </p>
            <div className="flex items-center justify-center gap-x-6 lg:justify-start mt-4">
              <Button variant="default" size="default">
                Getting Started
              </Button>
            </div>
          </div>
          <div className="relative h-80 mt-4">
            <Image
              src={OnlineTest}
              className="absolute left-0 top-0 w-[55rem] max-w-none rounded-sm"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booster;
