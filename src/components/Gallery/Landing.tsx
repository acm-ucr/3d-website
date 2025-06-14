import Image from "next/image";
import BoxShadow from "../box_shadow";
// object-[center_20%]
const Landing = () => {
  return (
    <div className="relative">
      <Image
        src="/gallery/background.webp"
        alt="Gallery background"
        width={500}
        height={500}
        className="h-auto w-full"
      />

      {/* <div className="absolute flex w-full justify-center pt-12"> */}
      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-5 py-1 sm:px-10 sm:py-3"
        custom_style="absolute top-[10%] w-full justify-center text-xl sm:text-5xl text-white z-50"
      >
        Gallery:
      </BoxShadow>
      {/* </div> */}
    </div>
  );
};

export default Landing;
