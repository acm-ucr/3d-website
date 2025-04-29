interface TitleProp {
  children: React.ReactNode;
}
const Title: React.FC<TitleProp> = ({ children }) => {
  return (
    <div>
      <p className="text-6xl text-white underline">{children}</p>
    </div>
  );
};
export default Title;
