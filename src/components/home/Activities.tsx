"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

import clayday1 from "@/public/home/activities/clayday_1.webp";
import clayday2 from "@/public/home/activities/clayday_2.webp";
import model1 from "@/public/home/activities/model_1.webp";
import model2 from "@/public/home/activities/model_2.webp";
import origami1 from "@/public/home/activities/origami_1.webp";
import origami2 from "@/public/home/activities/origami_2.webp";
import shrekiversary1 from "@/public/home/activities/shrekiversary_1.webp";
import shrekiversary2 from "@/public/home/activities/shrekiversary_2.webp";

import BoxShadow from "../BoxShadow";

const Activities = () => {
  const [index, setIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const activityImages = [
    { src: clayday1, alt: "Clay Day" },
    { src: clayday2, alt: "Clay Day" },
    { src: model1, alt: "Model Tutorial" },
    { src: model2, alt: "Model Tutorial" },
    { src: origami1, alt: "Origami Night" },
    { src: origami2, alt: "Origami Night" },
    { src: shrekiversary1, alt: "Shrekiversary" },
    { src: shrekiversary2, alt: "Shrekiversary" },
  ];

  return (
    <div className="bg-3d-orange-secondary w-full">
      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-8 py-2 md:py-3"
        custom_style="text-2xl md:text-5xl text-white ml-6 md:ml-12 md:-translate-y-[6vh] pt-4 relative"
      >
        Activities:
      </BoxShadow>
      <Carousel className="relative mt-6 md:mt-0" setApi={setApi}>
        <div className="mx-auto w-full max-w-4xl">
          <CarouselContent>
            {activityImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative mx-auto aspect-video max-w-[70vw] rounded-sm border-4 border-white md:border-8">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover p-2 md:p-4"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className="bg-3d-red-primary hover:bg-3d-red-primary/90 absolute top-1/2 left-0 size-12 -translate-y-1/2 rounded-sm border-0 text-white shadow-xl hover:text-white md:size-20" />
        <CarouselNext className="bg-3d-red-primary hover:bg-3d-red-primary/90 absolute top-1/2 right-0 size-12 -translate-y-1/2 rounded-sm border-0 text-white shadow-xl hover:text-white md:size-20" />
      </Carousel>

      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-16 py-3"
        custom_style="mt-6 justify-center text-3xl md:text-5xl text-white pb-8 md:pb-12"
      >
        {activityImages[index].alt}
      </BoxShadow>
    </div>
  );
};

export default Activities;
