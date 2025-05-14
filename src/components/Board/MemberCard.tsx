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
      boxPadding="pr-0.2 pl-0.2 py-0"
    >
      <div className="bg-3d-red-primary relative -bottom-5 flex h-80 w-60 items-center justify-center rounded-lg p-2">
        <div className="h-3/4 w-full rounded-xs border-4 border-white p-2">
          <div className="h-full w-full items-center justify-center border-gray-300 bg-gray-200">
            <Image
              src={image}
              alt="Member Image"
              className="h-full w-full object-cover"
            />
          </div>
          <BoxShadow
            boxColor="bg-3d-blue-primary"
            boxShadow="shadow-3d-blue-secondary rounded-sm"
            boxPadding="pr-5 pl-5 py-2 relative -bottom-10 inset-x-1"
          >
            <div className="bg-3d-blue-primary font-francois items-center justify-center rounded-lg">
              <p className="text-center text-2xl text-black">{name}</p>
              <p className="text-center text-2xl text-black">{title}</p>
            </div>
          </BoxShadow>
        </div>
      </div>
    </BoxShadow>
  );
};

export default MemberCard;
