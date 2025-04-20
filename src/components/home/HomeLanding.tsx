import Image from "next/image";
import HomeImage from "@/public/gallery/Clay2 1.webp";
import BoxShadow from "@/components/BoxShadow";

const HomeLanding = () => {
  return (
    <div className="relative flex h-screen">
      <div className="absolute top-0 left-0 flex h-screen w-1/2 items-start justify-start">
        <div className="w-full px-[12%] py-[7.5%] text-center text-8xl">
          {" "}
          <BoxShadow
            boxColor=" bg-3d-blue-primary "
            boxShadow="shadow-3d-blue-secondary"
            boxPadding="pr-[10%] pl-[10%] py-15"
          >
            3D Club @ UCR
          </BoxShadow>
        </div>
      </div>

      <div className="absolute right-0 bottom-5 flex h-screen w-1/2 items-end">
        <div className="w-full py-[7.5%] pl-[25%] text-center text-7xl text-black">
          <BoxShadow
            boxColor=" bg-3d-blue-primary "
            boxShadow="shadow-3d-blue-secondary"
            boxPadding="pr-[10%] pl-[10%] py-15"
          >
            Welcome to 3D Club at UCR!
          </BoxShadow>
        </div>
      </div>

      <Image
        src={HomeImage}
        alt="3d people home-page"
        className="h-screen w-full object-cover"
      />
    </div>
  );
};
export default HomeLanding;
