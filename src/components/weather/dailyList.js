import React from "react";
// import PropTypes from "prop-types";
import DailyCard from "./dailyCard";

function DailyList(props) {
  return (
    <div className="dailyList">
      <span>{props.listData.dt}</span>

      {props.listData.weather.map(dc => <DailyCard dec={dc.description} key={dc.id} />)}
    </div>
  );
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired
// };

export default DailyList;
