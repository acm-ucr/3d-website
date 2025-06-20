import Image from "next/image";
import BoxShadow from "@/components/box_shadow";
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
      <div className="absolute top-[10%] flex w-full justify-center">
        <BoxShadow
          boxColor="bg-3d-red-primary"
          boxShadow="shadow-3d-red-secondary"
          boxPadding="px-5 py-1 sm:px-10 sm:py-3"
        >
          <p className="text-xl text-white sm:text-5xl">Gallery:</p>
        </BoxShadow>
      </div>
    </div>
  );
};

export default Landing;
