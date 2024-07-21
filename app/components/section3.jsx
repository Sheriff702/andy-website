"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitSection = () => {
  useEffect(() => {
    gsap.set(".corporate-grid", { x: "100%", opacity: 0 });
    gsap.to(".corporate-grid", {
      scrollTrigger: {
        trigger: ".corporate-grid",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
      },
      opacity: 1,
      ease: "power4.out",
      x: 0,
      duration: 1,
    });

    gsap.set(".social-grid", { x: "-100%", opacity: 0 });
    gsap.to(".social-grid", {
      scrollTrigger: {
        trigger: ".social-grid",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
      },
      opacity: 1,
      ease: "power4.out",
      x: 0,
      duration: 1,
    });

    gsap.set(".line", { opacity: 0 });
    gsap.to(".line", {
      scrollTrigger: {
        trigger: ".line",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
      },
      opacity: 1,
      ease: "power4.out",
      x: 0,
      duration: 0.2,
    });
  }, []);

  return (
    <section
      className="split-section h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/section3.webp')" }} // Updated this path to the correct path of your image
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-8 bg-white bg-opacity-75">
        <div className="corporate-grid flex flex-col justify-between items-center md:items-end text-center md:text-right h-full">
          <div>
            <h2 className="text-4xl font-bold mb-4">C O R P O R A T E</h2>
            <p className="mb-8 text-lg max-w-md">
              We specialize in experiential events that elevate brands into
              popular culture, creating shareworthy and immersive moments.
              Bringing a boutique approach to innovative global brands and
              startups alike, we create experiences that work.
            </p>
          </div>
          <button className="btn-hover-effect bg-black text-white px-12 py-4 rounded-full font-semibold relative overflow-hidden">
            <span className="relative z-10">LEARN MORE</span>
          </button>
        </div>
        <div className="line flex justify-center items-center">
          <svg height="300" width="3" className="hidden md:block">
            <line
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="400"
              style={{ stroke: "black", strokeWidth: 2 }}
            />
          </svg>
        </div>
        <div className="social-grid flex flex-col justify-between items-center md:items-start text-center md:text-left h-full ">
          <div>
            <h2 className="text-4xl font-bold mb-4">S O C I A L</h2>
            <p className="mb-8 text-lg max-w-md">
              We work with some of the best bartenders and creatives in the
              nation, when you need a bartender for your event or company kick
              off, Carousel is your answer. From unique creations to execution,
              we combine seasoned knowledge with inspiration. Don&apos;t settle
              for boring standard eventing.
            </p>
          </div>
          <button className="btn-hover-effect bg-black text-white px-12 py-4 rounded-full font-semibold relative overflow-hidden">
            <span className="relative z-10">LEARN MORE</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
