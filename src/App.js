import React from 'react';
import './App.css';
import Winter from './seasons/winter.js';
import Autumn from './seasons/autumn.js';
import Summer from './seasons/summer.js';
import Spring from './seasons/spring.js';

class App extends React.Component {
  Daynum() {
    var currentDate = new Date();
    var firstDate = new Date("09/21/2018");
    var time_difference = currentDate.getTime() - firstDate.getTime();
    var day_difference = Math.floor(time_difference / (1000 * 3600 * 24));
    return day_difference;
  }

  render() {
    return <Spring day={this.Daynum()}/>
  }
}

export default App;
