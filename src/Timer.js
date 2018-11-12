import React from "react";

class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        }
    }

    tick() {
        console.log(new Date());
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>秒表: {this.state.seconds}</div>
        );
    };

}

export default Timer;