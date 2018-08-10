import React from "react";
import HourlyList from "./hourlyList";

const IMG_URL = 'http://openweathermap.org/img/w';


const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getHourlyDate = (date) => {
  const wDate = new Date(date);
  return `${wDate.getDate()} ${monthList[wDate.getMonth()]} (${dayList[wDate.getDay()]})`;
};

function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

function Daily(props) {
  const dailyResponseData = props.dailyData.map(drData => {
    return {
      date: drData.dt_txt.substring(0, 10),
      time: drData.dt_txt,
      date_time: drData.dt,
      temp: parseInt(drData.main.temp, 10),
      weather_icon_url: `${IMG_URL}/${drData.weather[0].icon}.png`,
      description: drData.weather[0].description,
      cloud_percentage: parseInt(drData.clouds.all, 10),
    };
  });

  const dailyResponseDataGroups = dailyResponseData.reduce(function (r, a) {
    r[a.date] = r[a.date] || [];
    r[a.date].push(a);
    return r;
  }, {});

  return (
    <div className="HourlyContainer" style={{ margin: "0px auto", border: "0px solid black" }}>
      {
        mapObject(dailyResponseDataGroups, function (key, value) {
          return <HourlyList key={key} date={getHourlyDate(key)} listData={value} />
        })
      }
    </div>
  );
}

export default Daily;
