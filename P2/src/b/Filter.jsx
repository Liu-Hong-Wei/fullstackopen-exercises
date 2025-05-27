// Debounce function to limit the rate of filter updates
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const Filter = ({ filter, setFilter}) => {
    // Debounced filter change handler with 300ms delay
    const debouncedSetFilter = debounce((value) => {
        console.log(value);
        setFilter(value);
    }, 300);

    const handleFilterChange = (event) => {
        event.preventDefault();
        debouncedSetFilter(event.target.value);
    };

    return (
        <div>
            filter shown with <input value={filter} onChange={handleFilterChange} />
        </div>
    );
};

export default Filter;