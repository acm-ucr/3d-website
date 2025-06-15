import Link from "next/link";
import BoxShadow from "@/components/box_shadow";

const NotFound = () => {
  return (
    <div className="bg-3d-orange-secondary flex h-screen flex-col items-center justify-center space-y-10">
      <BoxShadow
        textSize="text-[8vw] sm:text-[4vw] text-amber-50"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-[4vw]"
        boxColor="bg-3d-red-primary"
        custom_style="flex justify-center text-center"
      >
        404
        <hr className="border-0" />
        Page Not Found
      </BoxShadow>
      <BoxShadow
        boxColor="bg-3d-blue-primary"
        boxShadow="shadow-3d-blue-secondary"
        boxPadding="p-[1vh]"
        textSize="text-[3vw] sm:text-[1.25vw]"
        custom_style="flex justify-center"
      >
        <Link href="/">Back To Home</Link>
      </BoxShadow>
    </div>
  );
};

export default NotFound;
