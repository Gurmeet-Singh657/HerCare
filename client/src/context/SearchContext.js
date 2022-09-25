import { createContext, useReducer, useState } from "react";

const INITIAL_STATE = {
  typesofassault: [],
  showIncidentsfrom: undefined,
  timeoftheday: undefined,
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  const [typesofassault, settypesofassault] = useState([]);
    const [showIncidentsfrom, setshowIncidentsfrom] = useState("");
    const [timeoftheday, settimeoftheday] = useState("");
  return (
    <SearchContext.Provider
      value={{
        // typesofassault: state.typesofassault,
        // showIncidentsfrom: state.showIncidentsfrom,
        // timeoftheday: state.timeoftheday,
        // dispatch,
        typesofassault,settypesofassault,showIncidentsfrom,setshowIncidentsfrom,timeoftheday,settimeoftheday
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
