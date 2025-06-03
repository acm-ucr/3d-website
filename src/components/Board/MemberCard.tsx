import BoxShadow from "@/components/BoxShadow";
import Image, { StaticImageData } from "next/image";

interface MemberCardProps {
  name: string;
  title: string;
  image: StaticImageData;
}

const MemberCard = ({ name, title, image }: MemberCardProps) => {
  return (
    <BoxShadow
      boxColor="bg-3d-red-primary"
      boxShadow="shadow-3d-red-secondary rounded-sm"
      boxPadding=""
    >
      <div className="bg-3d-red-primary relative -bottom-2 flex h-[25vh] w-[35vw] items-center justify-center rounded-lg p-3 md:h-[40vh] md:w-[30vh] lg:-bottom-5 lg:h-[55vh] lg:w-[25vw] lg:p-2">
        <div className="h-[75%] w-full rounded-xs border-4 border-white p-2">
          <div className="h-full w-full items-center justify-center">
            <Image
              src={image}
              alt="Member Image"
              className="h-full w-full object-cover"
            />
          </div>
          <BoxShadow
            boxColor="bg-3d-blue-primary"
            boxShadow="shadow-3d-blue-secondary rounded-sm"
            boxPadding="pr-5 pl-5 py-2 relative -bottom-5 -inset-x-1 md:-bottom-7 md:inset-x-1 lg:-bottom-10 lg:inset-x-8"
          >
            <div className="bg-3d-blue-primary font-francois flex h-[4vh] w-[12vw] flex-col items-center justify-center rounded-lg md:h-[5vh] md:w-[12vw] lg:h-[10vh] lg:w-[15vw]">
              <p className="text-center text-xs whitespace-nowrap text-black md:text-xl lg:text-4xl">
                {name}
              </p>
              <p className="text-center text-xs whitespace-nowrap text-black md:text-xl lg:text-4xl">
                {title}
              </p>
            </div>
          </BoxShadow>
        </div>
      </div>
    </BoxShadow>
  );
};

export default MemberCard;
