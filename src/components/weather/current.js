import React from "react";
import PropTypes from 'prop-types';

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
                <img className="" alt="" src={currentData.weather_icon_url} />
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


// validating prop types
Current.propTypes = {
  city_name: PropTypes.string,
  updated_time: PropTypes.string,
  temp: PropTypes.number,
  min_temp: PropTypes.number,
  max_temp: PropTypes.number,
  weather_icon_url: PropTypes.string,
  description: PropTypes.string,
  cloud_percentage: PropTypes.number,
}

// creating default props
Current.defaultProps = {
  city_name: "",
  updated_time: "",
  temp: 0,
  min_temp: 0,
  max_temp: 0,
  weather_icon_url: "",
  description: "",
  cloud_percentage: 0,
}

export default Current;
