import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.webp";
import Discord from "@/public/discord.webp";
import Instagram from "@/public/instagram.webp";
import Linktree from "@/public/linktree.webp";

const Footer = () => {
  return (
    <footer className="bg-3d-orange-primary font-francois-one flex flex-row items-center p-10 text-amber-50">
      <div className={"flex w-1/2 items-center"}>
        <Image
          src={Logo}
          alt={"Logo"}
          className={"rounded-full border-3 border-amber-50"}
        />
        <p className={"px-4 text-4xl"}>3D Club @UCR</p>
      </div>
      <div className={"mx-4 h-20 border-2 border-amber-50"}></div>
      <div className={"flex w-1/2 items-center justify-center space-x-4"}>
        <Link
          href={
            "https://linktr.ee/3DUCR?utm_source=linktree_profile_share&ltsid=5e067946-122b-4317-903f-4c0d91d545ff"
          }
          className={"flex flex-col items-center"}
        >
          <div className={"h-10 w-10 rounded-full bg-amber-50 p-2"}>
            <Image
              src={Linktree}
              alt={"Linktree"}
              className={"object-contain"}
            />
          </div>
          <p>linktree</p>
        </Link>
        <Link
          href={"https://www.instagram.com/3d_at_ucr/"}
          className={"flex flex-col items-center"}
        >
          <div className={"h-10 w-10 rounded-full bg-amber-50 p-2"}>
            <Image
              src={Instagram}
              alt={"Instagram"}
              className={"object-contain"}
            />
          </div>
          <p>instagram</p>
        </Link>
        <Link
          href={"https://discord.gg/QfB6yVWpSy"}
          className={"flex flex-col items-center"}
        >
          <div className={"h-10 w-10 rounded-full bg-amber-50 p-2"}>
            <Image src={Discord} alt={"Discord"} className={"object-contain"} />
          </div>
          <p>discord</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
