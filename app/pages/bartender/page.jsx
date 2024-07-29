"use client";
import { useEffect, useRef } from "react";
import Bartender from "../../../public/videos/bartender.mp4";
import Image from "next/image";
import Design from "../../../public/images/design.jpg";

const BartenderServices = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.78;
      videoRef.current.muted = true; // Ensure the video is muted for autoplay
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    }
  }, []);

  return (
    <section className="">
      <div className="">
        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-white">
          <div className="relative h-full w-full">
            <video
              ref={videoRef}
              className="absolute  inset-0 w-full h-full object-cover z-0"
              src={Bartender}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-2xl lg:text-5xl font-bold uppercase font-domine">
                Bartender Services
              </h1>
              <p className="text-sm lg:text-3xl lg:mx-10">
                <br /> <br />
                To us, the bar is the heart of the party. With Carousel
                bartenders behind the bar, boost the creativity, atmosphere and
                drinks magic. We create elegant drinks that serve as a focal
                point for your next event.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-red-300 ">
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold uppercase font-domine">
                What we do:
              </h1>
              <p className="text-[10px] lg:text-3xl lg:mx-10">
                <br /> <br />
                We believe that what you serve your guests matters, it is the
                call back to a great event, so we go above and beyond to deliver
                incredible drinks that stand out. Each menu we create is a
                unique design for you and your guests only. Drinks that will
                never be repeated, ensuring you always get one of a kind moments
                to remember. Our bartenders are energetic, guest centric and
                always willing to push that extra mile for you to make sure your
                special moment is the highest quality from start to finish.
              </p>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={Design}
              alt="design"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </section>

        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-white     ">
          <div className="relative h-full w-full">
            <Image
              src={Design}
              alt="design"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="flex items-center justify-center text-center p-4">
            <div className="">
              <h1 className="text-xl lg:text-5xl font-bold pl-4 lg:pl-5 uppercase font-domine">
                How can we help
              </h1>

              <ul className="list-disc list-inside text-left text-[10px] lg:text-3xl    mt-4">
                <li>
                  World class bartenders, trained and specialised to delivery
                  outstanding service
                </li>
                <li>Creative cocktails</li>
                <li>Beverage ordering and curation</li>
                <li>Glassware and custom ice orders</li>
                <li>Design set up</li>
                <li>Custom designed bars and spaces when required</li>
                <li>Menu prints</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BartenderServices;
