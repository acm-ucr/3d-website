import Image from "next/image";
import BoxShadow from "../BoxShadow";
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
        boxPadding="px-10 py-3"
        custom_style="absolute top-[10%] w-full justify-center text-5xl text-white z-50"
      >
        Gallery:
      </BoxShadow>
      {/* </div> */}
    </div>
  );
};

export default Landing;
