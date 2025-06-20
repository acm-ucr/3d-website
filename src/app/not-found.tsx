import Link from "next/link";
import BoxShadow from "@/components/box_shadow";

const NotFound = () => {
  return (
    <div className="bg-3d-orange-secondary flex h-screen flex-col items-center justify-center space-y-10">
      <div className="flex justify-center">
        <BoxShadow
          boxShadow="shadow-3d-red-secondary"
          boxPadding="px-[4vw]"
          boxColor="bg-3d-red-primary"
        >
          <div className="text-center text-[8vw] text-amber-50 sm:text-[4vw]">
            <p>404</p>
            <hr className="border-0" />
            <p>Page Not Found</p>
          </div>
        </BoxShadow>
      </div>
      <div className="flex justify-center">
        <BoxShadow
          boxColor="bg-3d-blue-primary"
          boxShadow="shadow-3d-blue-secondary"
          boxPadding="p-[1vh]"
        >
          <Link href="/">
            <p className="text-[3vw] sm:text-[1.25vw]">Back To Home</p>
          </Link>
        </BoxShadow>
      </div>
    </div>
  );
};

export default NotFound;
