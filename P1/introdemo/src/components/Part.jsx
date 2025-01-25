const Part = ({ part, index }) => {
  return (
    <p key={index}>
      {part.name} {part.exercises}
    </p>
  );
};

export default Part;
