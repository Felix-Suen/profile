import React from 'react';
import './seasons.css';
import Snowfall from 'react-snowfall';

class Winter extends React.Component {
    render() {
        return(
            <div className="winter-background">
                <Snowfall color="#fff" snowflakeCount={30}/>
                <Snowfall color="red" snowflakeCount={10}/>
                <h1 className="winter-day">{this.props.day} Days</h1>
            </div>
        );
    }
}

export default Winter;