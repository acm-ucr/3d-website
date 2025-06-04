"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import WebMarker from "@/public/WebMarker.svg";

const Navbar = () => {
  const pathname = usePathname();

  return (
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
      <div className="flex w-1/2 justify-end">
        <Link href="/about" className="px-2 md:px-6">
          <div className="flex flex-col items-center">
            {pathname === "/about" && (
              <Image
                src={WebMarker}
                alt="WebMarker"
                className={"absolute mt-10 w-4"}
              />
            )}
            ABOUT
          </div>
        </Link>
        <Link href="/board" className="px-2 md:px-6">
          <div className="flex flex-col items-center">
            {pathname === "/board" && (
              <Image
                src={WebMarker}
                alt="WebMarker"
                className={"absolute mt-10 w-4"}
              />
            )}
            BOARD
          </div>
        </Link>
        <Link href="/gallery" className="px-2 lg:px-8">
          <div className="flex flex-col items-center">
            {pathname === "/gallery" && (
              <Image
                src={WebMarker}
                alt="WebMarker"
                className={"absolute mt-10 w-4"}
              />
            )}
            GALLERY
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
