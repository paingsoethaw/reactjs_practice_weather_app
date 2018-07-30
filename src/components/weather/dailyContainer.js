import React from "react";
import DailyList from "./dailyList";

const IMG_URL = 'http://openweathermap.org/img/w';


function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

function Daily(props) {

  // console.log(props)

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

  // console.log(dailyResponseDataGroups)
  // console.log(dailyResponseDataGroups.constructor.name)
  // console.log(dailyResponseDataGroups[Object.keys(dailyResponseDataGroups)[0]])

  return (
    <div>
      {
        mapObject(dailyResponseDataGroups, function (key, value) {
          // return <div>Key: {key}, Value: {value}</div>;
          return <DailyList key={key} listData={value} />
        })
      }
      {/* {dailyResponseDataGroups.map(dv => <DailyList listData={dv} key={getKey(dv)} />)} */}
    </div>
  );
}

export default Daily;
