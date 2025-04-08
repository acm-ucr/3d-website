import Image from "next/image";
import BoxShadow from "../BoxShadow";

const GalleryLanding = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="-z-10 absolute inset-0 bg-black/15">
        <Image
          src="/gallery/background.webp"
          alt="Gallery background"
          fill
          className="object-cover object-[center_20%]"
        />
      </div>
      <div className="flex w-full justify-center pt-12">
        <BoxShadow
          boxColor="bg-3d-red-primary"
          boxShadow="shadow-3d-red-secondary"
          boxPadding="px-10 py-3"
        >
          <div className="text-white text-5xl">
            Gallery:
          </div>        
        </BoxShadow>
      </div>
    </div>
  );
};

export default GalleryLanding;
