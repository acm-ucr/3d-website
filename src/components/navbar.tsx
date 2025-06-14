"use client";

import { tags } from "@/data/navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
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
    <div className="font-francois-one bg-3d-orange-primary relative z-50">
      <nav className="flex flex-row items-center px-[4%] text-xl text-amber-50 md:px-4 md:text-2xl lg:text-4xl">
        <Link
          href="/"
          className="flex w-1/2 items-center justify-start px-2 py-4"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="h-10 w-auto rounded-full border-2 border-amber-50 sm:h-20"
          />
          <p className="px-2 md:px-4 lg:px-6">3D Club</p>
        </Link>

        {/* Mobile menu icon */}
        <div className="ml-auto md:hidden" onClick={toggleMobileMenu}>
          <Menu className="text-white" />
        </div>

        {/* bigger screens - nav items*/}
        <div className="hidden items-center gap-x-4 px-4 sm:w-1/2 sm:justify-end sm:gap-x-[12%] md:flex lg:px-6">
          {tags.map(({ link, name }) => (
            <div key={link}>
              <Link
                href={link}
                className={`${
                  pathname === link
                    ? "underline decoration-[3px] underline-offset-[10px]"
                    : "hover:opacity-90"
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
        <div className="bg-3d-orange-primary absolute top-full right-0 flex w-[22%] flex-col gap-2 py-1 text-center text-white shadow-lg md:hidden">
          {tags.map(({ name, link }) => (
            <Link
              key={link}
              href={link}
              className="text-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {name}
              {name != "GALLERY" && (
                <div className="mt-1 h-0 w-full border-[0.5px] border-amber-50" />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
