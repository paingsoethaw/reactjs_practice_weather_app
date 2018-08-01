import React from "react";
import HourlyCard from "./hourlyCard";

const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getCustomDate = (date) => {
  const wDate = new Date(date);
  return `${wDate.getDate()} ${monthList[wDate.getMonth()]} (${dayList[wDate.getDay()]})`;
};

function DailyList(props) {
  return (
    <div style={{ width: "20%", float: "left" }} className="dailyList">
      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
        {getCustomDate(props.date)}
      </span>
      <br />
      {props.listData.map(dc => <HourlyCard key={dc.date_time} hourlyData={dc} />)}
    </div>
  );
}

export default DailyList;
