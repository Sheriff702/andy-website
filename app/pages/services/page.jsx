import React from "react";
import Image from "next/image";
import Design from "../../../public/images/design.jpg";
import Link from "next/link";

const BartenderServices = () => {
  return (
    <section className="">
      <div className="">
        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-white">
          <div className="relative h-full w-full">
            <Image src={Design} alt="design" layout="fill" objectFit="cover" />
          </div>
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold uppercase font-domine">
                Event Management
              </h1>
              <p className="text-sm lg:text-3xl lg:mx-10">
                <br /> <br />
                Great experiences are what we are all about - bring your event
                to life with immersive guest experiences and truly unique
                moments.
              </p>
              <div className="mt-20">
                <Link
                  href="/pages/event"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 lg:w-14 h-7 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 h-[400px] lg:h-[750px] bg-red-600 text-white">
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold uppercase font-domine">
                Hospitality Design
              </h1>
              <p className="text-sm lg:text-3xl lg:mx-10">
                <br /> <br />A strong drinks strategy elevates your bar program
                into another atmosphere. With the right drink in hand, we tell
                your venues story through well-crafted, truly unique menu
                offerings.
              </p>
              <div className="mt-10">
                <Link
                  href="/pages/hospitality"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 lg:w-14 h-7 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image src={Design} alt="design" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="grid  grid-cols-2 h-[400px] lg:h-[750px] bg-red-200">
          <div className="relative h-full w-full">
            <Image src={Design} alt="design" layout="fill" objectFit="cover" />
          </div>
          <div className="flex items-center justify-center text-center p-4">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold uppercase font-domine">
                Bartender Services
              </h1>
              <p className="text-sm lg:text-3xl lg:mx-10">
                <br /> <br />
                To us, the bar is the heart of the party. With Carousel
                bartenders behind the bar, boost the creativity, atmosphere and
                drinks magic. We create elegant drinks that serve as a focal
                point for your next event.
              </p>
              <div className="mt-5">
                <Link
                  href="/pages/bartender"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 lg:w-14 h-7 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BartenderServices;
