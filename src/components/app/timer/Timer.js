import React, { Component } from 'react';


class Timer extends Component {

    constructor(props) {
        super();
        this.state = {

        }
    }

      
      render() {

        const start = (this.props.time === 0 && !this.props.timeOn && this.props.callNum < this.props.callLimit) ?
            <button className="call-button" onClick={this.props.startTimer}>{this.props.callNum === 0 ? 'Answer Call (SHFT + N)' : 'Answer Next Call (SHFT + N)'}</button> : null;
        return (
          <div className="col-12 p-0 ml-0 mt-5">
            <div className="call-button-container ml-0 mt-2">
              {start}
            </div>
          </div>
    
        )}
        
}

export default Timer;
