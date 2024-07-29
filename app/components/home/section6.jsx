"use client";
import { useEffect } from "react";
import Script from "next/script";

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//iframely.net/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="iframely-embed">
      <div
        className="iframely-responsive"
        style={{ height: "140px", paddingBottom: "0" }}
      >
        <a
          href="https://www.instagram.com/carousel_cocktail/"
          data-iframely-url="//iframely.net/khMO8Sm"
        ></a>
      </div>
    </div>
  );
};

export default InstagramEmbed;
