const Persons = ({ persons, filter }) => {

  const numbersToShow = (filter) => {
    const t = persons.filter((person) =>
      (person && person.name && person.name.toLowerCase().includes(filter)) || (person && person.number && person.number.includes(filter))
    )
    return filter ? t : persons;
  };
    return (
        <>
            {numbersToShow(filter).map((person) => ( // Add check for persons array
                <p key={person.name}>
                    {person.name} {person.number}
                </p>))}
        </>
    )
}

export default Persons