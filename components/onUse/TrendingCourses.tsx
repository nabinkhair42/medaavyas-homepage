import React from "react";
import { CardStack } from "@/components/ui/card-stack";
const CARDS = [
    {
      id: 1,
      name: "Step 1",
      designation: "Create an Account",
      content: (
        <p>
          You can create an account by clicking on the <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">&ldquo;Sign Up&rdquo; </span> button on the top right corner of the page. Fill in the required details and you&apos;re good to go.        
        </p>
      ),
    },
    {
      id: 2,
      name: "Step 5",
      designation: "Choose your desired course",
      content: (
        <p>
          You can review your progress and see how you&apos;re performing in the
          course. You can also<span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">reach out to the instructor</span> for any queries or
          doubts.      
        </p>
      ),
    },
    {
      id: 3,
      name: "Step 4",
      designation: "Purchase/Enroll in the course",
      content: (
        <p>
          To <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">track your progress</span>, you can give the test on regular basis. This will help you understand your weak areas and improve upon them.   
        </p>
      ),
    },
    {
      id: 4,
      name: "Step 3",
      designation: "Give the test on regular basis.",
      content: (
        <p>
          Once you&apos;ve <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">found the course</span> you&apos;re looking for, you can purchase it using the &ldquo;Buy Now&rdquo; button. You can also <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">enroll in the course</span> if it&apos;s
          free.
                  
        </p>
      ),
    },
    {
      id: 4,
      name: "Step 2",
      designation: "Review your progress and improve.",
      content: (
        <p>
          You can <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">choose from a wide range of courses available</span> on the platform.You can use the <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">search bar</span> to find the course you&apos;re looking for or browse through the categories.
  
                 
        </p>
      ),
    },
  ];
const TrendingCourses = () => {
  return (
    <section className="py-12 sm:px-6 sm:py-14 lg:px-8 px-10 flex flex-col items-center gap-10 xl:flex-row xl:justify-around">

        <div className="flex mb-4">
            <div className="flex flex-col gap-4 text-center justify-center items-center">
            <h1 className="text-3xl font-bold sm:text-4xl flex">
                Trending Courses
            </h1>
            <p className="text-sm ">
                Find the most popular courses on the platform. These courses are
                trending and are being loved by the students.
            </p>
            </div>
        </div>
    
        <CardStack items={CARDS} />

    </section>
  );
};

export default TrendingCourses;
