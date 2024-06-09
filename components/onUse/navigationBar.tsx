"use client";
import { motion, useScroll, useTransform } from "framer-motion";
"useTheme";
import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {Badge } from "@/components/ui/badge";
import Logo from "@/public/LandigPage/NavigationBar/logo.svg";
import NcellLogo from "@/public/LandigPage/NavigationBar/ncell.svg";
import NTCLogo from "@/public/LandigPage/NavigationBar/ntc-logo.png";
import DNA from "@/public/LandigPage/NavigationBar/DNA.svg";
import Compass from "@/public/LandigPage/NavigationBar/Compass And Scale.svg";
import Target from "@/public/LandigPage/NavigationBar/Target.svg";
import Puzzle from "@/public/LandigPage/NavigationBar/Puzzle.svg";
import {
  MoonStar,
  Sun,
  MonitorSmartphone,
  Command,
  PhoneCallIcon,
} from "lucide-react";
import MobileNavBar from "@/components/onUse/MobileNavigation";

// Contacts Numbers

const ContactNumber: { title: string; href: string; description: string }[] = [
  {
    title: "Nepal Telecome",
    href: "tel:9841XXXXXX",
    description: "9841XXXXXX",
  },
  {
    title: "Ncell",
    href: "tel:9814XXXXXX",
    description: "+977 9814XXXXXX",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavigationBar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["hsla(0,0,0,0)", "hsla(0,0,0,0)"]
  );
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  const { setTheme } = useTheme();
  return (
    <motion.div className="flex w-full items-center pt-4 pb-4 px-8 md:px-12 bg-background top-0 left-0 z-50 sticky border-b" style={{ background,
      height, backdropFilter: 'blur(20px)', backgroundColor: 'transparent' }}>
      <div id="logo" className="flex cursor-pointer gap-1 items-center justify-center"onClick={() => window.location.href = "./"}>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <h1 className="font-medium text-2xl text-primary">Med.</h1>
      </div>

      <div id="menus" className="ml-8 w-full">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-inhirit">Medical</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                          <div>
                            <Image src={DNA} alt="DNA" width={50} height={50} />
                          </div>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Medical Students
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Course designed and curated by expret and exprienced
                          Faculty.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="CEE Preperation">
                    Common Entrance Examination: Gateway to Medical Colleges.
                  </ListItem>
                  <ListItem href="#" title="NMCLE Preperation">
                    Nepal Medical Council Liscense Examination: Gateway to
                    Medical Practice.
                  </ListItem>
                  <ListItem href="#" title="BSC Nurshing Preperation">
                    Gateway to Nurshing Colleges.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-inhirit">Engineering</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div>
                          <Image src={Compass} alt="Compass" width={50} height={50} />
                        </div>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Engineering Students
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Course designed and curated by expret and exprienced
                          Faculty.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="IOE Preperation">
                    Common Entrance Examination: Gateway to Engineering
                    Colleges.
                  </ListItem>
                  <ListItem href="#" title="NECLE Preperation">
                    Nepal Engineering Council Liscense Examination: Gateway to
                    Engineering Practice.
                  </ListItem>
                  <ListItem href="#" title="BSC.CSIT Preperation">
                    Gateway to CSIT Colleges.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuTrigger className="bg-inhirit">Plans</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div>
                          <Image src={Target} alt="Target" width={50} height={50} />
                        </div>
                        <div className="mb-2 mt-4 text-lg font-medium flex w-full gap-2 text-nowrap">
                          Stater Pack
                          <Badge variant="default" className="mb-10">
                            New
                          </Badge>
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Course designed and curated by expret and exprienced
                          Faculty.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="IOE Preperation">
                    Common Entrance Examination: Gateway to Engineering
                    Colleges.
                  </ListItem>

                  <ListItem href="#" title="NECLE Preperation">
                    Nepal Engineering Council Liscense Examination: Gateway to
                    Engineering Practice.
                  </ListItem>

                  <ListItem href="#" title="BSC.CSIT Preperation">
                    Gateway to CSIT Colleges.
                  </ListItem>
                </ul>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div>
                          <Image src={Puzzle} alt="Puzzle" width={50} height={50} />
                        </div>
                        <div className="mb-2 mt-4 text-lg font-medium flex gap-2 w-full text-nowrap">
                          Megha Pack
                          <Badge className="mb-10">
                            Popular
                          </Badge>
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Course designed and curated by expret and exprienced
                          Faculty.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="IOE Preperation">
                    Common Entrance Examination: Gateway to Engineering
                    Colleges.
                  </ListItem>
                  <ListItem href="#" title="NECLE Preperation">
                    Nepal Engineering Council Liscense Examination: Gateway to
                    Engineering Practice.
                  </ListItem>
                  <ListItem href="#" title="BSC.CSIT Preperation">
                    Gateway to CSIT Colleges.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-inhirit">Contact Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {ContactNumber.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div id="Buttons" className="flex gap-3 items-end ml-auto">
        <div className="hidden md:flex gap-3">
          <Button size="default" variant="default" >
            Sign Up
          </Button>
          <Button size="default" variant="outline" >
            Sign In
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <MoonStar className="mr-2" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <MonitorSmartphone className="mr-2" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div id="MobileNavOpener" className="block md:hidden">
        <MobileNavBar />
      </div>
    </motion.div>
  );
};

export default NavigationBar;
