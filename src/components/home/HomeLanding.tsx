import Image from "next/image";
import HomeImage from "@/public/gallery/Clay2 1.webp";
import BoxShadow from "@/components/BoxShadow";

const HomeLanding = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 mt-[2vh] ml-[2%] w-1/2 text-center text-xs md:text-2xl lg:text-3xl 2xl:text-6xl">
        {" "}
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-[4%] py-[2%] md:px-[8%]"
        >
          3D Club @ UCR
        </BoxShadow>
      </div>

      <div className="absolute right-0 bottom-1 mr-[4%] mb-[3vh] text-center text-[9px] sm:mr-[2%] md:bottom-2 md:text-xl lg:bottom-4 lg:text-2xl 2xl:text-5xl">
        <BoxShadow
          boxColor=" bg-3d-blue-primary "
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-[10%] py-[2%]"
        >
          Welcome to 3D Club at UCR!
        </BoxShadow>
      </div>

      <Image src={HomeImage} alt="3d people home-page" className="w-screen" />
    </div>
  );
};
export default HomeLanding;
