import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import axios from "axios";
import Hospitalnearme from "../../components/hospitalnearme/Hospitalnearme.js";
import { hospitalsdata } from "./data.js";
// import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const Hospitals = () => {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [hospitals, setHospitals] = React.useState([]);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  });

  //   https://www.google.com/maps/place/Hitaishi+Hospital/@28.7056173,77.1224391

  //   const options = {
  //     method: "GET",
  //     url: "https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json",
  //     params: {
  //       // location: '28.7166162 ,77.1139872',
  //       location: `${latitude},${longitude}`,
  //       radius: "4000",
  //       language: "en",
  //       keyword: "hospital",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "c6581bc6ebmsh19c73909f85fd55p10d88ajsn775aba7a27f0",
  //       "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       // console.log(response.data);
  //       console.log(response.data.results);

  //       //   setHospitals(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  return (
    <>
      <Navbar />

      {hospitalsdata.map((hospital, index) => {
        const lati = hospital.geometry.location.lat;
        const longi = hospital.geometry.location.lng;
        const name = hospital.name;
        const rating = hospital.rating;
        const address = hospital.vicinity;

        {
          /* const isOpen = hospital.opening_hours.open_now; */
        }

        const isOpen = false;

        return (
          <Hospitalnearme
            key={index}
            lati={lati}
            longi={longi}
            name={name}
            rating={rating}
            address={address}
            isOpen={isOpen}
          />
        );
      })}
    </>
  );
};

export default Hospitals;
