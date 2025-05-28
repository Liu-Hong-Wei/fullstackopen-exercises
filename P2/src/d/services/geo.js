import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";

const getAll = () => {
  const request = axios.get(`${baseUrl}/api/all`);
  return request.then((response) =>
    response.data.map((item) => item.name.common)
  );
};

const getWithFilter = (fil) => {
  return getAll().then((res) => {
    const target = res.filter((item) => item.toLowerCase().includes(fil.toLowerCase()));
    console.log("getWithFilter:", target);
    if (target.length > 10) {
      return "Too many matches, specify another filter";
    } else if (target.length === 0) {
      return "No such country";
    } else {
      return target;
    }
  });
};

export default {
  getAll,
  getWithFilter,
};
