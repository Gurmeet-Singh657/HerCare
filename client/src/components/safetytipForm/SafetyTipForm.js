import React, { useState } from "react";
import SafetyTipDescription from "./SafetyTipDescription";
import TypeOfViolence from "./TypeOfViolence";
// import "./incidentForm.css";
import axios from "axios";
import { useCallback } from "react";
import ProgressBar from "../ProgressBar/Progress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { display, style } from "@mui/system";
import { Button } from "@mui/material";

function SafetyTipForm() {
  const navigate = useNavigate();
  const curDT = new Date().toLocaleString();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    typeOfViolence: "",
  });

  //   const triggerAPI = useCallback(async () => {
  //     // Use async await instead of chained promise
  //    axios.post('http://localhost:4000/incident', formData)
  //   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    if (page === 1) {
      if (formData.title === "" || formData.message === "")
        alert("Please Enter the Title and Description!");
        else if (formData.message.length < 20)
        alert(`Please enter atleast ${20 - formData.message.length} more Characters in Description!`);
      else if (formData.title.length < 6)
        alert(`Please enter atleast ${6 - formData.title.length} more Characters in Title!`);
      else{  
    await axios
      .post("http://localhost:4000/safetytip", JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        navigate("/");
      });}
  }};

  const FormTitles = [
    "Please share your Safety Tip Here",
    "Select type of violence you are registering for",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <TypeOfViolence formData={formData} setFormData={setFormData} />;
    } else {
      return (
        <SafetyTipDescription formData={formData} setFormData={setFormData} />
      );
    }
  };

  const handleclick = () => {
     if (page === 0) {
      if (formData.typeOfViolence === "")
        alert("Please Enter Type Of Violence");
      else setPage((currPage) => currPage + 1);
    }
  };

  const checkPage = () => {
    if (page === FormTitles.length - 1) {
      return (
        <Button
          // className="nextBtn navigateBtn"
          onClick={handleSubmit}
        >
          Submit&nbsp;
          {/* <ArrowForwardIcon style={{ fontSize: "20px" }} /> */}
        </Button>
      );
    } else {
      return (
        <Button
          //   className="nextBtn navigateBtn"
          onClick={handleclick}
        >
          Next&nbsp;
          <ArrowForwardIcon style={{ fontSize: "20px" }} />
        </Button>
      );
    }
  };

  return (
    <>
      <div className="Form">
        <div className="form-container">
          <div>
            {" "}
            <ProgressBar done={parseInt(50 * page)} />
          </div>
          <h1 className="formTitles">{FormTitles[page]}</h1>
          <div className="body">{PageDisplay()}</div>
          <div className="IncidentFormBtns">
            <Button
              //   className="prevBtn navigateBtn"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <ArrowBackIcon style={{ fontSize: "20px" }} />
              &nbsp;Prev
            </Button>
            {checkPage()}
          </div>
        </div>
      </div>
    </>
  );
}

export default SafetyTipForm;
