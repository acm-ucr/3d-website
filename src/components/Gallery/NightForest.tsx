import Image from "next/image";
import Link from "next/link";
import Forest from "@/public/gallery/forest.webp";
import BoxShadow from "../BoxShadow";

const NightForest = () => {
  return (
    <div className="relative">
      <Image src={Forest} alt="Night Forest" className="h-auto w-full" />

      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-8 py-3"
        custom_style="absolute top-[10%] left-[42%] text-5xl text-white z-50"
      >
        Interested in seeing and learning <br />
        more about our models?
      </BoxShadow>

      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-6 py-5"
        custom_style="absolute bottom-[10%] left-[6%] text-5xl text-white z-50 underline underline-offset-4"
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
