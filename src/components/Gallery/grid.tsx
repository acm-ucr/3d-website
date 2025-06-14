"use client";

import GalleryInfo from "@/data/gallery_info";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const FadeIn = {
  initial: { opacity: 0, scale: 0 },
  animate: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.2, delay: custom },
  }),
};

const GalleryGrid = () => {
  const [hoveredImage, setHoveredImage] = useState(-1);
  const [pressedImage, setPressedImage] = useState(-1);

  return (
    <div className="grid grid-cols-5 grid-rows-9 gap-1 p-[1%] md:gap-3">
      {GalleryInfo.map((item, index) => (
        <div
          key={index}
          className={`${index === 3 || index === 4 || index === 5 || index === 8 || index === 9 || index === 13 ? "row-span-2" : "row-span-3"} ${index === 0 || index === 6 || index === 12 ? "col-span-2" : "col-span-1"}`}
        >
          <div
            className="relative"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(-1)}
            onMouseDown={() => setPressedImage(index)}
            onMouseUp={() => setPressedImage(-1)}
            onTouchStart={() => setPressedImage(index)}
            onTouchEnd={() => setPressedImage(-1)}
          >
            <motion.div
              variants={FadeIn}
              viewport={{ once: true, amount: 0 }}
              initial="initial"
              whileInView={"animate"}
              custom={0}
            >
              <Image
                src={item.image}
                alt={item.alt}
                className="active:scale-105 lg:hover:scale-105"
              />
            </motion.div>

            {hoveredImage === index && (
              <div className="absolute right-0 bottom-0 hidden p-1 md:p-3 lg:block">
                <div className="inline text-[8px] text-white md:text-sm lg:text-xl xl:text-2xl">
                  Artist:{" "}
                  {item.artist.split("").map((letter, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -25, scale: 3 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        delay: index * 0.03,
                        duration: 0.3,
                        type: "spring",
                        bounce: 0.55,
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.p>
                  ))}
                </div>
              </div>
            )}

            {pressedImage === index && (
              <div className="absolute right-0 bottom-0 p-1 md:p-3 lg:hidden">
                <p className="text-[8px] text-white md:text-sm lg:text-xl xl:text-2xl">
                  Artist: {item.artist}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
