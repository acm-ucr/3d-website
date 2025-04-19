import Image from "next/image";

const Mission = () => {
  return (
    <div>

      <Image 
        src="/about/mission.png"
        alt="Mission background"
        width={500}
        height={500}
        className="h-auto w-full"
      />
      
    </div>
  );
};

export default Mission;
