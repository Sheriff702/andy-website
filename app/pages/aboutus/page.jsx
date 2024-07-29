import Image from "next/image";
import ab from "../../../public/images/aboutus1.jpg";
import andy from "../../../public/images/andy.png";

const Aboutus = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            We are Carousel - a boutique events company that is obsessed with
            creating outstanding new cocktails for each specific event. With an
            international flair for hospitality, we are unique in our offering
            and service quality. We combine imagination and experience to
            deliver drinks and service unlike anything our clients have seen or
            tasted before. Seasonality is always front of mind and we have great
            contacts with local producers nationwide to source the freshest
            ingredients available to ensure your event is always on point. Our
            head mixologist is a World Champion Cocktail Bartender with over 17
            years expertise in the hospitality industry - serving and creation
            is at his very core. Our in-house team of designers, events managers
            and creatives are always on-call for every inch of your occasions
            needs - no task is too small or large. We pride ourselves on
            delivering above and beyond for all, because this is our craft and
            passion.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <Image
            className="w-full h-full"
            width={500}
            height={500}
            src={ab}
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Andy Watson
          </h1>
          <h2 className="text-md lg:text-lg font-bold leading-9 text-gray-800 pb-4">
            Founder and Head Mixologist
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Originally from Sydney, Australia, Andy began bartending at 17. Now
            at 35, he boasts 16 national and international cocktail competition
            wins, earning the title of Global Bartender of the Year in 2022 (add
            hyperlink) With a global journey behind him, he has settled in
            Stockholm, crafting unique guest experiences locally and abroad.
            Crafting unique guest experiences for 7 years, his focus lays in
            guest-centricity, shared moments and sustainable practices. Andy
            champions collaboration and forging cross-industry partnerships to
            elevate experiences, all with the pursuit of committed hospitality.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8 ">
          <div className="grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="w-full h-full"
                width={500}
                height={500}
                src={andy}
                alt="A group of People"
              />

              <h2 className="font-medium text-md leading-5 text-gray-800 mt-4">
                ANDREW WATSON-CALDERON
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
