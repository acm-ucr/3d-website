import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.webp";
import { siDiscord, siInstagram, siLinktree } from "simple-icons/icons";

const Footer = () => {
  const svgDiscord = siDiscord.svg;
  const svgInstagram = siInstagram.svg;
  const svgLinktree = siLinktree.svg;

  return (
    <footer
      className={
        "bg-3d-orange-primary font-francois-one flex flex-row items-center px-[3vw] py-[3vh] text-amber-50"
      }
    >
      <div className={"justify-left flex w-1/2 items-center gap-x-[1vw]"}>
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
      <div className={"flex w-1/2 items-center justify-center gap-x-[3vw]"}>
        <Link
          href={
            "https://linktr.ee/3DUCR?utm_source=linktree_profile_share&ltsid=5e067946-122b-4317-903f-4c0d91d545ff"
          }
          className={"flex w-[7.5%] flex-col items-center"}
        >
          <div
            className={
              "flex items-center justify-center rounded-full bg-amber-50 p-[10%]"
            }
            aria-hidden="true"
          >
            <div
              className={
                "h-full w-full [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-black"
              } // Ensure SVG fills div and set fill color if needed
              dangerouslySetInnerHTML={{ __html: svgLinktree }}
            />
          </div>
          <p className={"text-[1vw]"}>linktree</p>
        </Link>
        <Link
          href={"https://www.instagram.com/3d_at_ucr/"}
          className={"flex w-[7.5%] flex-col items-center"}
        >
          <div
            className={
              "flex items-center justify-center rounded-full bg-amber-50 p-[10%]"
            }
            aria-hidden="true"
          >
            <div
              className={
                "h-full w-full [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-black"
              }
              dangerouslySetInnerHTML={{ __html: svgInstagram }}
            />
          </div>
          <p className={"text-[1vw]"}>instagram</p>
        </Link>
        <Link
          href={"https://discord.gg/QfB6yVWpSy"}
          className={"flex w-[7.5%] flex-col items-center"}
        >
          <div
            className={
              "flex items-center justify-center rounded-full bg-amber-50 p-[10%]"
            }
            aria-hidden="true"
          >
            <div
              className={
                "h-full w-full [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-black"
              }
              dangerouslySetInnerHTML={{ __html: svgDiscord }}
            />
          </div>
          <p className={"text-[1vw]"}>discord</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
