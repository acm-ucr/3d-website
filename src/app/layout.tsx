import "./globals.css";
import { Francois_One, Fraunces } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const francois_one = Francois_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-francois-one",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "3D at UCR",
  description:
    "We're a 3D art organization that explores all types of media—from computer software and Minecraft builds to clay and more!",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.className} ${francois_one.variable} bg-3d-orange-secondary`}
      >
        <ReactQueryClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
