import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.webp";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { PiLinktreeLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-3d-orange-primary font-francois-one flex flex-col-reverse items-center px-[4%] py-[8%] text-white lg:flex-row xl:py-[4%]">
      <div className="flex w-full flex-row-reverse items-center justify-center gap-x-[4%] sm:justify-center md:w-1/2 lg:flex-row">
        <Image
          src={Logo}
          alt="Logo"
          className="aspect-square h-[10vh] w-auto rounded-full border-2 border-white xl:h-[12vh]"
        />
        <p className="text-[3vh] text-nowrap xl:text-[5vh]">3D Club @ UCR</p>
      </div>

      <div className="my-[5%] h-px w-3/4 border-t-2 border-amber-50 lg:mx-4 lg:my-0 lg:h-24 lg:w-px lg:border-t-0 lg:border-l-2"></div>

      <div className="flex w-full items-center justify-center sm:w-1/2 sm:gap-x-[4%]">
        <Link
          href="https://linktr.ee/3DUCR?utm_source=linktree_profile_share&ltsid=5e067946-122b-4317-903f-4c0d91d545ff"
          className="flex w-16 flex-col items-center sm:w-20"
          target="_blank"
        >
          <div className="mb-1 flex aspect-square h-[6vh] w-auto items-center justify-center rounded-full bg-amber-50 p-2">
            <PiLinktreeLogoBold className="h-full w-auto text-black" />
          </div>
          <p className="text-md hidden sm:text-lg lg:block">linktree</p>
        </Link>

        <Link
          href="https://www.instagram.com/3d_at_ucr/"
          className="flex w-16 flex-col items-center sm:w-20"
          target="_blank"
        >
          <div className="mb-1 flex aspect-square h-[6vh] w-auto items-center justify-center rounded-full bg-amber-50 p-2">
            <FaInstagram className="h-full w-auto text-black" />
          </div>
          <p className="text-md hidden sm:text-lg lg:block">instagram</p>
        </Link>

        <Link
          href="https://discord.gg/QfB6yVWpSy"
          className="flex w-16 flex-col items-center sm:w-20"
          target="_blank"
        >
          <div className="mb-1 flex aspect-square h-[6vh] w-auto items-center justify-center rounded-full bg-amber-50 p-2">
            <FaDiscord className="h-full w-auto text-black" />
          </div>
          <p className="text-md hidden sm:text-lg lg:block">discord</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
