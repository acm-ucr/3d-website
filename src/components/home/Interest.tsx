import BoxShadow from "@/components/BoxShadow";
import Image from "next/image";
import Background from "@/public/home/interest.webp";

const Interest = () => (
  <div className="relative w-full">
    <div className="relative h-[60vh] w-full overflow-hidden sm:h-[80vh]">
      <Image
        src={Background}
        alt="A meeting of the 3D Club"
        fill
        sizes="(max-width: 640px) 100vw, 100vw"
        priority
        className="object-cover object-center"
      />
    </div>

    <BoxShadow
      boxColor="bg-3d-blue-primary"
      boxShadow="shadow-3d-blue-secondary"
      boxPadding="px-4 py-2 sm:p-[0.5vw]"
      custom_style="absolute top-8 sm:top-[10%] left-1/2 -translate-x-1/2
                    z-10 flex justify-center whitespace-nowrap
                    text-[clamp(1rem,5vw,2rem)]"
    >
      Interested in becoming a member?
    </BoxShadow>

    <BoxShadow
      boxColor="bg-3d-blue-primary"
      boxShadow="shadow-3d-blue-secondary"
      boxPadding="px-6 py-3 sm:px-[4vw]"
      custom_style="absolute bottom-8 sm:bottom-[5%] right-1/2 sm:right-[5%]
                    translate-x-1/2 sm:translate-x-0
                    z-10 flex justify-center
                    text-[clamp(1.25rem,6vw,2.5rem)]"
    >
      Join&nbsp;Us!
    </BoxShadow>
  </div>
);

export default Interest;
