import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.webp";
import { siDiscord, siInstagram, siLinktree } from "simple-icons";

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
    <div
      className={
        "bg-3d-orange-primary font-francois-one flex flex-col items-center px-6 py-6 text-white sm:flex-row sm:px-8 sm:py-6 md:px-12"
      }
    >
      <div
        className={
          "order-3 my-2 flex w-full items-center justify-center gap-x-4 sm:order-none sm:mt-0 sm:mb-0 sm:w-1/2 sm:justify-start"
        }
      >
        <p
          className={
            "order-1 text-xl sm:order-2 sm:text-2xl md:text-3xl lg:text-4xl"
          }
        >
          3D Club @UCR
        </p>
        <Image
          src={Logo}
          alt={"Logo"}
          className={
            "order-2 h-16 w-16 rounded-full border-2 border-white sm:order-1 md:h-20 md:w-20 lg:h-24 lg:w-24"
          }
        />
      </div>

      <div
        className={
          "order-2 my-4 h-px w-3/4 border-t-2 border-amber-50 sm:order-none sm:mx-4 sm:my-0 sm:h-24 sm:w-px sm:border-t-0 sm:border-l-2"
        }
      ></div>

      <div
        className={
          "order-1 flex w-full items-center justify-center gap-x-2 sm:order-none sm:w-1/2 md:gap-x-12"
        }
      >
        <Link
          href={
            "https://linktr.ee/3DUCR?utm_source=linktree_profile_share&ltsid=5e067946-122b-4317-903f-4c0d91d545ff"
          }
          className={"flex w-16 flex-col items-center sm:w-20"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linktree"
        >
          <div
            className={
              "mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12"
            }
          >
            <div className={"h-full w-full fill-black"}>
              <SimpleIcon path={siLinktree.path} />
            </div>
          </div>
          <p className={"hidden text-xs sm:block sm:text-sm"}>linktree</p>
        </Link>

        <Link
          href={"https://www.instagram.com/3d_at_ucr/"}
          className={"flex w-16 flex-col items-center sm:w-20"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <div
            className={
              "mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12"
            }
          >
            <div className={"h-full w-full fill-black"}>
              <SimpleIcon path={siInstagram.path} />
            </div>
          </div>
          <p className={"hidden text-xs sm:block sm:text-sm"}>instagram</p>
        </Link>

        <Link
          href={"https://discord.gg/QfB6yVWpSy"}
          className={"flex w-16 flex-col items-center sm:w-20"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <div
            className={
              "mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12"
            }
          >
            <div className={"h-full w-full fill-black"}>
              <SimpleIcon path={siDiscord.path} />
            </div>
          </div>
          <p className={"hidden text-xs sm:block sm:text-sm"}>discord</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
