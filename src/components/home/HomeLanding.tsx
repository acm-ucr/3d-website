import Image from "next/image";
import HomeImage from "@/public/gallery/Clay2 1.webp";
import BoxShadow from "@/components/BoxShadow";

const HomeLanding = () => {
  return (
    <div className="relative flex h-[50%] w-full">
      <div className="absolute top-0 left-0 flex h-screen w-1/2 items-start justify-start">
        <div className="w-full px-[8%] py-[6%] text-center text-sm md:px-[10%] md:py-[5%] md:text-xl 2xl:text-6xl">
          {" "}
          <BoxShadow
            boxColor="bg-3d-blue-primary"
            boxShadow="shadow-3d-blue-secondary"
            boxPadding="px-[4%] py-[2%] md:px-[8%] md:py-[4%]"
          >
            3D Club @ UCR
          </BoxShadow>
        </div>
      </div>

      <div className="absolute right-0 bottom-5 flex h-screen w-1/2 items-end">
        <div className="w-full py-[2%] pl-[15%] text-center text-[9px] text-black md:py-[7.5%] md:pl-[15%] md:text-xl 2xl:text-5xl">
          <BoxShadow
            boxColor=" bg-3d-blue-primary "
            boxShadow="shadow-3d-blue-secondary"
            boxPadding="px-[6%] py-[2%] md:px-[6%] md:py-[4%]"
          >
            Welcome to 3D Club at UCR!
          </BoxShadow>
        </div>
      </div>

      <Image
        src={HomeImage}
        alt="3d people home-page"
        className="w-screen bg-cover bg-center"
      />
    </div>
  );
};
export default HomeLanding;
