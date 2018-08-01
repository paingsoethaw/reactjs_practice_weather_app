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
  return (
    <div style={{ padding: "10px", margin: "10px 10px 30px 10px", backgroundColor: "#b0f2f0" }} className="HourlyCard">
      <span style={{ fontWeight: "bold" }}>
        {getCustomHour(props.hourlyData.date_time)}
      </span>
      <center>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={props.hourlyData.cloud_icon} alt="cloud icon" />
              </td>
              <td>
                <span className="capitalize">
                  {props.hourlyData.description}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
      {props.hourlyData.temp}&deg;C | {props.hourlyData.clouds_percentage}&#37; Cloud
    </div>
  );
}

export default HourlyCard;
