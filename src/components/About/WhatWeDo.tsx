import Image from "next/image";
import CraftPicture from "@/public/about/CraftPicture.webp";
import BoxShadow from "../BoxShadow";
import Title from "../title";

const WhatWeDo = () => {
  return (
    <div className="bg-3d-orange-secondary relative py-10">
      <div className="flex justify-center">
        <Title>What We Do:</Title>
      </div>
      <div className="py-10">
        <Image
          src={CraftPicture}
          alt="People doing crafts"
          className="ml-15 w-2/5"
        />
        <div className="absolute top-[18%] left-[45%]">
          <BoxShadow
            boxColor="bg-3d-red-primary"
            boxShadow="shadow-3d-red-secondary"
            boxPadding="px-5 py-3"
            custom_style="mt-10 ml-10 text-2xl text-white z-50"
          >
            Weekly meetings:
            <ul className="list-disc pl-9">
              <li>
                We hang out, talk about art, and teach <br />
                beginner-level modeling skills in Blender <br />
                software.
              </li>
            </ul>
          </BoxShadow>

          <BoxShadow
            boxColor="bg-3d-red-primary"
            boxShadow="shadow-3d-red-secondary"
            boxPadding="px-5 py-3"
            custom_style="mt-10 ml-30 text-2xl text-white z-50"
          >
            Collaborations:
            <ul className="list-disc pl-9">
              <li>
                We collaborate with other art clubs on craft days <br />
                that represent our respective interests.
              </li>
            </ul>
          </BoxShadow>

          <BoxShadow
            boxColor="bg-3d-red-primary"
            boxShadow="shadow-3d-red-secondary"
            boxPadding="px-5 py-3"
            custom_style="mt-10 ml-10 text-2xl text-white z-50"
          >
            Past Collaborations:
            <ul className="list-disc pl-9">
              <li>Clay Day with Starving Artists</li>
              <li>Shrek Anniversary with Starving Artists</li>
              <li>Origami Night with Art History Undergraduate Association</li>
            </ul>
          </BoxShadow>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
