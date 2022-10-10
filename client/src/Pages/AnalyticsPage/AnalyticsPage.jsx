import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/Footer/Footer'
import StateWiseChart from "../../components/chart/ViolenceWiseChart";
import "./AnalyticsPage.css"
import XYChart from "../../components/chart/XYChart";

const AnalyticsPage = () => {
    return (
        <>
            <Navbar />
            <div className="analyticspage">
                <StateWiseChart />
                <div className="chartspacer"></div>
                <XYChart />
            </div>
            <div className="chartfooter">
                <Footer />
            </div>
        </>
    );
};

export default AnalyticsPage;