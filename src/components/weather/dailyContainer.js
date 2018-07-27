import React from "react";
// import PropTypes from "prop-types";

// import the Contact component
import DailyList from "./dailyList";

function Daily(props) {
  return (
    <div>
      {props.dailyData.map(dv => <DailyList listData={dv} key={dv.dt} />)}
    </div>
  );
}

export default Daily;
