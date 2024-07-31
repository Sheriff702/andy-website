"use client";
import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Passion from "../../../public/images/passion.jpg";
import Listen from "../../../public/images/listen.jpg";
import Deal from "../../../public/videos/deal.mp4";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  useEffect(() => {
    gsap.set(".section4-element", { opacity: 0 });
    gsap.to(".section4-element", {
      scrollTrigger: {
        trigger: ".section4-element",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 3,
        toggleActions: "restart pause reverse pause",
      },
      y: 0,
      opacity: 1,
      rotate: 0,
      stagger: 1,
      duration: 2.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="overflow-hidden pt-8  bg-white dark:bg-dark bg-cover   lg:bg-[url('/images/sec44.png')]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:px-5  ">
        <div className="lg:order-last section4-element bg-white lg:bg-transparent px-5">
          <div className="grid grid-cols-2 lg:flex flex-col-reverse   gap-4">
            <div className="relative h-full lg:pb-96 w-full">
              <video
                className="absolute inset-0 w-full h-[300px] lg:h-[350px] object-cover rounded-2xl z-0"
                src={Deal}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                priority
                src={Listen}
                alt="Image 3"
                className="w-full h-[300px] lg:h-[350px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="section4-element lg:pl-40  pt-5    lg:py-24 text-center lg:text-left bg-gradient-to-r from-peachy to-white  lg:bg-none ml-0 lg:ml-20">
          <h2 className="font-domine text-3xl md:text-4xl lg:text-5xl">
            Your Vision, Our Creation
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl pr-0  lg:pr-24">
            Every great event starts with a bold idea. We turn those ideas into
            unforgettable experiences. Whether it’s crafting unique menus,
            designing events of any size, or collaborating across industries, we
            bring creativity and passion to every project. Let’s create
            something extraordinary together.
          </p>
          <Link href="/pages/contact">
            <button className="btn-hover-effect mt-10 bg-black text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold relative overflow-hidden">
              <span className="relative z-10 font-poppins">
                Contact us Today
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section4;
