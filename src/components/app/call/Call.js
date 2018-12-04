import React, { Component } from 'react';
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
                {!this.props.timeOn ? 
                    null : 
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
