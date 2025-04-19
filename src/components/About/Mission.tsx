import Image from "next/image";

const Mission = () => {
  return (
    <div>
      <div className="h-96 overflow-hidden flex items-center justify-center">
        <Image 
          src="/about/mission.png"
          alt="Mission background"
          width={500}
          height={500}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default Mission;
