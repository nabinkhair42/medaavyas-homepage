import { useState } from "react";
import React from "react";
import Image from "next/image";
import Logo from "@/public/LandigPage/NavigationBar/logo.svg";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Facebook,
  InstagramIcon,
  Linkedin,
  Twitter,
} from "lucide-react";

interface LinkTitle {
  title: string;
  href: string;
}

const ourPages: LinkTitle[] = [
  {
    title: "Home",
    href: "./",
  },
  {
    title: "About Us",
    href: "./",
  },
  {
    title: "Contact",
    href: "./",
  },
  {
    title: "Privacy Policy",
    href: "./",
  },
  {
    title: "Terms & Conditions",
    href: "./",
  },
];

const Courses: LinkTitle[] = [
  {
    title: "IOE Entrance Preparation",
    href: "./",
  },
  {
    title: "CEE Entrance Preparation",
    href: "./",
  },
  {
    title: "NMCLE Exam Preparation",
    href: "./",
  },

  {
    title: "NECLE EXAM Preparation",
    href: "./",
  },
  {
    title: "BSC CSIT Entrance Preparation",
    href: "./",
  },
];

const Resources: LinkTitle[] = [
  {
    title: "Notes",
    href: "./",
  },
  {
    title: "Books",
    href: "./",
  },
  {
    title: "Syllabus",
    href: "./",
  },
  {
    title: "Mock Exam Paper",
    href: "./",
  },
  {
    title: "Past Year Question",
    href: "./",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row pb-12 gap-7 lg:gap-0 border-b border-gray-500">
          <a
            href="./"
            className="flex justify-center lg:justify-start items-center gap-2"
          >
            <Image src={Logo} height={50} width={50} alt="Logo"></Image>{" "}
            <span className="font-bold text-2xl">Medaavyas</span>
          </a>
          <Button className="rounded-full flex gap-2">
            Explore Courses
            <ArrowRight className="animate-move-right" />
          </Button>
        </div>
        <div className="flex justify-between flex-col py-8 min-[500px]:py-14 gap-8 min-[500px]:gap-16 lg:gap-0 lg:flex-row">
          <div className="flex flex-col items-center max-lg:justify-center min-[500px]:items-start min-[500px]:flex-row gap-8 sm:gap-12 xl:gap-24">
            <div className="block">
              <h4 className="text-xl font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                Our Pages
              </h4>

              <ul className="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                {ourPages.map((ourPage, index) => (
                  <li className="text-[12px] hover:text-primary" key={index}>
                    <a href={ourPage.href}>{ourPage.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="block">
              <h4 className="text-xl font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                Courses
              </h4>
              <ul className="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                {Courses.map((ourPage, index) => (
                  <li className="text-[12px] hover:text-primary" key={index}>
                    <a href={ourPage.href}>{ourPage.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="block">
              <h4 className="text-xl font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                Resources
              </h4>
              <ul className="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                {Resources.map((ourPage, index) => (
                  <li className="text-[12px] hover:text-primary" key={index}>
                    <a href={ourPage.href}>{ourPage.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="block lg:max-w-md">
            <h3 className="font-manrope font-semibold text-2xl leading-9 mb-8 text-center lg:text-left">
              Join the newsletter and read the new posts first
            </h3>
            <div className="lg:bg-gray-100 lg:rounded-full lg:h-16 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="email"
                className="py-3 text-primary px-6 rounded-full placeholder:text-primary focus:outline-none flex-1 w-full max-w-xl mx-auto lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent"
                placeholder="Your email here"
              />
              <Button className="rounded-full ">Subscribe Now</Button>
            </div>
          </div>
        </div>
        <div className="py-9 border-t">
          <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between">
            <span className="text-sm">
              ©<a href="./">Medaavyas</a> 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
              <a
                href="./"
                className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-primary"
              >
                <Facebook />
              </a>
              <a
                href="./"
                className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-primary"
              >
                <InstagramIcon />
              </a>
              <a
                href="./"
                className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-primary"
              >
                <Twitter />
              </a>
              <a
                href="./"
                className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-primary"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
