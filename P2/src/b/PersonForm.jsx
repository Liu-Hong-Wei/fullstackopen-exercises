import { useState } from "react";
import notesService from "./../d/services/notes";

const PersonsForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const personExists = persons.find((person) => person.name === newName) 
    let isConfirmed = false;
    if (personExists) {
        isConfirmed = confirm("name already exists, replace with new number?")
    }
    if (personExists && isConfirmed) {
      const updatedPerson = {
        ...personExists,
        number: newNumber,
      };
      notesService.update(personExists.id, updatedPerson).then((response) => {
        console.log(
          "updated person number while the person already exists",
          response
        );
        setPersons(
          persons.map((person) =>
            person.id !== personExists.id ? person : updatedPerson
          )
        );
        setNewName("");
        setNewNumber("");
      });
    } 

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    if (!personExists) {
      notesService.create(newPerson).then((response) => {
        console.log(response);
        console.log("newPerson", newPerson, "is added");
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonsForm;
