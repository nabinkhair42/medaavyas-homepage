"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedCounter } from "react-animated-counter";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/Spotlight";
const Statistics = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [counterValues, setCounterValues] = useState({
    courses: 100,
    videos: 2500,
    plans: 100,
    learners: 200000,
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (inView) {
      intervalId = setInterval(() => {
        setCounterValues((prevValues) => ({
          courses: prevValues.courses + Math.floor(Math.random() * 10 + 1),
          videos: (prevValues.videos +
            Math.floor(Math.random() * 100 + 1)) as number,
          plans: prevValues.plans + Math.floor(Math.random() * 10 + 1),
          learners: prevValues.learners + Math.floor(Math.random() * 1000 + 1),
        }));
      }, 1000);
    } else {
      setCounterValues({
        courses: 100,
        videos: 25000,
        plans: 100,
        learners: 200000,
      });
    }

    return () => clearInterval(intervalId);
  }, [inView]);

  return (
    <section className="py-16 sm:px-6 lg:px-8 px-10 flex flex-col items-center gap-10 xl:flex-row xl:justify-around xl:items-start relative">
      <Spotlight
    className="-top-40 left-0 md:left-60 md:-top-20"/>
      <div
        ref={ref}
        className="flex flex-col items-center p-4 bg-background rounded-lg space-y-8 text-center xl:flex-row xl:justify-around"
      >
        <div className="flex flex-col gap-4 text-center justify-center items-center xl:w-1/3">
          <h2 className="text-3xl font-bold sm:text-4xl flex">
            Platform built with
            <Badge className="h-fit w-fit text-nowrap">Stats</Badge>
          </h2>
          <p className="text-sm">
            Our platform is built with the following stats in mind. We are
            constantly improving and adding more features to make learning more
            accessible and engaging.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-grid-green-400/5 rounded-md px-4 py-6 transition-colors duration-500 hover:bg-primary/15 border flex flex-col items-center justify-center">
            <div>
              <AnimatedCounter
                value={counterValues.courses}
                color="dark:white"
                fontSize="40px"
              />
            </div>
            <p className="text-xl mt-2">Courses</p>
          </div>
          <div className="bg-grid-green-400/5 rounded-md px-4 py-6 transition-colors duration-500 hover:bg-primary/15 border flex flex-col items-center justify-center">
            <div>
              <AnimatedCounter
                value={counterValues.videos}
                color="dark:white"
                fontSize="40px"
              />
            </div>
            <p className="text-xl mt-2">Videos</p>
          </div>
          <div className="bg-grid-green-400/5 rounded-md px-4 py-6 transition-colors duration-500 hover:bg-primary/15 border flex flex-col items-center justify-center">
            <div>
              <AnimatedCounter
                value={counterValues.plans}
                color="dark:white"
                fontSize="40px"
              />
            </div>
            <p className="text-xl mt-2">Plans</p>
          </div>
          <div className="bg-grid-green-400/5 rounded-md px-4 py-6 transition-colors duration-500 hover:bg-primary/15 border flex flex-col items-center justify-center">
            <div>
              <AnimatedCounter
                value={counterValues.learners}
                color="dark:white"
                fontSize="40px"
              />
            </div>
            <p className="text-xl mt-2">Active Learners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;