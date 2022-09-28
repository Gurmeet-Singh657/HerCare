import React from "react";
// import Navbar from './components/navbar/Navbar'
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import ContactUs from "./Pages/Contact_Us/Contact_Us.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hospitals from "./Pages/Hospitals_Near_Me/Hospitals.jsx";
import Police_Stations from "./Pages/Police_Stations/Police_Stations.js";
import Help from "./components/Help/Help";
import Faqs from "./Pages/faqs/Faqs.js";
import LegalResources from "./Pages/legal resources/LegalResources";
import Sexual_Violence_Laws from "./components/Sexual_Violence_Laws/Sexual_Violence_Laws.js";
import FIR_filing from "./components/FIR_filing/FIR_filing.jsx";
import About from "./Pages/about/About.js";
import Form from "./components/incidentForm/Form";
import SafetyTipForm from "./components/safetytipForm/SafetyTipForm";
import View_Data from "./Pages/View_Data/View_Data";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
          <Route exact path="/hospitals" element={<Hospitals />}></Route>
          <Route exact path="/police" element={<Police_Stations />}></Route>
          <Route exact path="/help" element={<Help />}></Route>
          <Route exact path="/faqs" element={<Faqs />}></Route>
          <Route exact path="/incidentform" element={<Form />}></Route>
          <Route
            exact
            path="/safetytipform"
            element={<SafetyTipForm />}
          ></Route>
          <Route
            exact
            path="/legal_resources"
            element={<LegalResources />}
          ></Route>
          <Route
            exact
            path="/sexual_violence_laws"
            element={<Sexual_Violence_Laws />}
          ></Route>
          <Route exact path="/filing_of_fir" element={<FIR_filing />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/viewdata" element={<View_Data />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar/> */}
    </div>
  );
};

export default App;
