"use client";
import React, { useEffect, useRef } from "react";
import video from "../../../public/videos/vidmix.mp4";
import { gsap } from "gsap";

const HeroPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.78; // Set the playback rate for slower playback
      videoRef.current.muted = true; // Ensure the video is muted for autoplay
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    }
  }, []);

  useEffect(() => {
    // Animate elements with the class 'hero-text' to slide in from the left
    gsap.set(".hero-text", { x: -500, opacity: 0 });
    gsap.to(".hero-text", {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
      x: 0,
      stagger: 0.2,
    });

    // Animate elements with the class 'hero-image' to slide in from the right
    gsap.set(".hero-image", { x: 500, opacity: 0 });
    gsap.to(".hero-image", {
      duration: 2.5,
      opacity: 1,
      ease: "power4.out",
      x: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="relative h-[90vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="relative w-full h-full order-first md:order-last">
        <video
          className="hero-image absolute inset-0 w-full h-full object-cover z-0"
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* <Image
          className="hero-image absolute inset-0 w-full h-full object-cover z-0"
          src={bar}
          fill
          alt="Background Image"
          priority
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:hidden">
          <div className="hero-text-container font-domine text-center text-white p-4">
            <h1 className=" hero-text text-2xl md:text-5xl font-bold">
              EVENT MANAGEMENT,
            </h1>
            <h1 className="hero-text text-2xl md:text-5xl font-bold">
              HOSPITALITY DESIGN <span className="text-green-400"> + </span>
            </h1>
            <h1 className="hero-text text-2xl md:text-5xl font-bold">
              BARTENDER SERVICES
            </h1>
          </div>
        </div>
      </div>
      <div className="hero-text-container hidden md:flex items-center justify-center bg-white bg-opacity-70 rounded-sm">
        <div className="space-y-10 text-center font-domine md:text-left p-4">
          <h1 className="hero-text text-2xl md:text-5xl font-bold text-gray-800">
            EVENT MANAGEMENT,
          </h1>
          <h1 className="hero-text text-2xl md:text-5xl font-bold">
            HOSPITALITY DESIGN <span className="text-green-400"> + </span>
          </h1>
          <h1 className="hero-text text-2xl md:text-5xl font-bold">
            BARTENDER SERVICES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
