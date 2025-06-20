import Image from "next/image";
import Link from "next/link";
import Forest from "@/public/gallery/forest.webp";
import BoxShadow from "../box_shadow";

const NightForest = () => {
  return (
    <div className="relative w-full">
      <Image src={Forest} alt="Night Forest" className="h-auto w-full" />
      <div className="absolute top-[5%] right-[5%] z-50 flex max-w-[90%] text-center text-white md:top-[8%] md:right-[8%] md:max-w-[50%] lg:top-[10%] lg:right-[10%]">
        <BoxShadow
          boxColor="bg-3d-red-primary"
          boxShadow="shadow-3d-red-secondary"
          boxPadding="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3"
        >
          <p className="text-sm md:text-xl lg:text-3xl">
            Interested in seeing and learning
            <br />
            more about our models?
          </p>
        </BoxShadow>
      </div>
      <div className="absolute bottom-[5%] left-[5%] z-50 underline decoration-white underline-offset-4 md:bottom-[8%] md:left-[6%] lg:bottom-[10%] lg:left-[6%]">
        <BoxShadow
          boxColor="bg-3d-red-primary"
          boxShadow="shadow-3d-red-secondary"
          boxPadding="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-5"
        >
          <Link
            href={
              "https://drive.google.com/drive/u/2/folders/1YnhbogDPEg36UlK4F__IsFTQBbFvrihn"
            }
          >
            <p className="text-sm text-white md:text-xl lg:text-5xl">
              3D Model Tutorials
            </p>
          </Link>
        </BoxShadow>
      </div>
    </div>
  );
};

export default NightForest;
