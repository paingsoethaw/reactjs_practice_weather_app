import React, { Component } from 'react';
import axios from "axios";

import './App.css';

import Current from "./components/weather/current";
import HourlyContainer from "./components/weather/hourlyContainer";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const CURRENT_URL = "http://api.openweathermap.org/data/2.5/weather?id=1880251&appid=" + WEATHER_API_KEY + "&units=metric";

const HOURLY_URL = "http://api.openweathermap.org/data/2.5/forecast?id=1880251&appid=" + WEATHER_API_KEY + "&units=metric";

const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getCurrentUpdatedTime = (date) => {
  const wDate = new Date(date * 1000);
  let hFormat = `${wDate.getHours()}:00 AM`;
  if (wDate.getHours() > 12) {
    hFormat = `${wDate.getHours() - 12}:00 PM`;
  }
  return `${wDate.getDate()} ${monthList[wDate.getMonth()]} ${wDate.getFullYear()} ( ${dayList[wDate.getDay()]})  ${hFormat}`;
};

class App extends Component {
  state = {
    current_data: {},
    hourly_data: []
  };

  componentDidMount() {
    axios
      .get(CURRENT_URL)
      .then(response => {
        // create an array of contacts only with relevant data
        const responseCurrentData = response.data;
        const currentDataFormat = {
          city_name: responseCurrentData.name,
          updated_time: getCurrentUpdatedTime(responseCurrentData.dt),
          temp: parseInt(responseCurrentData.main.temp, 10),
          min_temp: parseInt(responseCurrentData.main.temp_min, 10),
          max_temp: parseInt(responseCurrentData.main.temp_max, 10),
          weather_icon: "http://openweathermap.org/img/w/" + responseCurrentData.weather[0].icon + ".png",
          description: responseCurrentData.weather[0].description,
          cloud_percentage: parseInt(responseCurrentData.clouds.all, 10)
        };

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          current_data: currentDataFormat
        });
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));

    axios
      .get(HOURLY_URL)
      .then(response => {
        // create an array of contacts only with relevant data
        const responseHourlyData = response.data;
        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          hourly_data: responseHourlyData.list
        });
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Weather React App</h1>
        <Current currentData={this.state.current_data} />
        <HourlyContainer dailyData={this.state.hourly_data} />
      </div>
    );
  }
}

export default App;
