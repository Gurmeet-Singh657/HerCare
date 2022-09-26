import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'
import HospitalsForm from '../../components/hospitals/HospitalsForm.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import SideBar from '../../components/sideBar/SideBar.jsx'
import axios from 'axios';
// import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';


const Hospitals = () => {
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');
    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
     
        console.log(latitude + "  " + longitude)

        })

        
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })

    const options = {
        method: 'GET',
        url: 'https://google-maps28.p.rapidapi.com/maps/api/place/photo',
        params: {
            photo_reference: 'Aap_uEC7IbboaQKJZSB2DAZxtBI9K1d1tqSGfra8_C3ki8wga0qk2ttpvDjKD2PA4XlBFV_wXiSW10Nhi-V-1KzT78r0cxDLxMM4in71tluj9U1xTPYQfaAXq0wMVzcyQ6dj0PK2bBZD54_lRx_UAhXpMdq6vAxkD9aFcwZkmCzTKkK9jduu',
            maxwidth: '1600',
            maxheight: '1600'
        },
        headers: {
            'X-RapidAPI-Key': '6a2500e43amsh3985fbd0c188493p193a7fjsn3f946371f5a6',
            'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com'
        }
    };
    // const options = {
    // method: 'GET',
    // url: 'https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json',
    // params: {
    //     // location: '28.7166162 ,77.1139872',
    //     location: `${latitude},${longitude}`,
    //     radius: '4000',
    //     language: 'en',
    //     keyword: 'hospital'
    // },
    // headers: {
    //     'X-RapidAPI-Key': '6a2500e43amsh3985fbd0c188493p193a7fjsn3f946371f5a6',
    //     'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com'
    // }
    // };
    return (
        <>    
            <Navbar />
            {/* <HospitalsForm /> */}
            {/* {handleRequest()} */}
        </>
    )
}

export default Hospitals