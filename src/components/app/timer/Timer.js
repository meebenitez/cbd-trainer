import React, { Component } from 'react';
const prettyMs = require('pretty-ms');


class Timer extends Component {

    constructor(props) {
        super();
        this.state = {

        }
    }


    componentDidMount(){        
        document.addEventListener("keydown", this.handleN, false)
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.handleN)
      }


      handleN = (event) => {
        if (event.keyCode === 78 && !this.state.timeOn) {
          event.preventDefault();
          //this.props.toggleCallReady()
          this.setState({
            ...this.state,
            timeOn: true
          }, this.startTimer())
          console.log(this.state.timeOn)
            
        }
      }


      
      resetTimer = () => {
        this.setState({time: 0})
        console.log("reset")
      }

      
      render() {

        const start = (this.props.time === 0 && !this.props.timeOn && this.props.callNum < this.props.callLimit) ?
            <button className="call-button" onClick={this.props.startTimer}>{this.props.callNum === 0 ? 'Answer Call (N)' : 'Answer Next Call (N)'}</button> : null;
        
        return (
          <div className="col-12">
            <div className="mt-5">
              {start}
            </div>
            {!this.props.timeOn ? null : <h3>Time to Dispatch: {prettyMs(this.props.time)}</h3>}
            </div>
    
        )}
        
}

export default Timer;
