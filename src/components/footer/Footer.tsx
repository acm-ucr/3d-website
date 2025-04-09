import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.webp";
import Discord from "@/public/discord.svg";
import Instagram from "@/public/instagram.svg";
import Linktree from "@/public/linktree.svg";

const Footer = () => {
  return (
    <footer
      className={
        "bg-3d-orange-primary font-francois-one flex flex-row items-center px-[3vw] py-[3vh] text-amber-50"
      }
    >
      <div className={"flex w-1/2 items-center justify-around"}>
        <Image
          src={Logo}
          alt={"Logo"}
          className={"h-1/6 w-1/6 rounded-full border-[0.25vw] border-amber-50"}
        />
        <p className={"text-[2.5vw]"}>3D Club @UCR</p>
      </div>
      <div
        className={"mx-[0.8vw] h-[10vh] border-[0.1vw] border-amber-50"}
      ></div>
      <div className={"flex w-1/2 items-center justify-around"}>
        <Link
          href={
            "https://linktr.ee/3DUCR?utm_source=linktree_profile_share&ltsid=5e067946-122b-4317-903f-4c0d91d545ff"
          }
          className={"flex flex-col items-center"}
        >
          <div
            className={
              "flex h-1/3 w-1/3 items-center justify-center rounded-full bg-amber-50 p-[5%]"
            }
          >
            <Image
              src={Linktree}
              alt={"Linktree"}
              className={"h-full w-full"}
            />
          </div>
          <p className={"text-[1vw]"}>linktree</p>
        </Link>
        <Link
          href={"https://www.instagram.com/3d_at_ucr/"}
          className={"flex flex-col items-center"}
        >
          <div
            className={
              "flex h-1/3 w-1/3 items-center justify-center rounded-full bg-amber-50 p-[5%]"
            }
          >
            <Image
              src={Instagram}
              alt={"Instagram"}
              className={"h-full w-full"}
            />
          </div>
          <p className={"text-[1vw]"}>instagram</p>
        </Link>
        <Link
          href={"https://discord.gg/QfB6yVWpSy"}
          className={"flex flex-col items-center"}
        >
          <div
            className={
              "flex h-1/3 w-1/3 items-center justify-center rounded-full bg-amber-50 p-[5%]"
            }
          >
            <Image src={Discord} alt={"Discord"} className={"h-full w-full"} />
          </div>
          <p className={"text-[1vw]"}>discord</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
