import BoxShadow from "../box_shadow";
import Title from "../title";
import LandingImg from "@/public/about/about_us.webp";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="flex flex-row p-[3%]">
      <div className="mt-[4%] mb-[2%] ml-[4%]">
        <Title textSize="text-5xl" customStyle="ml-[4%]">
          About Us:
        </Title>

        <BoxShadow
          boxColor="bg-3d-red-primary"
          boxShadow="shadow-3d-red-secondary"
          boxPadding="p-[2%]"
          customStyle="mt-[5%] w-3/4"
        >
          <p className="text-4xl leading-snug text-white">
            We are a 3D art organization that aims to explore all types of 3D
            art media from computer software, to Minecraft builds, clay, and
            much more!
          </p>
        </BoxShadow>
      </div>

      <Image src={LandingImg} alt="about_us_image" className="object-none" />
    </div>
  );
};

export default Landing;
