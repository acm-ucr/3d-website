import Image from "next/image";
import BoxShadow from "../BoxShadow";

const Mission = () => {
    return (
      <div className="relative w-full">
        <div className="relative w-full aspect-[2.35/1] sm:aspect-[2.35/1] aspect-[1/1.2]">
          <div className="absolute inset-0 flex justify-center overflow-hidden">
            <Image
              src="/about/mission.png"
              alt="Mission background"
              width={500}
              height={500}
              className="h-full w-full object-cover object-[center_45%]"
            />
          </div>
  
          <div className="absolute inset-0 flex flex-col sm:block items-center justify-center sm:justify-start px-4">
            <BoxShadow
              boxColor="bg-3d-blue-primary"
              boxShadow="shadow-3d-blue-secondary"
              boxPadding="px-4 py-2"
              custom_style="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-black z-10 mb-4 sm:mb-0 max-w-[90%] sm:max-w-none sm:absolute sm:top-[5%] sm:left-[5%]"
            >
              Our Mission:
            </BoxShadow>
            <BoxShadow
              boxColor="bg-3d-blue-primary"
              boxShadow="shadow-3d-blue-secondary"
              boxPadding="px-4 py-2"
              custom_style="text-base sm:text-xl md:text-2xl lg:text-3xl text-black text-center z-10 max-w-[90%] sm:max-w-none sm:absolute sm:bottom-[7%] sm:right-[5%]"
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
    );
  };
  
  export default Mission;
  
