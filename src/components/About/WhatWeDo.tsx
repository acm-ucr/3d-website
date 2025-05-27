"use client";

import Image from "next/image";
import CraftPicture from "@/public/about/CraftPicture.webp";
import BoxShadow from "../BoxShadow";
import Title from "../title";
import { motion } from "motion/react";

const BounceIn = {
  initial: { opacity: 0, y: -50 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.65, delay: custom },
  }),
};

const FadeIn = {
  initial: { opacity: 0, x: -50, y: -50 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const WhatWeDo = () => {
  return (
    <div className="bg-3d-orange-secondary relative overflow-hidden py-3 md:py-10">
      <motion.div
        variants={BounceIn}
        viewport={{ once: true, amount: 0 }}
        initial="initial"
        whileInView={"animate"}
        custom={0.2}
        className="md:flex md:justify-center"
      >
        <Title textSize="text-xl relative left-[10%] md:text-5xl xl:text-6xl">
          What We Do:
        </Title>
      </motion.div>
      <div className="flex flex-col items-center justify-center md:block md:py-10">
        <div className="relative md:absolute md:top-[18%] md:left-[40%] xl:left-[45%]">
          <motion.div
            variants={FadeIn}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.2}
          >
            <BoxShadow
              boxColor="bg-3d-red-primary"
              boxShadow="shadow-3d-red-secondary"
              boxPadding="px-2 py-1 md:px-3 lg:px-5 md:py-3"
              custom_style="text-[8px] md:text-sm lg:text-xl xl:text-2xl mt-5 md:mt-10 lg:mt-5 xl:mt-10 md:ml-10 text-white z-50 w-full"
            >
              Weekly meetings:
              <ul className="block list-disc pl-4 md:hidden">
                <li>
                  We hang out, talk about art, and teach beginner-
                  <br />
                  level modeling skills in Blender software.
                  <br />
                </li>
              </ul>
              <ul className="hidden list-disc md:block md:pl-6 lg:pl-9">
                <li>
                  We hang out, talk about art, and teach <br />
                  beginner-level modeling skills in Blender <br />
                  software.
                </li>
              </ul>
            </BoxShadow>
          </motion.div>

          <motion.div
            variants={FadeIn}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.3}
          >
            <BoxShadow
              boxColor="bg-3d-red-primary"
              boxShadow="shadow-3d-red-secondary"
              boxPadding="px-2 py-1 md:px-3 lg:px-5 md:py-3"
              custom_style="ml-10 text-[8px] md:text-sm lg:text-xl xl:text-2xl mt-5 xl:mt-10 md:ml-20 lg:ml-10 xl:ml-30 text-white z-50 w-full"
            >
              Collaborations:
              <ul className="block list-disc pl-4 md:hidden">
                <li>
                  We collaborate with other art clubs on craft days that
                  represent our <br />
                  respective interests.
                </li>
              </ul>
              <ul className="hidden list-disc md:block md:pl-6 lg:pl-9">
                <li>
                  We collaborate with other art clubs on craft days <br />
                  that represent our respective interests.
                </li>
              </ul>
            </BoxShadow>
          </motion.div>

          <motion.div
            variants={FadeIn}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.4}
          >
            <BoxShadow
              boxColor="bg-3d-red-primary"
              boxShadow="shadow-3d-red-secondary"
              boxPadding="px-2 py-1 md:px-3 lg:px-5 md:py-3"
              custom_style="text-[8px] md:text-sm lg:text-xl xl:text-2xl mt-5 xl:mt-10 md:ml-10 text-white z-50 w-full"
            >
              Past Collaborations:
              <ul className="block list-disc pl-4 md:pl-6 xl:hidden">
                <li>Clay Day with Starving Artists</li>
                <li>Shrek Anniversary with Starving Artists</li>
                <li>
                  Origami Night with Art History Undergraduate <br />
                  Association
                </li>
              </ul>
              <ul className="hidden list-disc pl-9 xl:block">
                <li>Clay Day with Starving Artists</li>
                <li>Shrek Anniversary with Starving Artists</li>
                <li>
                  Origami Night with Art History Undergraduate Association
                </li>
              </ul>
            </BoxShadow>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={CraftPicture}
            alt="People doing crafts"
            className="relative w-2/5 pt-5 md:mt-0 md:ml-5 xl:ml-15"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
