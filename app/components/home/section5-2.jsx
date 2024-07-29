"use client";
import Image from "next/image";
import { getQliroLogoUrl } from "../../utils/qlirologo";
import AWT from "../../../public/images/awt.jpeg";
import Iba from "../../../public/images/iba.png";
import TikTok from "../../../public/images/tiktok.svg";
import Campari from "../../../public/images/campari.svg";
import FM from "../../../public/images/fm.svg";
import London from "../../../public/images/london.jpg";
import SBG from "../../../public/images/sbg.png";
import Rojo from "../../../public/images/rojo.png";
import Jimsher from "../../../public/images/jimsher.png";

const Section52 = () => {
  const mintLogoUrl = getQliroLogoUrl("se", "sv", "text", "mint");

  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className=" mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Qliro"
            src={mintLogoUrl}
            width={200}
            height={200}
            className="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="London Essence"
            src={London}
            width={200}
            height={200}
            className="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="AWT"
            src={AWT}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="IBA"
            src={Iba}
            width={158}
            height={158}
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="TikTok"
            src={TikTok}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            alt="Campari"
            src={Campari}
            width={158}
            height={48}
            className="col-span-2  w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            alt="fornudden mansion"
            src={FM}
            width={158}
            height={48}
            className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            alt="SBR"
            src={SBG}
            width={158}
            height={48}
            className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <Image
            alt="rojo"
            src={Rojo}
            width={158}
            height={48}
            className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <Image
            alt="Jimsher"
            src={Jimsher}
            width={158}
            height={48}
            className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Section52;
