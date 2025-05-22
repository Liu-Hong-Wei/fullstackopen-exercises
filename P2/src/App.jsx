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

import { useEffect, useState } from "react";
import Persons from "./b/Persons";
import Filter from "./b/Filter";
import PersonsForm from "./b/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
    }, [])

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
