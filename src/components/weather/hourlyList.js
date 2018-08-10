import React from "react";
import HourlyCard from "./hourlyCard";


function DailyList(props) {
  return (
    <div style={{ width: "20%", float: "left" }} className="dailyList">
      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
        {props.date}
      </span>
      <br />
      {props.listData.map(dc => <HourlyCard key={dc.date_time} hourlyData={dc} />)}
    </div>
  );
}

export default DailyList;
