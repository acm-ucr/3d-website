interface TitleProp {
  textSize: string;
  customStyle?: string;
  children: React.ReactNode;
}
const Title: React.FC<TitleProp> = ({ textSize, customStyle, children }) => {
  return (
    <p
      className={`${customStyle} ${textSize} text-white underline [text-shadow:_0_6px_3px_rgba(0,0,0,0.1)]`}
    >
      {children}
    </p>
  );
};
export default Title;
