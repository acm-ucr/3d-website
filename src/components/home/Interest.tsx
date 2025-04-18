import BoxShadow from "@/components/BoxShadow";
import Image from "next/image";
import Background from "@/public/home/interest.webp";

const Interest = () => (
  <div className="relative w-full">
    <div className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src={Background}
        alt="A meeting of the 3D Club"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>

    <BoxShadow
      boxColor="bg-3d-blue-primary"
      boxShadow="shadow-3d-blue-secondary"
      boxPadding="p-[0.5vw]"
      custom_style="absolute top-[10%] left-1/2 -translate-x-1/2 z-10 flex justify-center whitespace-nowrap text-[3vw]"
    >
      Interested in becoming a member?
    </BoxShadow>

    <BoxShadow
      boxColor="bg-3d-blue-primary"
      boxShadow="shadow-3d-blue-secondary"
      boxPadding="px-[4vw]"
      custom_style="absolute bottom-[5%] right-[5%] z-10 flex justify-center text-[4vw]"
    >
      Join Us!
    </BoxShadow>
  </div>
);

export default Interest;
