import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, i) => {
        return <Part part={part} index={i} />;
      })}
    </>
  );
};

export default Content;
