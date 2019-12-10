import React from 'react';
import Wave from 'react-wavify';

class Summer extends React.Component {
    render() {
        return(
            <div className="summer-background">
                <h1 className="summer-day">{this.props.day} Days</h1>
                <div className="wave">
                    <Wave fill='url(#gradient)' options={{height: 0, amplitude: 20, speed: .2, points: 3}}>
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                <stop offset="20%"  stopColor="#0066cc" />
                                <stop offset="80%" stopColor="#fcc18a" />
                            </linearGradient>
                        </defs>
                    </Wave>
                </div>
            </div>
        );
    }
}

export default Summer;