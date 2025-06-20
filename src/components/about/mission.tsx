import Image from "next/image";
import BoxShadow from "@/components/box_shadow";
import BellTower from "@/public/about/mission.webp";

const Mission = () => {
  return (
    <div className="relative w-full">
      <Image
        src={BellTower}
        alt="Mission background"
        width={500}
        height={500}
        className="w-full"
      />

      <div className="absolute top-[5%] left-[5%] z-10 sm:max-w-none">
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-2 py-1 sm:px-4 sm:py-2"
        >
          <p className="text-xs text-black sm:text-xl md:text-2xl">
            Our Mission:
          </p>
        </BoxShadow>
      </div>

      <div className="absolute right-[5%] bottom-[7%] z-10 w-1/4 text-left sm:max-w-[50%] sm:text-right md:max-w-[45%]">
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-2 py-1 sm:px-4 sm:py-2"
        >
          <p className="text-center text-[8px] text-black sm:text-base md:text-xl">
            We aim to create a supportive environment where students can share
            and get advice on 3D art and projects.
          </p>
        </BoxShadow>
      </div>
    </div>
  );
};

export default Mission;

// for the lowercase change
