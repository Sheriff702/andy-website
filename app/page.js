import Footer from "./components/footer";
import CanvasAnimation from "./components/canvasAnimation";
import Hero from "./pages/heropage/page";

export default function Home() {
  return (
    <main className="z-50">
      {/* <CanvasAnimation /> */}
      <Hero />
      <Footer />
    </main>
  );
}
