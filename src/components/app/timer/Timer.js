import React, { Component } from 'react';
const prettyMs = require('pretty-ms');


class Timer extends Component {

    constructor(props) {
        super();
        this.state = {
        time: 0,
        start: 0,
        timeOn: false,
        newCallPrompt: false,
        }
    }


    componentDidMount(){        
        document.addEventListener("keydown", this.handleN, false)
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.handleN)
      }


      handleN = (event) => {
        if (event.keyCode === 78 && !this.state.timeOn && this.props.callReady) {
          event.preventDefault();
          this.startTimer()
        }
      }

    startTimer = () => {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            timeOn: true
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1)
        console.log("start")
      }
      
      stopTimer = () => {
        this.setState({timeOn: false})
        clearInterval(this.timer)
        console.log("stop")
      }
      
      resetTimer = () => {
        this.setState({time: 0})
        console.log("reset")
      }

      
      render() {

        const start = (this.state.time === 0 && !this.state.timeOn) ?
          <button onClick={this.startTimer}>Start</button> : null
        const stop = (this.state.timeOn) ?
          <button onClick={this.stopTimer}>Stop</button> : null
        const reset = (this.state.time !== 0 && !this.state.timeOn) ?
          <button onClick={this.resetTimer}>Reset</button> : null
        const resume = (this.state.time !== 0 && !this.state.timeOn) ?
          <button onClick={this.startTimer}>Resume</button> : null
    
    
        return (
          <div className="col-12">
            <h3>Time to Dispatch: {prettyMs(this.state.time)}</h3>
            {start}
            {resume}
            {stop}
            {reset}
            </div>
    
        )}
        
}

export default Timer;
