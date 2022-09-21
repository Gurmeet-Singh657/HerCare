import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import { data } from "../legal resources/data.js";
import "./legalResources.css";
import NestedCard from "../../components/nested card/NestedCard.js";

const LegalResources = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="lrcontainer">
        <h1 className="lrtitle">Sexual Violence Laws under IPC</h1>
        <div className="lrcontain">
          {data.map((lr) => {
            return (
              <NestedCard
                heading={lr.heading}
                sections={lr.sections}
                punishment={lr.punishment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LegalResources;
