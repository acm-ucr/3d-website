import React from "react";

interface BoxShadowProp {
  textSize?: string;
  boxColor: string;
  boxShadow: string;
  boxPadding: string;
  children: React.ReactNode;
}

const BoxShadow: React.FC<BoxShadowProp> = ({
  textSize,
  boxColor,
  boxShadow,
  boxPadding,
  children,
}) => {
  return (
    <div className="">
      <div className={`${boxColor} ${boxPadding} ${boxShadow}`}>
        <div
          className={`${textSize} font-fraunces [text-shadow:_0_6px_3px_rgba(0,0,0,0.2)]`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default BoxShadow;
