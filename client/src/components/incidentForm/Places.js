import React,{Component, useContext} from 'react'
// import Map from './Map';
// import { useContext } from "react";
// import { LatLonContext } from "../../context/LatLonContext";

// function IncidentLocation() {
  // const [latitude, setLatitude] = React.useState("");
  // const [longitude, setLongitude] = React.useState("");

  // React.useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  // });
  
//   return(
//         <Map
//      google={this.props.google}
//      center={{lat: 18.5204, lng: 73.8567}}
//      height='300px'
//      zoom={15}
//     />
//       )
// }

// export default IncidentLocation


// class IncidentLocation extends Component {
//   static latloncontext =LatLonContext
//   constructor(props) {
//     super(props);
//     console.log(this.latloncontext)
//   }
//   // static lat lon { latitude, longitude } = useContext(LatLonContext);
//   render() {
//     return(
//         <Map
//      google={this.props.google}
//      center={{lat: this.latloncontext.latitude, lng: this.latloncontext.longitude}}
//      height='300px'
//      zoom={15}
//     />
//       )
//   }
// }

// export default IncidentLocation

import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { MarkerF } from '@react-google-maps/api'
import "./incidentForm.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
// import { useContext } from 'react';
import { LatLonContext } from '../../context/LatLonContext';
// import { useContext } from 'react';

export default function Places() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: "AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const {latitude,longitude}=useContext(LatLonContext);
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);
  // const center = { lat: 28.6130176, lng: 77.2308992 };
  const [selected, setSelected] = useState({ lat: latitude, lng:longitude });

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={20}
        center={selected}
        mapContainerClassName="map-container"
      >
        <MarkerF position={selected}/>
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

