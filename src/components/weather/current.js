import React from "react";

const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getCustomTime = (date) => {
  const wDate = new Date(date * 1000);
  let hFormat = `${wDate.getHours()}:${wDate.getMinutes()} AM`;
  if (wDate.getHours() > 12) {
    hFormat = `${wDate.getHours() - 12}:${wDate.getMinutes()} PM`;
  }
  return `${wDate.getDate()} ${monthList[wDate.getMonth()]} ${wDate.getFullYear()} ( ${dayList[wDate.getDay()]})  ${hFormat}`;
};

function Current(props) {
  return (
    <div style={{ backgroundColor: "#589496", margin: "0px 0px 20px 0px", padding: "10px" }} className="HourlyCard">
      <center>
        <p className="">
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>{props.currentData.name}</span>
          <span style={{ fontSize: "10px", marginLeft: "20px" }}>
            {getCustomTime(props.currentData.dt)}
          </span>
        </p>
        <p className="">
          <strong>{props.currentData.main.temp}&deg;C</strong> (between {props.currentData.main.temp_min}&deg;C and {props.currentData.main.temp_max}&deg;C)
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <img className="" alt="" src={"http://openweathermap.org/img/w/" + props.currentData.weather[0].icon + ".png"} />
              </td>
              <td>
                <strong>{props.currentData.weather[0].description}</strong> ({props.currentData.clouds.all}&#37; Cloud)
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Current;
