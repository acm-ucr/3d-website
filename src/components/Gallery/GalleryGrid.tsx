import Image from "next/image";
import { images } from "@/data/galleryGrid";

const GalleryGrid = () => {
  const boxStyle =
    "border-2 rounded-xl p-2 flex flex-col items-center justify-center";

  return (
    <div className="my-10 grid auto-rows-[300px] gap-4 md:grid-cols-4">
      {images.map((item, i) => (
        <div
          key={i}
          className={`${boxStyle} ${
            i === 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
          } ${i === 2 ? "md:row-span-2" : ""}`}
        >
          <Image src={item.img} alt={item.title}></Image>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
