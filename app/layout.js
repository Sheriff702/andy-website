import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carousel Events",
  description: "Coded by @Sheriff702",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
