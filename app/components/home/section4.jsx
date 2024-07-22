"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import passion from "../../../public/sec4.jpg";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  useEffect(() => {
    gsap.set(".section4-element", { opacity: 1 });
    gsap.from(".section4-element", {
      scrollTrigger: {
        trigger: ".section4-element",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },
      y: 0,
      opacity: 0,
      rotate: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 text-center">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full section4-element">
            <Image
              alt=""
              src={passion}
              fill
              objectFit="contain"
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <div className="lg:py-24 section4-element">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Your Vision, Our Creation
            </h2>

            <p className="mt-4 text-gray-600">
              Every great event starts with a bold idea. We turn those ideas
              into unforgettable experiences. Whether it’s crafting unique
              menus, designing events of any size, or collaborating across
              industries, we bring creativity and passion to every project.
              Let’s create something extraordinary together.
            </p>
            <Link href="/pages/contact">
              <button className="btn-hover-effect mt-10 bg-black text-white px-12 py-4 rounded-full font-semibold relative overflow-hidden">
                <span className="relative z-10">Contact us Today</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
