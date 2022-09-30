import React, { useState } from "react";
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";
import useFetch from '../../hooks/useFetch.js'
import axios from "axios";
import { position } from "@chakra-ui/react";
/*global google*/
// const markers = [
//   {
//     id: 1,
//     name: "Chicago, Illinois",
//     position: { lat: 41.881832, lng: -87.623177 }
//   },
//   {
//     id: 2,
//     name: "Denver, Colorado",
//     position: { lat: 28.7166162, lng: 77.1139872 }  
//   },
//   {
//     id: 3,
//     name: "Los Angeles, California",
//     position: { lat: 34.052235, lng: -118.243683 }
//   },
//   {
//     id: 4,
//     name: "New York, New York",
//     position: { lat: 40.712776, lng: -74.005974 }
//   }
//];

// const getData = async()=>{
//   await axios
//       .get("http://localhost:4000/getIncidentFormData")
//       .then((result) => {
//         return result.data
//       });
// }
// const markers =  getData()


function Map() {
  const {data,loading,reFetch} = useFetch('/getIncidentFormData')
  const markers = []
  for(let i=0; i<data.length; ++i){
    const obj = {
      _id : data[i].id,
      time: data[i].time,
      position:{
        lat: parseFloat(data[i].address.lat.$numberDecimal),
        lng: parseFloat(data[i].address.lng.$numberDecimal)
      }
    }
    markers.push(obj)
    console.log(obj)
  }
  // console.log(data[0].address.position);
  // console.log(markers + "marker")
  const [activeMarker, setActiveMarker] = useState(null);
  

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const handleOnLoad = (map) => {

    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) =>{ bounds.extend(parseFloat(position))
      // console.log(position + "Hello");
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
      {markers.map(({ _id, time, position }) => (
        <MarkerF
          key={_id}
          position={position}
          onClick={() => handleActiveMarker(_id)}
        >
          {activeMarker === _id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)} options= {{maxWidth : 500 }}>
              <div>{time}</div>
            </InfoWindow>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default Map;
