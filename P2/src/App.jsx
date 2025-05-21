// import Course from "./Course";

// const App = () => {
//   const courses = [
//     {
//       name: "Half Stack application development",
//       id: 1,
//       parts: [
//         {
//           name: "Fundamentals of React",
//           exercises: 10,
//           id: 1,
//         },
//         {
//           name: "Using props to pass data",
//           exercises: 7,
//           id: 2,
//         },
//         {
//           name: "State of a component",
//           exercises: 14,
//           id: 3,
//         },
//         {
//           name: "Redux",
//           exercises: 11,
//           id: 4,
//         },
//       ],
//     },
//     {
//       name: "Node.js",
//       id: 2,
//       parts: [
//         {
//           name: "Routing",
//           exercises: 3,
//           id: 1,
//         },
//         {
//           name: "Middlewares",
//           exercises: 7,
//           id: 2,
//         },
//       ],
//     },
//   ];

//   return (
//     <>
//       {courses.map((course) => (
//         <Course key={course.id} course={course} />
//       ))}
//     </>
//   );
// };

import { useState } from "react";
import Persons from "./b/Persons";
import Filter from "./b/Filter";
import PersonsForm from "./b/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>add a new</h3>
      <PersonsForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <br />
      <Persons filter={filter} persons={persons} />
    </div>
  );
};

export default App;
