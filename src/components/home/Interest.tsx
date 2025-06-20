import BoxShadow from "@/components/box_shadow";
import Image from "next/image";
import Background from "@/public/home/interest.webp";

const Interest = () => (
  <div className="relative w-full">
    <div className="relative h-[60vh] w-full overflow-hidden sm:h-[80vh]">
      <Image
        src={Background}
        alt="A meeting of the 3D Club"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
    <div className="absolute top-8 left-1/2 z-10 flex -translate-x-1/2 justify-center whitespace-nowrap sm:top-[10%]">
      <BoxShadow
        boxColor="bg-3d-blue-primary"
        boxShadow="shadow-3d-blue-secondary"
        boxPadding="px-4 py-2 sm:p-[0.5vw]"
      >
        <p className="text-xl sm:text-4xl">
          Interested&nbsp;in&nbsp;becoming&nbsp;a&nbsp;member?
        </p>
      </BoxShadow>
    </div>
    <div className="absolute right-1/2 bottom-8 z-10 flex translate-x-1/2 justify-center sm:right-[5%] sm:bottom-[5%] sm:translate-x-0">
      <BoxShadow
        boxColor="bg-3d-blue-primary"
        boxShadow="shadow-3d-blue-secondary"
        boxPadding="px-6 py-3 sm:px-[4vw]"
      >
        <p className="text-2xl sm:text-5xl">Join&nbsp;Us!</p>
      </BoxShadow>
    </div>
  </div>
);

export default Interest;

// for the lowercase change
