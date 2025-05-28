import { useEffect, useState } from "react";
import Filter from "../b/Filter";
import services from "../d/services/geo";
const getWithFilter = services.getWithFilter;

const Display = ({ contries }) => {
  if (typeof contries === "string") {
    return <div>{contries}</div>;
  }

  if (Array.isArray(contries)) {
    if (contries.length === 1) {
      return (
        <div>
          <h2>{contries[0]}</h2>
          {/* You might want to fetch more details for a single country here */}
        </div>
      );
    }
    return (
      <div>
        {contries.map((contry, index) => (
          <div key={index}>{contry}</div>
        ))}
      </div>
    );
  }
};
const Geo = () => {
  const [fil, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Create a debounced function that only executes after 300ms of no calls
    // const debounceTimeout = setTimeout(() => {
      console.log("filter:", fil);
      getWithFilter(fil).then((res) => {
        setCountries(res);
        console.log("countries:", res);
      });
    // }, 100);

    // Cleanup function to clear the timeout if effect re-runs before timeout completes
    // return () => clearTimeout(debounceTimeout);
  }, [fil]);

  return (
    <>
      <Filter filter={fil} setFilter={setFilter} />
      <Display contries={countries} />
    </>
  );
};

export default Geo;
