import React from "react";
import Contact_Card from "../../components/Contact_Card/Contact_Card";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import Footer from "../../components/Footer/Footer";

const Contact_Us = () => {
  return (
    <div>
      <Navbar />
      <SideBar/>
      <Contact_Card />
      {/* <Footer/> */}
    </div>
  );
};

export default Contact_Us;
