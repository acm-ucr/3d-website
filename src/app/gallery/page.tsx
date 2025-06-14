import Landing from "@/components/Gallery/Landing";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import NightForest from "@/components/Gallery/NightForest";

const Gallery = () => {
  return (
    <div className="bg-3d-orange-secondary">
      <Landing />
      <GalleryGrid />
      <NightForest />
    </div>
  );
};

export default Gallery;
