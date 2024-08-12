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
    <section className="split-section h-[100dvh ] flex items-center justify-center bg-center bg-peachy  lg:bg-no-repeat lg:bg-cover lg:bg-[url('/images/ssec33.png')]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5  md:m-20 md:p-20 rounded-lg">
        <div className="corporate-grid flex flex-col justify-center items-center md:items-end text-center  md:text-right">
          <div className="text-center lg:mt-20 max-w-xs md:max-w-md">
            <h2 className="text-4xl font-domine mb-4">C O R P O R A T E</h2>
            <p className="mb-8 text-lg px-6 text-gray-600 ">
              We specialize in experiential events that elevate brands into
              popular culture, creating shareworthy and immersive moments.
              Bringing a boutique approach to innovative global brands and
              startups alike, we create experiences that work.
            </p>
            {/* <button className="btn-hover-effect bg-black text-white px-6 py-3 rounded-full font-semibold relative overflow-hidden">
              <span className="relative z-10">LEARN MORE</span>
            </button> */}
          </div>
        </div>
        <div className="line flex justify-center items-center">
          <svg height="300" width="300" className="hidden md:block">
            <line
              x1="0"
              y1="500"
              x2="200"
              y2="0"
              style={{ stroke: "black", strokeWidth: 2 }}
            />
          </svg>
        </div>
        <div className="social-grid flex flex-col justify-center pt-5 items-center pb-5 px-10 lg:px-0  bg-peachy lg:bg-transparent md:items-start text-center md:text-left ">
          <div className="text-center max-w-xs md:max-w-md lg:mt-20">
            <h2 className="text-4xl font-domine mb-4">S O C I A L</h2>
            <p className="mb-8 text-lg text-gray-600 ">
              We work with some of the best bartenders and creatives in the
              nation, when you need a bartender for your event or company kick
              off, Carousel is your answer. From unique creations to execution,
              we combine seasoned knowledge with inspiration. Don&apos;t settle
              for boring standard eventing.
            </p>
            {/* <button className="btn-hover-effect bg-black text-white px-6 py-3 rounded-full font-semibold relative overflow-hidden">
              <span className="relative z-10">LEARN MORE</span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
