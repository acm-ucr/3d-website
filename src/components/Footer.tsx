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
        "bg-3d-orange-primary font-francois-one flex flex-col items-center px-6 py-4 text-amber-50 sm:flex-row sm:px-8 sm:py-6 md:px-12" // Changed to flex-col default, row on sm+, adjusted padding
      }
    >
      <div
        className={
          "flex w-full items-center justify-center gap-x-4 sm:w-1/2 sm:justify-start"
        }
      >
        {" "}
        <Image
          src={Logo}
          alt={"Logo"}
          className={
            "h-16 w-16 rounded-full border-2 border-amber-50 md:h-20 md:w-20 lg:h-24 lg:w-24"
          }
        />
        <p className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl"}>
          {" "}
          3D Club @UCR
        </p>
      </div>

      <div
        className={
          "my-4 h-px w-3/4 border-t border-amber-50 sm:mx-4 sm:my-0 sm:h-24 sm:w-px sm:border-t-0 sm:border-l"
        }
      ></div>

      <div
        className={
          "flex w-full items-center justify-center gap-x-8 sm:w-1/2 md:gap-x-12"
        }
      >
        {" "}
        <Link
          href={
            "https://linktr.ee/3DUCR?utm_source=linktree_profile_share&ltsid=5e067946-122b-4317-903f-4c0d91d545ff"
          }
          className={"flex w-16 flex-col items-center sm:w-20"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={
              "mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12"
            }
            aria-hidden="true"
          >
            <div
              className={
                "h-full w-full [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-black"
              }
              dangerouslySetInnerHTML={{ __html: svgLinktree }}
            />
          </div>
          <p className={"text-xs sm:text-sm"}>linktree</p>{" "}
        </Link>
        <Link
          href={"https://www.instagram.com/3d_at_ucr/"}
          className={"flex w-16 flex-col items-center sm:w-20"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={
              "mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12"
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
          <p className={"text-xs sm:text-sm"}>instagram</p>{" "}
          {/* Responsive text size */}
        </Link>
        {/* Discord */}
        <Link
          href={"https://discord.gg/QfB6yVWpSy"}
          className={"flex w-16 flex-col items-center sm:w-20"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={
              "mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 p-2 sm:h-12 sm:w-12"
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
          <p className={"text-xs sm:text-sm"}>discord</p>{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
