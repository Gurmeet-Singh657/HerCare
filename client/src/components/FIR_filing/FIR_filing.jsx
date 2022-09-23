import React from "react";
import "./fir_filing.css";
import { data } from "./data.js";
import FirAccordion from "../fir accordion/FirAccordion.js";
import Navbar from "../navbar/Navbar.jsx";
import SideBar from "../sideBar/SideBar.jsx";

const FIR_filing = () => {
    return (
        <>
            <Navbar />

            <SideBar />
            <div className="fircontainer">
                <h1 className="firtitle">Filing of a FIR ( First Information Report )</h1>
                <div className="fircontain">
                    {data.map((fir) => {
                        return (
                            <FirAccordion
                                heading={fir.heading}
                                answer={fir.answer}
                                points={fir.points}
                                isTrue={fir.isTrue}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default FIR_filing;
