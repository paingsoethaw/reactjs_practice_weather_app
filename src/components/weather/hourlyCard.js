import React from "react";

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
                <img src={hourlyData.weather_icon} alt="cloud icon" />
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

export default HourlyCard;
