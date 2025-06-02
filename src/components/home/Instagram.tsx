"use client";

import { useEffect } from "react";
import BoxShadow from "@/components/BoxShadow";

const Instagram = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }, 20);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-3d-orange-secondary w-full">
      <div className="mx-auto w-3/4">
        <BoxShadow
          boxColor="bg-3d-red-primary"
          boxShadow="shadow-3d-red-secondary"
          boxPadding="px-8 py-2 md:py-3"
          custom_style="text-2xl md:text-5xl text-white pt-8"
        >
          Recent Posts!
        </BoxShadow>

        <div className="py-10 md:py-20">
          <div data-behold-id={process.env.INSTAGRAM_BEHOLD_ID} />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
