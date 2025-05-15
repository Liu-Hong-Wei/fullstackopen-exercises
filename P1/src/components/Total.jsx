const Total = ({ exercises }) => {
  return (
    <>
      <p>
        Number of exercises {exercises.reduce((last, cur) => last + cur, 0)}
      </p>
    </>
  );
};

export default Total;
