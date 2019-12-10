import React from 'react';
import './seasons.css';
import Snowfall from 'react-snowfall';

class Autumn extends React.Component {
    render() {
        return(
            <div className="autumn-background">
                <Snowfall color="#fcad03" snowflakeCount={30}/>
                <Snowfall color="#fc3903" snowflakeCount={10}/>
                <h1 className="autumn-day">{this.props.day} Days</h1>
            </div>
        );
    }
}

export default Autumn;