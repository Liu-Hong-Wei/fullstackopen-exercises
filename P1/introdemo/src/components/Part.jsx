const Part = ({ part, index }) => {
  return (
    <p key={index}>
      {part[0]} {part[1]}
    </p>
  );
};

export default Part;
