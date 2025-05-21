import Part from "./Part";

const Content = ({ course }) => {
  const parts = course.parts;
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <h2>
        total of {parts.reduce((acc, cur) => acc + cur.exercises, 0)}{" "}
        exercises
      </h2>
    </>
  );
};

export default Content;
