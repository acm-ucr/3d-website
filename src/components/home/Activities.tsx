import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import clayday1 from "@/public/home/activities/clayday_1.png";
import clayday2 from "@/public/home/activities/clayday_2.jpg";
import model1 from "@/public/home/activities/model_1.jpg";
import model2 from "@/public/home/activities/model_2.jpg";
import origami1 from "@/public/home/activities/origami_1.jpg";
import origami2 from "@/public/home/activities/origami_2.jpg";
import shrekiversary1 from "@/public/home/activities/shrekiversary_1.jpg";
import shrekiversary2 from "@/public/home/activities/shrekiversary_2.jpg";
import BoxShadow from "../BoxShadow";

const Activities = () => {
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
    <div className="bg-3d-orange-secondary w-full pt-16">
      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-8 py-3"
        custom_style="text-5xl text-white ml-12 -translate-y-[15vh] relative"
      >
        Activities:
      </BoxShadow>
      <Carousel className="mx-auto w-full max-w-4xl">
        <CarouselContent>
          {activityImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video rounded-sm border-8 border-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover p-5"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <BoxShadow
        boxColor="bg-3d-red-primary"
        boxShadow="shadow-3d-red-secondary"
        boxPadding="px-10 py-3"
        custom_style="mt-6 justify-center text-5xl text-white pb-12"
      >
        3D Club @ UCR
      </BoxShadow>
    </div>
  );
};

export default Activities;
