"use client";

import { tags } from "@/data/navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
// import WebMarker from "@/public/WebMarker.svg";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative z-50">
      <nav className="font-francois-one bg-3d-orange-primary py-1/2 flex flex-row items-center px-2 text-xs text-amber-50 md:px-4 md:text-2xl lg:text-4xl">
        <div className="flex w-1/2 items-center justify-start">
          <Image
            src={Logo}
            alt="Logo"
            width={70}
            height={70}
            className="text-md m-1 h-10 w-10 rounded-full border-2 border-amber-50 md:h-1/6 md:w-1/6"
          ></Image>
          <Link href="/" className="px-2 md:px-4 lg:px-6">
            3D Club
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="ml-auto md:hidden" onClick={toggleMobileMenu}>
          <Menu className="text-white" />
        </div>

        {/* bigger screens - nav items*/}
        <div className="hidden items-center gap-x-4 px-4 sm:w-1/2 sm:justify-end md:flex lg:gap-x-12 lg:px-6">
          {tags.map(({ link, name }) => (
            <div key={link}>
              <Link
                href={link}
                className={`${
                  pathname === link
                    ? "underline decoration-[6px] underline-offset-[10px]"
                    : "hover:text-white"
                }`}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </nav>

      {/*dropdown part*/}
      {isMobileMenuOpen && (
        <div className="bg-3d-orange-primary font-francois-one absolute top-full right-0 flex w-[22%] flex-col gap-2 px-2 text-center text-white shadow-lg md:hidden">
          {tags.map(({ name, link }) => (
            <Link
              key={link}
              href={link}
              className="text-xs hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              {name.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
