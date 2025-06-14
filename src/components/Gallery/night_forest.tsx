import Image from "next/image";
import Link from "next/link";
import Forest from "@/public/gallery/forest.webp";
import BoxShadow from "../box_shadow";

const NightForest = () => {
  return (
    <div className="relative w-full">
      <Image src={Forest} alt="Night Forest" className="h-auto w-full" />

      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3"
        custom_style="absolute top-[5%] right-[5%] md:top-[8%] md:right-[8%] lg:top-[10%] lg:right-[10%] text-sm md:text-xl lg:text-3xl text-center text-white z-50  max-w-[90%] md:max-w-[50%]"
      >
        <p>Interested in seeing and learning</p>
        <p>more about our models?</p>
      </BoxShadow>

      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-5"
        custom_style="absolute bottom-[5%] left-[5%] md:bottom-[8%] md:left-[6%] lg:bottom-[10%] lg:left-[6%] text-sm md:text-xl lg:text-5xl text-white z-50 underline underline-offset-4"
      >
        <Link
          href={
            "https://drive.google.com/drive/u/2/folders/1YnhbogDPEg36UlK4F__IsFTQBbFvrihn"
          }
        >
          3D Model Tutorials
        </Link>
      </BoxShadow>
    </div>
  );
};

export default NightForest;
