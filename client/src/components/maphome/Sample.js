// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import './index'
// export default function Root() {
//   const elem = ( <html>
//       <head>
//         <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
//         <link rel="stylesheet" type="text/css" href="./style.css" />
//         <script type="module" src="./index.js"></script>
//       </head>
//       <body>
//         <h1 style={{color: "red"}}>working</h1>
//         <div id="map" style={{height: 100}}><h1>map</h1></div>
//         <script
//           src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w&callback=initMap&v=weekly"
//           defer
//         ></script>
//       </body>
//     </html>
//   )
//   return elem; 
// }
// // export default root
// // const myElement = <h1>I Love JSX!</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Root/>);


/* global google */

import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

export default function Sample() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: "AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}
