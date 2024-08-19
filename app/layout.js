import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "./_components/Footer";

const leagueSpartan = League_Spartan({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Arch Studio",
  description:
    "Arch Studio is a website for an industrial company portifolio. an advanced challenge by Front End Mentor ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className}`}>
        <Navbar />
        <main className="md:max-w-[573px] xl:max-w-[1110px] m-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
