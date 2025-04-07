import Image from "next/image";

const GalleryLanding = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src="/gallery/background.webp"
        alt="Gallery background"
        fill
        className="-z-10 object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="flex w-full justify-center pt-8">
        <div className="flex h-32 w-64 items-center justify-center bg-[var(--color-3d-red-primary)] text-white">
          Gallery (Placeholder)
        </div>
      </div>
    </div>
  );
};

export default GalleryLanding;
