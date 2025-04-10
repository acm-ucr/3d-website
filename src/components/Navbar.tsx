import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.webp";

const Navbar = () => {
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
        <Link href="/home" className="px-5">
          3D Club
        </Link>
      </div>
      <div className="flex w-1/2 justify-end">
        <Link href="/about" className="px-10">
          ABOUT
        </Link>
        <Link href="/board" className="px-10">
          BOARD
        </Link>
        <Link href="/gallery" className="px-10">
          GALLERY
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
