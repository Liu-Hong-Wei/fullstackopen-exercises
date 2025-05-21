import { useState } from "react";

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
        setPersons(persons.concat({ name: newName, number: newNumber }));
        setNewName("");
        setNewNumber("");
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
    )
}

export default PersonsForm