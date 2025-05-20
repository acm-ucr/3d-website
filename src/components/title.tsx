interface TitleProp {
  textSize: string;
  children: React.ReactNode;
}
const Title: React.FC<TitleProp> = ({ textSize, children }) => {
  return (
    <div>
      <p
        className={`${textSize} text-white underline [text-shadow:_0_6px_3px_rgba(0,0,0,0.1)]`}
      >
        {children}
      </p>
    </div>
  );
};
export default Title;
