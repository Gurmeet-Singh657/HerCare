import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import ContactUs from "./Pages/Contact_Us/Contact_Us.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hospitals from "./Pages/Hospitals_Near_Me/Hospitals.jsx";
import Police_Stations from "./Pages/Police_Stations/Police_Stations.js";
import Faqs from "./Pages/faqs/Faqs.js";
import LegalResources from "./Pages/legal resources/LegalResources";

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
          <Route exact path="/faqs" element={<Faqs />}></Route>
          <Route
            exact
            path="/legal_resources"
            element={<LegalResources />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
