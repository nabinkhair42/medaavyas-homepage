"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileQuestionIcon,
  Headset,
  NotebookPenIcon,
  UserCheck2,
  LucideIcon,
} from "lucide-react";
import BGEffect from "@/public/LandigPage/bg-effect.svg";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Headset,
    title: "Live Classes",
    description:
      "Get the best learning experience with the best teachers in the world.",
  },
  {
    icon: NotebookPenIcon,
    title: "Online Mock Exam",
    description:
      "From the best teachers in the world, we provide the best quality.",
  },
  {
    icon: FileQuestionIcon,
    title: "Doubt Solving Session",
    description:
      "Provide customer service for those of you who have problems 24 hours a day.",
  },
  {
    icon: UserCheck2,
    title: "Community Interaction",
    description: "Join the community to discuss and learn from each other.",
  },
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="group relative w-full bg-card rounded-2xl p-4 transition-colors duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary/85 border">
    <div className="bg-popover rounded-full flex text-primary justify-center items-center mb-5 w-14 h-14">
      <Icon />
    </div>
    <h4 className="text-xl font-semibold text-card-foreground mb-3 capitalize transition-colors duration-500 group-hover:text-primary-foreground">
      {title}
    </h4>
    <p className="text-sm font-normal text-[hsl(var(--muted-foreground))] transition-colors duration-500 leading-5 group-hover:text-primary-foreground">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <section
      className="py-14 w-screen relative flex justify-evenly items-center"
      style={{ backgroundImage: `url(${BGEffect.src})` }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="w-full text-center flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Features</h2>
            <p className="text-sm font-normal">
              Engage with experts for execution support and success
              hand-holding.
            </p>
          </div>
        </div>

        <motion.div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            ></FeatureCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
