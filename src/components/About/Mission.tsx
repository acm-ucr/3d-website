import Image from "next/image";
import BoxShadow from "../BoxShadow";

const Mission = () => {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[1/1.2] aspect-[2.35/1] w-full sm:aspect-[2.35/1]">
        <div className="absolute inset-0 flex justify-center overflow-hidden">
          <Image
            src="/about/mission.png"
            alt="Mission background"
            width={500}
            height={500}
            className="h-full w-full object-cover object-[center_45%]"
          />
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[5%] left-[5%] z-10 max-w-[80%] sm:max-w-none">
            <BoxShadow
              boxColor="bg-3d-blue-primary"
              boxShadow="shadow-3d-blue-secondary"
              boxPadding="px-2 py-1 sm:px-4 sm:py-2"
              custom_style="text-xs sm:text-xl md:text-2xl text-black"
            >
              Our Mission:
            </BoxShadow>
          </div>

          <div className="absolute right-[5%] bottom-[7%] z-10 max-w-[60%] text-left sm:max-w-[50%] sm:text-right md:max-w-[45%]">
            <BoxShadow
              boxColor="bg-3d-blue-primary"
              boxShadow="shadow-3d-blue-secondary"
              boxPadding="px-2 py-1 sm:px-4 sm:py-2"
              custom_style="text-xs sm:text-base md:text-xl text-black"
            >
              We aim to create a <br />
              supportive environment <br />
              where students can share <br />
              and get advice on 3D art <br />
              and projects.
            </BoxShadow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
