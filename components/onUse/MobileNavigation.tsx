import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify, BookDashedIcon } from "lucide-react";


const popUpNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <AlignJustify />
          </Button>

        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-4 mt-8">
              
              <AccordionItem value="item-1" className="flex h-full w-full select-none flex-col justify-end rounded-md px-4 focus:shadow-md">
                <AccordionTrigger>Medical</AccordionTrigger>
                <AccordionContent className="text-left">
                 <ul className="flex flex-col gap-4 ml-3">
                  <li className="bg-gradient-to-b from-muted/50 to-muted group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">CEE Preperation</li>
                  <li className="bg-gradient-to-b from-muted/50 to-muted group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">NMCLE Preperation</li>
                  <li className="bg-gradient-to-b from-muted/50 to-muted group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">BSC Nurshing Preperation</li>
                 </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="flex h-full w-full select-none flex-col justify-end rounded-md px-4 focus:shadow-md">
                <AccordionTrigger>Engineering</AccordionTrigger>
                <AccordionContent>
                <ul className="flex flex-col gap-4 ml-3">
                  <li className="bg-gradient-to-b from-muted/50 to-muted group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">IOE Preperation</li>
                  <li className="bg-gradient-to-b from-muted/50 to-muted group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">NECLE Preperation</li>
                  <li className="bg-gradient-to-b from-muted/50 to-muted group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">BSC Nurshing Preperation</li>
                 </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="flex h-full w-full select-none flex-col justify-end rounded-md px-4 focus:shadow-md">
                <AccordionTrigger>Plans</AccordionTrigger>
                <AccordionContent>
                <ul className="flex flex-col gap-4 ml-3">
                  <li className="bg-gradient-to-b from-muted/50 to-muted group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">Stater Pack</li>
                  <li className="bg-gradient-to-b from-muted/50 to-muted group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">Megha Pack <span className="h-fit w-fit ml-2 mb-4 rounded-md bg-primary px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">New</span></li>
                  
                 </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="flex h-full w-full select-none flex-col justify-end rounded-md px-4 focus:shadow-md">
                <AccordionTrigger>Contact Us</AccordionTrigger>
                <AccordionContent>
                <ul className="flex flex-col gap-4 ml-3">
                  <li className="bg-gradient-to-b from-blue-800/50 to-blue-700/40 group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">Nepal Telecome</li>
                  <li className="bg-gradient-to-b from-purple-500/50 to-purple-400/50 group border px-4 w-60 h-16 flex items-center py-4 hover:border rounded-md ">NCELL</li>
                  
                 </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetHeader>
          <SheetFooter className="mt-4">
            <div className="flex gap-3 flex-col">
              <Button variant="default" size="lg">
                Sign Up
              </Button>
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default popUpNav;
