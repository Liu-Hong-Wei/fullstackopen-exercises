const Filter = ({ filter, setFilter}) => {
    const handleFilterChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setFilter(event.target.value);
    };

    return (
        <div>
            filter shown with <input value={filter} onChange={handleFilterChange} />
        </div>
    );
};

export default Filter;