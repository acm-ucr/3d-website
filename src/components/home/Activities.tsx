import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import clayday1 from "@/public/home/activities/clayday_1.png";
import clayday2 from "@/public/home/activities/clayday_2.jpg";
import model1 from "@/public/home/activities/model_1.jpg";
import model2 from "@/public/home/activities/model_2.jpg";
import origami1 from "@/public/home/activities/origami_1.jpg";
import origami2 from "@/public/home/activities/origami_2.jpg";
import shrekiversary1 from "@/public/home/activities/shrekiversary_1.jpg";
import shrekiversary2 from "@/public/home/activities/shrekiversary_2.jpg";

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
    <div className="w-full bg-3d-orange-secondary py-16">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {activityImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video border-8 border-white rounded-sm">
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
    </div>
  );
};

export default Activities;
