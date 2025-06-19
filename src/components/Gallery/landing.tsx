import Image from "next/image";
import BoxShadow from "../box_shadow";
import GalleryLandingImg from "@/public/gallery/background.webp";

const Landing = () => {
  return (
    <div className="relative">
      <Image
        src={GalleryLandingImg}
        alt="Gallery background"
        width={500}
        height={500}
        className="h-auto w-full"
      />

      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-5 py-1 sm:px-10 sm:py-3"
        custom_style="absolute top-[10%] w-full justify-center text-xl sm:text-5xl text-white z-50"
      >
        Gallery:
      </BoxShadow>
    </div>
  );
};

export default Landing;
