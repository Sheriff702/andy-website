"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import { gsap } from "gsap";

import bar from "../../public/bar.jpg"; // Ensure the correct path to your image

const HeroPage = () => {
  useEffect(() => {
    // Animate elements with the class 'hero-text' to slide in from the left
    gsap.set(".hero-text", { x: -500, opacity: 0 });
    gsap.to(".hero-text", {
      duration: 1.5,
      opacity: 1,
      toggleActions: "restart pause reverse restart",
      ease: "power2.out",
      x: 0,
      stagger: 1,
    });

    // Animate elements with the class 'hero-image' to slide in from the right
    gsap.set(".hero-image", { x: 500, opacity: 0 });
    gsap.to(".hero-image", {
      duration: 2.5,
      opacity: 1,
      toggleActions: "restart pause reverse pause",
      ease: "power4.out",
      x: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className=" h-[90vh] grid grid-cols-1 md:grid-cols-2 ">
      <div className="hero-text-container flex items-center justify-center bg-white bg-opacity-70 rounded-sm ">
        <div className="space-y-10 text-center md:text-left">
          <h1 className="hero-text text-2xl md:text-5xl font-bold text-gray-800">
            EVENT MANAGEMENT,
          </h1>
          <h1 className="hero-text text-2xl md:text-5xl font-bold text-gray-800">
            HOSPITALITY DESIGN
          </h1>
          <h1 className="hero-text text-2xl md:text-5xl font-bold text-gray-800">
            <span className="text-green-400"> & </span> <br /> <br />
            {""} WORLDCLASS MIXOLOGY
          </h1>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Image
          className="hero-image z-0 bg-black object-cover"
          src={bar}
          fill
          alt="Background Image"
          priority
        />
      </div>
    </div>
  );
};

export default HeroPage;
