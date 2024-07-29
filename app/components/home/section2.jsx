"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements with the class 'we-are' to slide in from the left
    gsap.set(".we-are", { x: -900, opacity: 0 });
    gsap.to(".we-are", {
      scrollTrigger: {
        trigger: ".we-are",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "restart pause reverse pause",
        scrub: 1.5,
      },
      opacity: 1,
      ease: "power4.out",
      x: 0,
      stagger: 0.2,
    });

    gsap.set(".we", { x: 900, opacity: 0 });
    gsap.to(".we", {
      scrollTrigger: {
        trigger: ".we",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "restart pause reverse pause",
        scrub: 1.5,
      },
      opacity: 1,
      ease: "power4.out",
      x: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="relative h-[65vh] flex flex-col items-center justify-center text-center overflow-hidden bg-peachy lg:bg-[url('/images/pro.png')] bg-cover bg-top">
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 font-poppins">
        <p className="we-are text-gray-800 text-3xl">
          <span className="text-red-500 font-bold">We are</span> creatives,
          vision builders, planners, entertainers. <br />
        </p>
        <p className="we text-gray-800 text-3xl leading-relaxed">
          <span className="text-red-500 font-bold">We are</span> problem
          solvers, dreamers, doers. <br />
        </p>
        <p className="we-are text-gray-800 text-3xl leading-relaxed">
          All things are possible. <br />
        </p>

        <p className="we text-gray-800 text-3xl">
          <span className=" text-red-500 font-bold">We are Carousel.</span>
        </p>
      </div>
    </section>
  );
};

export default Section2;
