import React from "react";
import HourlyList from "./hourlyList";

const IMG_URL = 'http://openweathermap.org/img/w';

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
      temp: drData.main.temp,
      cloud_icon: `${IMG_URL}/${drData.weather[0].icon}.png`,
      description: drData.weather[0].description,
      clouds_percentage: drData.clouds.all,
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
          return <HourlyList key={key} date={key} listData={value} />
        })
      }
    </div>
  );
}

export default Daily;
