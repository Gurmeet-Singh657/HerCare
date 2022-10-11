import React, { useState, createContext } from 'react';
const LatLonContext = createContext();

const LatLonProvider = (props) => {
  const [latitude, setLatitude] = React.useState(23);
  const [longitude, setLongitude] = React.useState(77);

  return (
    <LatLonContext.Provider value={{ latitude, longitude, setLatitude, setLongitude }}>
      {props.children}
    </LatLonContext.Provider>
  );
};

export { LatLonContext, LatLonProvider };