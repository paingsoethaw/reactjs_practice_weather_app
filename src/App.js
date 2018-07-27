import React, { Component } from 'react';
import './App.css';

import DailyContainer from "./components/weather/dailyContainer";

var hourlyData = require('./seeds/hourlyWeatherData.json');


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather React App</h1>
        <DailyContainer dailyData={hourlyData.list} />
      </div>
    );
  }
}

export default App;
