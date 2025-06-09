import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.webp";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { PiLinktreeLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-3d-orange-primary font-francois-one flex flex-col items-center p-[4%] text-white sm:flex-row">
      <div className="my-2 flex w-full items-center justify-center gap-x-[6%] sm:w-1/2 sm:justify-center">
        <Image
          src={Logo}
          alt="Logo"
          className="aspect-square h-[20vh] w-auto rounded-full border-2 border-white"
        />
        <p className="text-[5vh]">3D Club @UCR</p>
      </div>

      <div className="my-4 h-px w-3/4 border-t-2 border-amber-50 sm:order-none sm:mx-4 sm:my-0 sm:h-24 sm:w-px sm:border-t-0 sm:border-l-2"></div>

      <div className="flex w-full items-center justify-center gap-x-2 sm:w-1/2 md:gap-x-12">
        <Link
          href="https://linktr.ee/3DUCR?utm_source=linktree_profile_share&ltsid=5e067946-122b-4317-903f-4c0d91d545ff"
          className="flex w-16 flex-col items-center sm:w-20"
          target="_blank"
        >
          <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12">
            <PiLinktreeLogoBold className="h-full w-auto text-black" />
          </div>
          <p className="hidden text-xs sm:block sm:text-sm">linktree</p>
        </Link>

        <Link
          href="https://www.instagram.com/3d_at_ucr/"
          className="flex w-16 flex-col items-center sm:w-20"
          target="_blank"
        >
          <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12">
            <FaInstagram className="h-full w-auto text-black" />
          </div>
          <p className="hidden text-xs sm:block sm:text-sm">instagram</p>
        </Link>

        <Link
          href="https://discord.gg/QfB6yVWpSy"
          className="flex w-16 flex-col items-center sm:w-20"
          target="_blank"
        >
          <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12">
            <FaDiscord className="h-full w-auto text-black" />
          </div>
          <p className="hidden text-xs sm:block sm:text-sm">discord</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
