import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import FAQs from "@/public/LandigPage/FAQs.svg";

const Question = [
  {
    sno: "1",
    question: "What is Mock Test?",
    answer:
      "A mock test is a practice exam designed to simulate the main exam. It helps students get familiar with the exam pattern and improve time management.",
  },
  {
    sno: "2",
    question: "Why take mock tests before the final exam?",
    answer:
      "Mock tests are crucial for students preparing for competitive exams. They help in assessing one's preparation level, identifying strengths and weaknesses, and improving overall performance before the actual exam.",
  },
  {
    sno: "3",
    question: "Advantages of Mock Tests",
    answer:
      "Mock tests provide a realistic exam experience, help in understanding the exam pattern, improve time management skills, and boost confidence. Additionally, they aid in identifying areas that require further study and revision.",
  },
  {
    sno: "4",
    question: "How to take a Mock Test?",
    answer:
      "To take a mock test, click on the 'Start Test' button. You will be directed to the test page where you can view and answer the questions. Once you have completed the test, click on the 'Submit' button to view your score and performance.",
  },
  {
    sno: "5",
    question: "How to check the result of a Mock Test?",
    answer:
      "To check the result of a mock test, click on the 'View Result' button. You will see your score, correct answers, and any incorrect responses. This helps in analyzing performance and identifying areas for improvement.",
  },
  {
    sno: "6",
    question: "How to review a Mock Test?",
    answer:
      "To review a mock test, click on the 'Review' button. You can revisit the questions you answered incorrectly and understand the correct answers. This process aids in learning from mistakes and improving future performance.",
  },
];

const FrequentlyAskedQuestion = () => {
  return (
    <section className="py-16 sm:px-6 lg:px-8 px-10 flex flex-col items-center gap-10 xl:flex-row xl:justify-evenly">
      <div className="flex flex-col items-centerflex gap-4 text-center justify-center items-center">
        <h1 className="text-3xl font-bold sm:text-4xl flex">
          FAQs
          <Badge className="h-fit w-fit text-nowrap lg:block" variant="default">
            Questions
          </Badge>
        </h1>
        <p className="text-sm">
          Trusted by over 10K students over 7 different states of Nepal
        </p>
        <div className="flex justify-center items-center">
          <Image
            src={FAQs}
            alt="FAQs"
            width={350}
            height={350}
            className="hidden xl:block"
          />
        </div>
      </div>
      <div className="w-full max-w-2xl">
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {Question.map((component, index) => (
            <AccordionItem key={index} value={`item-${component.sno}`}>
              <div className="border group hover:text-primary hover:bg-card rounded-xl px-4 py-2 transition-colors ease-linear">
                <AccordionTrigger>{component.question}</AccordionTrigger>
                <AccordionContent className="text-justify">
                  {component.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
