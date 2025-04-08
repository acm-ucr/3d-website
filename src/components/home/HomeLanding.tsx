// import Image from "next/image";
// import HomeLanding from "@/public/gallery/Clay2 1.svg";

const HomeLanding = () => {
  return (
    <div className="flex">
      <div className="bg-3d-orange-primary relative h-screen w-1/2">
        <div className="absolute top-1/4 left-45 w-1/2 bg-white py-20 text-center text-6xl">
          {" "}
          3D Club @ UCR
        </div>
      </div>

      <div className="bg-3d-orange-primary relative h-screen w-1/2">
        <div className="absolute bottom-30 left-3 w-3/4 bg-white px-4 py-20 text-center text-6xl">
          Welcome to 3D Club at UCR!
        </div>
      </div>
    </div>
  );
};
export default HomeLanding;
