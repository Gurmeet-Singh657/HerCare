import React, { useState, createContext } from 'react';
const SearchContext = createContext();

const SearchProvider = (props) => {
  const [typesofassault, setTypesofassault] = useState([]);
  const [showIncidentfrom, setShowIncidentfrom] = useState("All time");
  const [timeoftheday, settimeoftheday] = useState("Whole day");

  return (
    <SearchContext.Provider value={{ typesofassault, setTypesofassault, showIncidentfrom, setShowIncidentfrom, timeoftheday, settimeoftheday }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };