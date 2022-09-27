import React, { useState, createContext } from 'react';
const LatLonContext = createContext();

const LatLonProvider = (props) => {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude + "  " + longitude)
    });
  });

  return (
    <LatLonContext.Provider value={{ latitude, longitude, setLatitude, setLongitude}}>
      {props.children}
    </LatLonContext.Provider>
  );
};

export { LatLonContext, LatLonProvider };