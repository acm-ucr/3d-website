import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="font-francois-one bg-3d-orange-primary flex flex-row items-center p-5 text-4xl text-amber-50">
      <div className="flex w-1/2 items-center justify-start">
        <Image
          src={"/Logo.png"}
          alt={"Logo"}
          width={70}
          height={70}
          className="m-1 rounded-full border-2 border-amber-50"
        ></Image>
        <Link href="/home">3D Club</Link>
      </div>
      <div className="flex w-1/2 justify-evenly">
        <Link href="/about" className="">
          ABOUT
        </Link>
        <Link href="/board" className="">
          BOARD
        </Link>
        <Link href="/gallery" className="">
          GALLERY
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
