import BoxShadow from "@/components/box_shadow";
import Image, { StaticImageData } from "next/image";

interface MemberCardProps {
  name: string;
  title: string;
  image: StaticImageData;
}

const MemberCard = ({ name, title, image }: MemberCardProps) => {
  return (
    <div className="relative mb-14 lg:mb-0">
      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary rounded-sm"
        boxPadding="py-10 sm:py-16 lg:py-24 px-2"
      >
        <div className="h-[25vw] w-[25vw] overflow-hidden rounded-sm border-4 border-white p-2 md:h-[20vw] md:w-[20vw] md:p-4">
          <Image
            src={image}
            alt="Member Image"
            className="h-full w-full rounded-sm object-cover"
          />
        </div>
      </BoxShadow>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary rounded-sm"
          boxPadding="p-1 sm:p-4"
        >
          <div className="text-center text-xs whitespace-nowrap text-black sm:text-xl lg:text-2xl xl:text-4xl">
            <p>
              {name}
              <br />
              {title}
            </p>
          </div>
        </BoxShadow>
      </div>
    </div>
  );
};

export default MemberCard;
