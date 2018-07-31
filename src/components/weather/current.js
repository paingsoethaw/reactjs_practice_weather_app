import React from "react";

const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const getCustomTime = (date) => {
  const wDate = new Date(date * 1000);
  return ` ${wDate.getDate()} ${monthList[wDate.getMonth()+1]} ${wDate.getFullYear()} ( ${dayList[wDate.getDay()]})  ${wDate.getHours()}:${wDate.getMinutes()}`;
};

function Current(props) {

  return (
    <div style={{ margin: "0px 0px 20px 0px" }} className="HourlyCard">
      <center>
        <p className="">
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>{props.currentData.name}</span>
          <span style={{ fontSize: "10px", marginLeft: "20px" }}>
            {getCustomTime(props.currentData.dt)}
          </span>
        </p>
        <p className="">
          <strong>{props.currentData.main.temp}&deg;C</strong> (between {props.currentData.main.temp_min}&deg; and {props.currentData.main.temp_max}&deg;)
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <img className="" alt="" src={"http://openweathermap.org/img/w/" + props.currentData.weather[0].icon + ".png"} />
              </td>
              <td>
                <strong>{props.currentData.weather[0].description}</strong> ({props.currentData.clouds.all}&#37;)
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Current;
