import React from 'react';
import logo from './logo.svg';
import Snow from 'react-snow-effect';
import './App.css';

class App extends React.Component {
  Daynum() {
    var currentDate = new Date();
    var firstDate = new Date("09/21/2018");
    var time_difference = currentDate.getTime() - firstDate.getTime();
    var day_difference = Math.round(time_difference / (1000 * 3600 * 24));
    return day_difference;
  }

  render() {
    return (
      <div className="app">
          <Snow/>
          <h1 className="daynum">{this.Daynum()} Days</h1>
      </div>
    );
  }
}

export default App;
