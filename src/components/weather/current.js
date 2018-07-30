import React from "react";

function Current(props) {

  return (
    <div className="HourlyCard">
      <p>
        {props.currentData.name}
      </p>
      {props.currentData.main.temp}
    </div>
  );
}

export default Current;
