import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import "./legalResources.css";
import { useNavigate } from "react-router-dom";
import RateReviewIcon from '@mui/icons-material/RateReview';
import GavelIcon from '@mui/icons-material/Gavel';

const LegalResources = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="legalresource">
        <div onClick={() => navigate("/sexual_violence_laws")} className="sexualviolence">
          <GavelIcon />&nbsp;&nbsp;&nbsp;SEXUAL VIOLENCE LAWS
        </div>
        <div onClick={() => navigate("/filing_of_fir")} className="FIRfiling">
          <RateReviewIcon />&nbsp; &nbsp; &nbsp; FIR FILING
        </div>
      </div>
    </div>
  );
  return <div></div>;
};

export default LegalResources;
