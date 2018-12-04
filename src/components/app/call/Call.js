import React, { Component } from 'react';
const prettyMs = require('pretty-ms');


class Call extends Component {

    constructor(props) {
        super();
    }


    renderCall = (call= this.props.calls[this.props.callNum]) => {
        if (this.props.calls.length > 0) {
            return call.details.map((line, index) => {
                return (
                    <li key={`line${index}`}>{line}</li>
                )
            })
        } 
    }

    renderResult = () => {
        
        if (this.props.callHistory.length > 0 && this.props.lastCall) {
            const result =  this.props.callHistory.filter((call) => {
                return call.callId === this.props.lastCall.id;
            })[0]
            if (result) {
                return (
                    <div>
                        <h2>Call Details</h2>
                        <ul>
                            {this.renderCall(this.props.lastCall)}
                        </ul>
                        <div>Your Response: {result.response} -- "{result.responseResult}"</div>
                        <div>Dispatch Time: {prettyMs(result.time)} ---checker--- </div>
                        <div>CBD Manual Page(s): </div>
                        <div>DxCodes</div>
                        <div>Click the blue "Answer Next Call" button...</div>
                    </div>
    
                )

            }
        } else {
            return null
        }
    }

    
      
    render() {  
        return (
            <div>
                {!this.props.timeOn ? 
                    this.renderResult() : 
                    <div>
                        <h2>Call Details</h2>
                        <ul>
                            {this.renderCall()}
                        </ul>
                    </div> }
                <div>
                {!this.props.timeOn ? null : <h3>Time to Dispatch: {prettyMs(this.props.time)}</h3>}
                </div>
            </div>  
        )
    }
}

export default Call;
