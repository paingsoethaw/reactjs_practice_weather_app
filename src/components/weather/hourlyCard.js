import React from "react";
import PropTypes from 'prop-types';

const getCustomHour = (date) => {
  const wDate = new Date(date * 1000);
  let hFormat = `${wDate.getHours()}:00 AM`;
  if (wDate.getHours() > 12) {
    hFormat = `${wDate.getHours() - 12}:00 PM`;
  }
  return `${hFormat}`;
};

function HourlyCard(props) {
  const hourlyData = props.hourlyData;
  return (
    <div style={{ padding: "10px", margin: "10px 10px 30px 10px", backgroundColor: "#b0f2f0" }} className="HourlyCard">
      <span style={{ fontWeight: "bold" }}>
        {getCustomHour(hourlyData.date_time)}
      </span>
      <center>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={hourlyData.weather_icon_url} alt="cloud icon" />
              </td>
              <td>
                <span className="capitalize">
                  {hourlyData.description}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
      {hourlyData.temp}&deg;C ( {hourlyData.cloud_percentage}&#37; Cloud )
    </div>
  );
}

// validating prop types
HourlyCard.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date_time: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather_icon_url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cloud_percentage: PropTypes.number.isRequired
}

// creating default props
HourlyCard.defaultProps = {
  date: "",
  time: "",
  date_time: "",
  temp: 0,
  weather_icon_url: "",
  description: "",
  cloud_percentage: 0,
}

export default HourlyCard;
