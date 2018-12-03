import React, { Component } from 'react';
import Timer from '../timer/Timer'
const prettyMs = require('pretty-ms');


class Call extends Component {

    constructor(props) {
        super();
    }


    renderCall(){
        if (this.props.calls.length > 0) {
            return this.props.calls[this.props.callNum].details.map((line, index) => {
            return (
                <li key={`line${index}`}>{line}</li>
            )
            })
        } 
    }

    
      
    render() {  
        return (
            <div>
                {this.props.callReady ? 
                    <div>start call</div> : 
                    <div className="call-container">
                        <h2>Call Details</h2>
                        <ul>
                            {this.renderCall()}
                        </ul>
                        <Timer callReady={this.props.callReady}/>
                    </div> }
                <div>
                </div>
            </div>  
        )
    }
}

export default Call;
