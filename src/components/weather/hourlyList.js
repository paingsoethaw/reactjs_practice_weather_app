import React from "react";
import PropTypes from 'prop-types';
import HourlyCard from "./hourlyCard";

function DailyList(props) {
  const hData = props;
  return (
    <div style={{ width: "20%", float: "left" }} className="dailyList">
      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
        {hData.date}
      </span>
      <br />
      {hData.listData.map(dc => <HourlyCard key={dc.date_time} hourlyData={dc} />)}
    </div>
  );
}

// validating prop types
DailyList.propTypes = {
  date: PropTypes.string.isRequired,
  listData: PropTypes.array.isRequired
}

// creating default props
DailyList.defaultProps = {
  date: "",
  listData: [],
}

export default DailyList;
