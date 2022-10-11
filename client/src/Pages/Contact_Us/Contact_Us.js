import React from "react";
import Contact_Card from "../../components/Contact_Card/Contact_Card";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import "./contact_us.css"

const Contact_Us = () => {
  return (
    <div>
      <Navbar />
      <div className="contactContainer">
        <SideBar />
        <Contact_Card />
      </div>
    </div>
  );
};

export default Contact_Us;
