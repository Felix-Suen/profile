import React from 'react';
import './App.css';
import Winter from './seasons/winter.js';
import Autumn from './seasons/autumn.js';
import Summer from './seasons/summer.js';
import Spring from './seasons/spring.js';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      daynum: this.Daynum(),
    }
  }

  Daynum() {
    var currentDate = new Date();
    var firstDate = new Date("09/21/2018");
    var time_difference = currentDate.getTime() - firstDate.getTime();
    var day_difference = Math.floor(time_difference / (1000 * 3600 * 24));
    return day_difference;
  }

  current() {
    var currentDate = new Date();
    return currentDate;
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        daynum : this.Daynum()
      })
    },360000)
  }

  render() {
    return(
      <div>
        <Spring day={this.state.daynum}/>
      </div>
    );
  }
}

export default App;
