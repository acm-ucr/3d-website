import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.webp";
import { siDiscord, siInstagram, siLinktree } from "simple-icons/icons";

const SimpleIcon = ({
  path,
  className = "",
}: {
  path: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d={path} />
  </svg>
);

const Footer = () => {
  return (
    <div className="bg-3d-orange-primary font-francois-one flex flex-row items-center px-[3vw] py-[3vh] text-white">
      <div className={"justify-left flex w-1/2 items-center gap-x-[1vw]"}>
        <Image
          src={Logo}
          alt={"Logo"}
          className={"h-1/6 w-1/6 rounded-full border-[0.25vw] border-white"}
        />
        <p className={"text-[2.5vw]"}>3D Club @UCR</p>
      </div>
      <div className={"mx-[0.8vw] h-[10vh] border-[0.1vw] border-white"}></div>
      <div className={"flex w-1/2 items-center justify-center gap-x-[3vw]"}>
        <Link
          href={
            "https://linktr.ee/3DUCR?utm_source=linktree_profile_share&ltsid=5e067946-122b-4317-903f-4c0d91d545ff"
          }
          className={"flex w-[7.5%] flex-col items-center"}
        >
          <div
            className={
              "flex items-center justify-center rounded-full bg-white p-[10%]"
            }
          >
            <div className={"h-full w-full fill-black"}>
              <SimpleIcon path={siLinktree.path} />
            </div>
          </div>
          <p className={"text-[1vw]"}>linktree</p>
        </Link>

        <Link
          href={"https://www.instagram.com/3d_at_ucr/"}
          className={"flex w-[7.5%] flex-col items-center"}
        >
          <div
            className={
              "flex items-center justify-center rounded-full bg-white p-[10%]"
            }
          >
            <div className={"h-full w-full fill-black"}>
              <SimpleIcon path={siInstagram.path} />
            </div>
          </div>
          <p className={"text-[1vw]"}>instagram</p>
        </Link>

        <Link
          href={"https://discord.gg/QfB6yVWpSy"}
          className={"flex w-[7.5%] flex-col items-center"}
        >
          <div
            className={
              "flex items-center justify-center rounded-full bg-white p-[10%]"
            }
          >
            <div className={"h-full w-full fill-black"}>
              <SimpleIcon path={siDiscord.path} />
            </div>
          </div>
          <p className={"text-[1vw]"}>discord</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
