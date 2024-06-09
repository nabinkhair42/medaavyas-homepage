"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import BGEffect from "@/public/LandigPage/bg-effect.svg";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-16 sm:px-6 lg:px-8 px-10 flex flex-col items-center gap-10 xl:flex-row xl:justify-around xl:items-start"
      style={{ backgroundImage: `url(${BGEffect.src})` }}
    >
      <div className="flex flex-col gap-4 text-center justify-center items-center xl:w-1/3">
        <h1 className="text-3xl font-bold sm:text-4xl flex">
          Testimonials
          <Badge className="h-fit w-fit text-nowrap" variant="default">
            What our learner says?
          </Badge>
        </h1>
        <p className="text-sm ">
          Uncover the truth in the figures. Let the numbers speak for themselves
          and reveal the unparalleled excellence we deliver.
        </p>
      </div>
      <div className="antialiased items-center flex relative overflow-hidden justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
};

export default Testimonials;
