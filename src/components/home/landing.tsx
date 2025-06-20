import Image from "next/image";
import HomeImage from "@/public/gallery/Clay2 1.webp";
import BoxShadow from "@/components/box_shadow";

const HomeLanding = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 mt-[2vh] ml-[2%]">
        {" "}
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-8 py-2"
        >
          <p className="text-center text-xs whitespace-nowrap md:text-2xl lg:text-3xl 2xl:text-6xl">
            3D Club @ UCR
          </p>
        </BoxShadow>
      </div>

      <div className="absolute right-0 bottom-1 mr-[4%] mb-[3vh] sm:mr-[2%] md:bottom-2 lg:bottom-4">
        <BoxShadow
          boxColor=" bg-3d-blue-primary "
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-[10%] py-[2%]"
        >
          <p className="text-center text-[9px] md:text-xl lg:text-2xl 2xl:text-5xl">
            Welcome to 3D Club at UCR!
          </p>
        </BoxShadow>
      </div>

      <Image src={HomeImage} alt="3d people home-page" className="w-screen" />
    </div>
  );
};
export default HomeLanding;
