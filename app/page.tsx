"use client";
import React from 'react';
import {motion} from 'framer-motion';

import HeroSection from '@/components/onUse/HeroSection';
import Booster from '@/components/onUse/Booster';
import Features from '@/components/onUse/Features';
import TrendingCourses from '@/components/onUse/TrendingCourses';
import FrequentlyAskedQuestion from '@/components/onUse/FrequentlyAskedQuestion';
import HowItWorks from '@/components/onUse/HowItWorks';
import Stats from '@/components/onUse/Stastics';  // Ensure the path and filename are correct
import Testimonials from '@/components/onUse/Testimonials';
import Footer from '@/components/onUse/Footer';


const Page = () => {
  return (
    <main className="overflow-x-hidden">
      {/* HeroSection */}
      <HeroSection />

      {/* Features */}
        <Features />
{/* 
      Trending Courses
      <TrendingCourses /> */}
    

      {/* How It Works */}
      <HowItWorks />

      {/* Statistics */}
      <Stats />

      {/* Booster */}
      <Booster />

      {/* Frequently Asked Question */}
      <FrequentlyAskedQuestion />

      {/* Testimonials */}
      <Testimonials />

     
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;
