import React from "react";

function Current(props) {

  // const { currentData } = props;
  const currentData = props.currentData;

  return (
    <div style={{ backgroundColor: "#589496", margin: "0px 0px 20px 0px", padding: "10px" }} className="HourlyCard">
      <center>
        <p className="">
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>{currentData.city_name}</span>
          <span style={{ fontSize: "10px", marginLeft: "20px" }}>
            {currentData.updated_time}
          </span>
        </p>
        <p className="">
          <strong>{currentData.temp}&deg;C</strong> (between {currentData.min_temp}&deg;C and {currentData.max_temp}&deg;C)
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <img className="" alt="" src={currentData.weather_icon} />
              </td>
              <td>
                <strong>{currentData.description}</strong> ({currentData.cloud_percentage}&#37; Cloud)
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Current;
