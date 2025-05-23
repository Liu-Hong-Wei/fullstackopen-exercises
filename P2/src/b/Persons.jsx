import notesService from "./../d/services/notes";

const Persons = ({ persons, setPersons, filter }) => {
  const numbersToShow = ((fil) => {
    console.log("filter is", fil);
    if (!fil) return persons;

    return persons.filter((person) => {
      if (!person) return false;
      const nameMatch =
        person.name && person.name.toLowerCase().includes(fil.toLowerCase());
      const numberMatch = person.number && person.number.includes(fil);
      return nameMatch || numberMatch;
    });
  })(filter);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      notesService
        .remove(id)
        .then((res) => {
          console.log("Person with id", id, "is deleted, res: ", res);
          setPersons((prevPersons) => prevPersons.filter((person) => person.id !== id));
        })
        .catch((err) => {
          console.log("Error deleting person with id", id, ":", err);
          alert("Error deleting person.");
        });
    }
  };
  return (
    <>
      {numbersToShow &&
        numbersToShow.map(
          (
            person // Add check for persons array
          ) => (
            <p key={person.id}>
              {person.name} {person.number}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </p>
          )
        )}
    </>
  );
};

export default Persons;
