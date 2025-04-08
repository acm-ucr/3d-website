import BoxShadow from "@/components/BoxShadow";

const MemberCard = () => {
  return (
    <BoxShadow
      boxColor="bg-3d-red-primary"
      boxShadow="shadow-3d-red-secondary rounded-sm"
      boxPadding="pr-0.2 pl-0.2 py-0"
    >
      <div className="bg-3d-red-primary flex h-80 w-60 items-center justify-center rounded-lg p-2.5">
        <div className="h-50 w-full rounded-xs border-4 border-white p-2">
          <div className="flex h-full w-full items-center justify-center border-gray-300 bg-gray-200">
            {/*replace with image*/}
            {/*blue component placeholder*/}
          </div>
        </div>
      </div>
    </BoxShadow>
  );
};

export default MemberCard;
