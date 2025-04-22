import BoxShadow from "@/components/BoxShadow";

const MemberCard = () => {
  return (
    <BoxShadow
      boxColor="bg-3d-red-primary"
      boxShadow="shadow-3d-red-secondary rounded-sm"
      boxPadding="pr-0.2 pl-0.2 py-0"
    >
      <div className="bg-3d-red-primary relative -bottom-5 flex h-80 w-60 items-center justify-center rounded-lg p-2.5">
        <div className="h-3/4 w-full rounded-xs border-4 border-white p-2">
          <div className="h-full w-full items-center justify-center border-gray-300 bg-gray-200">
            {/* Placeholder for image */}
          </div>
          <BoxShadow
            boxColor="bg-3d-blue-primary"
            boxShadow="shadow-3d-blue-secondary rounded-sm"
            boxPadding="pr-5 pl-5 py-2 relative -bottom-15 inset-x-1.5"
          >
            <div className="bg-3d-blue-primary font-francois items-center justify-center rounded-lg">
              <p className="text-center text-2xl text-black">Timothy Lee</p>
              <p className="text-center text-2xl text-black">President</p>
            </div>
          </BoxShadow>
        </div>
      </div>
    </BoxShadow>
  );
};

export default MemberCard;
