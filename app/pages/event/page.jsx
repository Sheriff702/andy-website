"use client";
import Image from "next/image";
import Event from "../../../public/images/event.jpg";
import EventVideo from "../../../public/videos/event.mp4";
import EventVideo2 from "../../../public/videos/eventvideo2.mp4";

const EventManagement = () => {
  return (
    <section className="z-100">
      <div className="">
        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-red-700 text-white z-100  ">
          <div className="relative h-full w-full">
            <video
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={EventVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-2xl lg:text-5xl font-bold uppercase font-domine">
                Event Management
              </h1>
              <p className="text-sm lg:text-2xl lg:mx-10">
                <br /> <br />
                Great experiences are what we are all about - bring your event
                to life with an immersive guest experiences and truly unique
                moments.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-blue-700 text-white ">
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold uppercase font-domine">
                What we do:
              </h1>
              <p className="text-[10px] lg:text-3xl lg:mx-10">
                <br /> <br />
                We take the story of your brand and transform it into a
                memorable experience with unique serves at the core of event.
                Our in-house team of creatives, event managers and designers
                collaborate with your team to create on point messaging from
                start to finish. Together, we collaborate with our head
                mixologist and team of drinks specialists to craft consumer
                experiences that are one of a kind and commercial. <br /> <br />{" "}
                We ensure that a lasting brand message is made at the crucial
                point: with drinks in hands.
              </p>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image src={Event} alt="design" fill="true" cover="true" />
          </div>
        </section>

        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-white ">
          <div className="relative h-full w-full">
            <video
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={EventVideo2}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="flex items-center justify-center ml-4  text-left ">
            <div className="">
              <h1 className="text-xl lg:text-5xl font-bold pl-4 lg:pl-5 uppercase font-domine">
                How can we help
              </h1>

              <ul className="list-disc list-inside text-left text-[13px] lg:text-3xl    mt-4">
                <li>Event concept design</li>
                <li>Drinks creation</li>
                <li>Premium staffing</li>
                <li>Event logistics </li>
                <li>Product sourcing</li>
                <li>Unique brand messaging</li>
                <li>Menu design and printing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EventManagement;
