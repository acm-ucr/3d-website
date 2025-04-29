import Image from "next/image";
import BoxShadow from "../BoxShadow";

const Mission = () => {
  return (
    <div className="relative">
      <div className="relative aspect-[2.35/1] w-full">
        <div className="absolute inset-0 flex justify-center overflow-hidden">
          <Image
            src="/about/mission.webp"
            alt="Mission background"
            width={500}
            height={500}
            className="h-full w-full object-cover object-[center_45%]"
          />
        </div>
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-5 py-2"
          custom_style="absolute top-[5%] left-[5%] text-5xl text-black z-10"
        >
          Our Mission:
        </BoxShadow>
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="px-5 py-2"
          custom_style="absolute bottom-[7%] right-[5%] text-3xl text-black text-center"
        >
          We aim to create a <br />
          supportive environment <br />
          where students can share <br />
          and get advice on 3D art <br />
          and projects.
        </BoxShadow>
      </div>
    </div>
  );
};

export default Mission;
