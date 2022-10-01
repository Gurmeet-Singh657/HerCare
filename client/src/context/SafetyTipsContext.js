import React, { useState, createContext } from 'react';
const SafetyTipsContext = createContext();

const SafetyTipsProvider = (props) => {
    const [typeOfViolencest, setTypeOfViolencest] = useState([]);
    const [locationsst, setLocationsst] = useState("");

    return (
        <SafetyTipsContext.Provider
            value={{
                locationsst,
                setLocationsst,
                typeOfViolencest,
                setTypeOfViolencest
            }}
        >
            {props.children}
        </SafetyTipsContext.Provider>
    );
};

export { SafetyTipsContext, SafetyTipsProvider };