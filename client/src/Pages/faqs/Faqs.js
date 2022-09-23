import React from "react";
import AccordionCard from "../../components/accordion/AccordionCard.js";
import Navbar from "../../components/navbar/Navbar.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import "./faqs.css";
import { data } from "./data.js";

const Faqs = () => {
  return (
    <>
      <Navbar />

      <SideBar />
      <div className="faqcontainer">
        <h1 className="faqstitle">Frequently Asked Questions</h1>
        <div className="faqscontain">
          {data.map((faq) => {
            return (
              <AccordionCard question={faq.question} answer={faq.answer} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faqs;
