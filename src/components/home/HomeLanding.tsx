import Image from "next/image";
import HomeImage from "@/public/gallery/Clay2 1.webp";
import BoxShadow from "@/components/BoxShadow";

const HomeLanding = () => {
  return (
    <div className="relative flex h-[60vh] sm:h-screen">
      <BoxShadow
        boxColor="bg-3d-blue-primary"
        boxShadow="shadow-3d-blue-secondary"
        boxPadding="px-[8%] py-[4%]"
        custom_style="absolute text-xl sm:text-5xl text-center top-[8%] sm:top-[10%] left-[6%]"
      >
        3D Club @ UCR
      </BoxShadow>

      <BoxShadow
        boxColor="bg-3d-blue-primary "
        boxShadow="shadow-3d-blue-secondary"
        boxPadding="px-[8%] py-[4%]"
        custom_style="absolute text-lg sm:text-3xl text-center bottom-[10%] right-[6%]"
      >
        Welcome to 3D Club at UCR!
      </BoxShadow>

      <Image
        src={HomeImage}
        alt="3d people home-page"
        className="h-[60vh] object-cover object-center sm:h-full sm:w-full"
      />
    </div>
  );
};
export default HomeLanding;
