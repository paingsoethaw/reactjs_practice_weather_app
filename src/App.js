import React, { Component } from 'react';
import axios from "axios";

import './App.css';

import Current from "./components/weather/current";
import HourlyContainer from "./components/weather/hourlyContainer";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const CURRENT_URL = "http://api.openweathermap.org/data/2.5/weather?id=1880251&appid=" + WEATHER_API_KEY + "&units=metric";

const HOURLY_URL = "http://api.openweathermap.org/data/2.5/forecast?id=1880251&appid=" + WEATHER_API_KEY + "&units=metric";

var currentData = require('./seeds/currentWeatherData.json');
var hourlyData = require('./seeds/hourlyWeatherData.json');

class App extends Component {
  state = {
    current_data: currentData,
    hourly_data: hourlyData
  };

  componentDidMount() {
    axios
      .get(CURRENT_URL)
      .then(response => {
        // create an array of contacts only with relevant data
        const responseCurrentData = response.data;
        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          current_data: responseCurrentData
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
          hourly_data: responseHourlyData
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
        <HourlyContainer dailyData={this.state.hourly_data.list} />
      </div>
    );
  }
}

export default App;
