import React from 'react';
import Snowfall from 'react-snowfall';
import './App.css';

class App extends React.Component {
  Daynum() {
    var currentDate = new Date();
    var firstDate = new Date("09/21/2018");
    var time_difference = currentDate.getTime() - firstDate.getTime();
    var day_difference = Math.floor(time_difference / (1000 * 3600 * 24));
    return day_difference;
  }

  render() {
    return (
      <div className="app">
          <Snowfall color="yellow" snowflakeCount={50}/>
          <Snowfall color="red" snowflakeCount={20}/>
          <h1 className="daynum">{this.Daynum()} Days</h1>
      </div>
    );
  }
}

export default App;
