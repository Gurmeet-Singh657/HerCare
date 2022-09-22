import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import { data } from "../FIR_filing/data.js";
import "./fir_filing.css";
import NestedCard from "../../components/nested card/NestedCard.js";

const FIR_filing = () => {
    return (
        <div>
            <Navbar />
            <SideBar />
            <div className="lrcontainer">
                <h1 className="lrtitle">Filing of a First Information Report (FIR)</h1>
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

export default FIR_filing;
