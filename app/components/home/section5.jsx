import React from "react";
import Image from "next/image";

import design from "../../../public/images/design.jpg";
import bartender from "../../../public/images/bartender.jpg";
import event from "../../../public/images/event.jpg";
import Link from "next/link";

const Section5 = () => {
  return (
    <section className="min-h-screen items-center lg:px-0 px-5 justify-center bg-peachy pb-10">
      <h1 className="text-4xl font-bold md:text-6xl font-domine  text-center uppercase p-10">
        Our Services
      </h1>
      <div className=" flex items-center text-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="/pages/event">
              <div className="relative h-72 w-full">
                <Image
                  className="rounded-t-lg object-cover object-top"
                  src={event}
                  alt="Service Image"
                  fill
                  priority
                />
              </div>
            </Link>
            <div className="p-10">
              <Link href="/pages/event">
                <h5 className="mb-2 text-2xl font-semibold   tracking-tight text-gray-900 dark:text-white">
                  Event Management
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our event management services elevate your brand into the
                spotlight, creating shareworthy and immersive moments. From
                corporate conferences to grand galas, we ensure every detail is
                meticulously planned and executed to perfection.
              </p>
              <Link
                href="/pages/event"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="/pages/hospitality">
              <div className="relative h-72 w-full">
                <Image
                  className="rounded-t-lg object-cover object-bottom"
                  src={design}
                  alt="Service Image"
                  fill
                  priority
                />
              </div>
            </Link>
            <div className="p-10">
              <Link href="/pages/hospitality">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Hospitality Design
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Transform your spaces with our hospitality design services. We
                bring a boutique approach to creating luxurious, functional, and
                memorable environments. Whether it’s a hotel, restaurant, or
                event venue, we blend innovation with elegance.
              </p>
              <Link
                href="/pages/hospitality"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="/pages/bartender">
              <div className="relative h-72 w-full">
                <Image
                  className="rounded-t-lg object-cover object-bottom"
                  src={bartender}
                  alt="Service Image"
                  fill
                  priority
                />
              </div>
            </Link>
            <div className="p-10">
              <Link href="/pages/bartender">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Mixology/Bartenders
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Experience the art of mixology with our professional bartenders.
                From crafting unique cocktails to delivering top-notch service,
                we elevate your event with a blend of creativity and expertise.
                Perfect for corporate events, weddings, and private parties.
              </p>
              <Link
                href="/pages/bartender"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
