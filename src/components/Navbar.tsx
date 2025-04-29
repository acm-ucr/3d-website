"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import WebMarker from "@/public/WebMarker.svg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="font-francois-one bg-3d-orange-primary flex flex-row items-center px-5 py-2 text-4xl text-amber-50">
      <div className="flex w-1/2 items-center justify-start">
        <Image
          src={Logo}
          alt="Logo"
          width={70}
          height={70}
          className="m-1 rounded-full border-2 border-amber-50"
        ></Image>
        <Link href="/" className="px-5">
          3D Club
        </Link>
      </div>
      <div className="flex w-1/2 justify-end">
        <Link href="/about" className="px-10">
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
        <Link href="/board" className="px-10">
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
        <Link href="/gallery" className="px-10">
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
