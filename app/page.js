import Navbar from "./components/navbar";

import HeroPage from "./components/heroPage";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroPage />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
