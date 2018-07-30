import React from "react";
import HourlyCard from "./hourlyCard";

function DailyList(props) {
  return (
    <div style={{ border: "1px solid black", width: "150px", float: "left" }} className="dailyList">
      {props.date}
      {props.listData.map(dc => <HourlyCard key={dc.date_time} date={dc.date} temp={dc.temp} />)}
    </div>
  );
}

export default DailyList;
