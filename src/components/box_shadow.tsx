interface BoxShadowProp {
  boxColor: string;
  boxShadow: string;
  boxPadding: string;
  children: React.ReactNode;
}

const BoxShadow: React.FC<BoxShadowProp> = ({
  boxColor,
  boxShadow,
  boxPadding,
  children,
}) => {
  return (
    <div
      className={`${boxColor} ${boxPadding} ${boxShadow} font-fraunces [text-shadow:_0_6px_3px_rgba(0,0,0,0.2)]`}
    >
      {children}
    </div>
  );
};

export default BoxShadow;
