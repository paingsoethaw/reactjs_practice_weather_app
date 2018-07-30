import React from "react";

function DailyCard(props) {
  // console.log(props)
  return (
    <div className="dailyCard">
      <span>{props.date} : {props.temp}</span>
    </div>
  );
}

export default DailyCard;
