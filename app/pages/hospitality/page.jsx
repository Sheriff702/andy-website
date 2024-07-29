"use client";
import Image from "next/image";

import Design from "../../../public/images/design.jpg";
import EventVideo from "../../../public/videos/designvideo2.mp4";

const Hospitality = () => {
  return (
    <section className="">
      <div className="">
        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-red-200 ">
          <div className="relative h-full w-full">
            <video
              className="absolute  inset-0 w-full h-full object-cover z-102"
              src={EventVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold pl-4 lg:pl-5 uppercase font-domine">
                Hospitality Design
              </h1>
              <p className="text-sm lg:text-3xl lg:font-thin lg:mx-10">
                <br /> <br />A strong drinks strategy elevates your bar program
                into another atmosphere. With the right drink in hand, we tell
                your venues story through well crafted, truly unique menu
                offerings.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-red-300 ">
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold pl-4 lg:pl-5 uppercase font-domine">
                What we do
              </h1>
              <p className="text-[10px] lg:text-3xl lg:mx-10">
                <br /> <br />
                Our team has experience where it counts: behind some of the
                world’s best bars. Our world champion experience in drinks
                creation separates our program and offers you a world class
                offering truly ownable to you and your team. Our head mixologist
                curates menus, training programs and full back of house systems
                to allow your venue to capitalise from opening to close.{" "}
              </p>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image src={Design} alt="design" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-red-400    ">
          <div className="relative h-full w-full">
            <Image src={Design} alt="design" layout="fill" objectFit="cover" />
          </div>
          <div className="flex items-center justify-center text-center p-4">
            <div className="">
              <h1 className="text-xl lg:text-5xl font-bold pl-4 lg:pl-5 uppercase font-domine">
                How can we help
              </h1>

              <ul className="list-disc list-inside text-left text-[13px] lg:text-3xl    mt-4">
                <li>Seasonal menu creation</li>
                <li>Creative drink serves ownable to your venue</li>
                <li>Menu design and implementation</li>
                <li>Full staff training and education </li>
                <li>Sophisticated insight into upcoming trends</li>
                <li>Getting brands on drink menus</li>
                <li>Full back of house training </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hospitality;
