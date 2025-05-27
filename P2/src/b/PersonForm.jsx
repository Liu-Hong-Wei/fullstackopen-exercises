import { useState } from "react";
import notesService from "./../d/services/notes";
import Notification from "../e/Notification";

const PersonsForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState(null);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
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
            person.id !== personExists.id ? person : response
          )
        );
        setNewName("");
        setNewNumber("");
      });
    } 

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (!personExists) {
      notesService.create(newPerson).then((response) => {
        console.log(response);
        console.log("newPerson", newPerson, "is added");
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
      });
    }
    setMessage(`Added ${newName}`)
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  };

  return (
    <>
    <Notification message={message} type="done"/>
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
  </>
  );
};

export default PersonsForm;
