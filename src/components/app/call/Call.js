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
        
        if (this.props.callHistory && this.props.callHistory.length > 0 && this.props.lastCall) {
            const result =  this.props.callHistory.filter((call) => {
                return call.callId === this.props.lastCall.id;
            })[0]
            if (result) {
                return (
                    <div>
                        <h2>Call #{this.props.callNum}</h2>
                        <ul>
                            {this.renderCall(this.props.lastCall)}
                        </ul>
                        <div>
                            <div>
                                <span className="font-weight-bold">Your Response:</span> 
                                <span style={{color: `${result.responseColor}`}}>&nbsp;&nbsp;{result.response} -- "{result.responseResult.toUpperCase()}"</span> 
                                <span className="points">+ {result.responsePoints} points</span>
                            </div>
                            {result.timeResult ? 
                                <div>
                                    <span className="font-weight-bold">Dispatch Time:</span>
                                    <span style={{color: `${result.timeColor}`}}>&nbsp;&nbsp;{prettyMs(result.time)} -- "{result.timeResult.toUpperCase()}"</span>
                                    <span className="points">+ {result.timePoints} points</span>
                                </div>
                            : null }
                            <div><span className="font-weight-bold">CBD Manual Page(s):</span> 
                                <ul>
                                    {this.props.lastCall.pages.map((page) => {
                                        return (
                                            <li>"{page}"</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div><span className="font-weight-bold">DxCodes:&nbsp;</span> {
                                this.props.lastCall.result.codes.map((code) => {
                                    return (
                                        <span>{code}</span>
                                    )
                                })
                            }</div>
                        </div>
                    </div>
    
                )

            }
        } else {
            return (
                <div>
                    <h3>Welcome to your CBD Training!</h3>
                    <p>To begin, press the blue "Answer Call" button (or press SHFT + N) and a call will be loaded.</p>
                    <p>Identify the correct response (ALS for "Advanced Life Support" or BLS for "Basic Life Support") in the dropdown below and then dispatch the call with the "Dispatch" button (or press SHFT + D).</p>
                    <p>Your results will be timed, scored and available to view after each dispatch, and you will be able to start a new call whenever you see the blue button.</p>
                    <h3>Good Luck!</h3>
                </div>
            )
        }
    }

    
      
    render() {  
        return (
            <div className="mt-3">
                {!this.props.timeOn ? 
                    this.renderResult() : 
                    <div>
                        <h2>Call #{this.props.callNum + 1}</h2>
                        <ul>
                            {this.renderCall()}
                        </ul>
                        <div>
                            {!this.props.timeOn ? null : 
                                <div className="timer p-0 mb-2">
                                    <div className="timer-label">
                                        TIME TO DISPATCH 
                                    </div>
                                    <div className="timer-numbers">
                                        {prettyMs(this.props.time)}
                                    </div>
                                </div>}
                        </div>
                    </div> }
            </div>  
        )
    }
}

export default Call;
