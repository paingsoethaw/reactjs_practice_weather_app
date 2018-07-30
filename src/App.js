import React, { Component } from 'react';
import './App.css';

import HourlyContainer from "./components/weather/hourlyContainer";

var hourlyData = require('./seeds/hourlyWeatherData.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather React App</h1>
        <HourlyContainer dailyData={hourlyData.list} />
      </div>
    );
  }
}

export default App;
