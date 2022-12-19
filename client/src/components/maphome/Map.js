import React, { useState } from "react";
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";
import useFetch from "../../hooks/useFetch.js";
/*global google*/ function Map() {
  const { data, loading, reFetch } = useFetch(
    "https://hercare-0nh9.onrender.com/getIncidentFormData"
  );
  const markers = [];
  for (let i = 0; i < data.length; ++i) {
    const obj = {
      _id: data[i]._id,
      time: data[i].time,
      typeOfViolence: data[i].typeOfViolence,
      position: {
        lat: parseFloat(data[i].address.lat.$numberDecimal),
        lng: parseFloat(data[i].address.lng.$numberDecimal),
      },
    };
    markers.push(obj);
    console.log(obj);
  }
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => {
      bounds.extend(parseFloat(position));
    });
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={{ lat: 28.7166162, lng: 77.1139872 }}
    >
      {markers.map(({ _id, time, position, typeOfViolence }) => (
        <MarkerF
          key={_id}
          position={position}
          onClick={() => handleActiveMarker(_id)}
        >
          {activeMarker === _id ? (
            <InfoWindow options={{ maxWidth: 300 }}>
              <div>
                <div>{time}</div>
                <br></br>
                <b>
                  <div>{typeOfViolence}</div>
                </b>
                <br></br>
              </div>
            </InfoWindow>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default Map;
