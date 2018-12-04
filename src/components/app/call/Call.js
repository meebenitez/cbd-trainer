import React, { Component } from 'react';
import Timer from '../timer/Timer'

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
                    <div>start call <Timer {...this.props} /></div> : 
                    <div className="call-container">
                        <h2>Call Details</h2>
                        <ul>
                            {this.renderCall()}
                        </ul>
                        <Timer {...this.props}/>
                    </div> }
                <div>
                </div>
            </div>  
        )
    }
}

export default Call;
