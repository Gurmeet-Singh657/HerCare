import React from "react";

const Contact_Card = () => {
  return (
    <div className="card">
      <ul className="cardullist">
        <li className="cardlist"><h1 className="card-header">Get in Touch</h1></li>
        <li className="cardlist"><p className="card-text">
        Give us a missed call to share your experience. This is only for India callers. Our team will call you ​back within 24 hours.
        </p></li>
        <li className="cardlist"><a href="tel:+98XXXXXXXX" target="_blank" rel="noopener"><span style={{ color: "#592d8d" }}>+91 98XXXXXXXX</span></a></li>
        <li className="cardlist"><h5 className="card-title">Write to Us</h5></li>
        <li><a href="mailto:info@randomemail.org" target="_blank" rel="noopener"><span style={{color: "#592d8d"}}>info@reddotfoundation.org</span></a></li>
      </ul>   
    </div>
    
  );
};

{/* <span style="color: #592d8d;">+91 9876432456 </span> */}
export default Contact_Card;
