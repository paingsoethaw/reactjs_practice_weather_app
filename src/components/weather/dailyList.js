import React from "react";
import DailyCard from "./dailyCard";

function DailyList(props) {
  // console.log(props)
  return (
    <div style={{border:"1px solid black"}} className="dailyList">
      
      {/* <span>{props.listData.dt}</span> */}

      {props.listData.map(dc => <DailyCard key={dc.date_time} date={dc.date} temp={dc.temp} />)}
    </div>
  );
}

export default DailyList;
