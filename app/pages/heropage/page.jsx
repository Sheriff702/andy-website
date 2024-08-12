import Section52 from "@/app/components/home/section5-2";
import HeroPage from "../../components/home/heroPage";
import Section2 from "../../components/home/section2";
import Section3 from "../../components/home/section3";
import Section4 from "../../components/home/section4";
import Section5 from "../../components/home/section5";
import Section6 from "../../components/home/section6";

const Hero = () => {
  return (
    <main>
      <HeroPage />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section52 />
      <Section5 />

      {/* <Section6 /> */}
    </main>
  );
};

export default Hero;
