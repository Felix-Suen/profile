import React from 'react';
import Sky from 'react-sky';

class Spring extends React.Component {
    render() {
        return(
            <div  className="spring-background">
                <Sky
                    images={{
                        0: "https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F954-potato-512.png",
                        1: "https://cdn2.iconfinder.com/data/icons/colored-fast-food-1/512/fast_food-26-512.png",
                        2: "https://cdn.iconscout.com/icon/premium/png-256-thumb/papaya-50-911411.png"}}
                    how={70}
                    time={40}
                    size={'100px'}
                    background={'#035973'}
                />
                <h1 className="spring-day">{this.props.day} Days</h1>
            </div>
        );
    }
}

export default Spring;