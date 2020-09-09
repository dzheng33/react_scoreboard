import React, {Component} from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        prevTime: 0
    };

    componentDidMount() {
        this.intervalID = setInterval(()=> this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        if(this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                prevTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.prevTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        if(!this.state.isRunning){
            this.setState({prevTime: Date.now() });
        }
    }

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        });
    }

    render(){

        let button;
        if (this.state.isRunning) {
          button = <button onClick={this.handleStopwatch}>Stop</button>;
        } else {
          button = <button onClick={this.handleStopwatch}>Start</button>;
        }
        
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {Math.floor(this.state.elapsedTime / 1000)}
                </span>
                {button}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;