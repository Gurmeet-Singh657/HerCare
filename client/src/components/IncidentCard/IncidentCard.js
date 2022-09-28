import * as React from "react";
import "./IncidentCard.css";

export default function IncidentCard(props) {
  console.log(props.date);
  return (
    <div className="Incidentonecard">
      <div className="card_content">
        <h1 className="incidentTitle">Incident Title</h1>
        <div>
          {/* {props.date}&nbsp;{props.month} */}
          {props.time.slice(0, 10)}
        </div>
        <div>{props.time.slice(11, 16)}</div>
        <div className="IncidentHeader">{props.typeOfViolence}</div>
        <div>
          {props.city}&nbsp;{props.state}
        </div>
        <div>
          {props.gender}&nbsp;|&nbsp;{props.age}
        </div>
        <div>{props.desc}</div>
        <br />
      </div>
      {/* <CardActions>
                  <Button size="small">Learn More</Button>
              </CardActions> */}
    </div>
  );
}
