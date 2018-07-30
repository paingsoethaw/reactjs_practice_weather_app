import React, { Component } from 'react';
import './App.css';

import Current from "./components/weather/current";
import HourlyContainer from "./components/weather/hourlyContainer";

var currentData = require('./seeds/currentWeatherData.json');
var hourlyData = require('./seeds/hourlyWeatherData.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather React App</h1>
        <Current currentData={currentData} />
        <HourlyContainer dailyData={hourlyData.list} />
      </div>
    );
  }
}

export default App;
