import Image from "next/image";

const Mission = () => {
  return (
    <div>
      <div className="relative aspect-[2.35/1] w-full">
        <div className="absolute inset-0 flex justify-center overflow-hidden">
          <Image
            src="/about/mission.png"
            alt="Mission background"
            width={500}
            height={500}
            className="h-full w-full object-cover object-[center_45%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
