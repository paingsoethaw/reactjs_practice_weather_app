import React from "react";

function HourlyCard(props) {

  return (
    <div className="HourlyCard">
      <span>{props.date} : {props.temp}</span>
    </div>
  );
}

export default HourlyCard;
