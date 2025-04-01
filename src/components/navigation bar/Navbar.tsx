import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="font-francois-one p-5 bg-3d-orange-primary items-center text-amber-50 text-4xl flex flex-row">
      <div className="flex justify-start items-center w-1/2">
        <Image src={"/Logo.png"} alt={"Logo"} width={70} height={70} className="m-1 border-amber-50 border-2 rounded-full"></Image>
        <Link href="/home">3D Club</Link>
      </div>
      <div className="flex justify-evenly w-1/2">
        <Link href="/about" className="">ABOUT</Link>
        <Link href="/board" className="">BOARD</Link>
        <Link href="/gallery" className="">GALLERY</Link>
      </div>
    </nav>
  );
};

export default Navbar;