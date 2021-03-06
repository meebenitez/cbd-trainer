import React, { Component } from 'react';
import Select from 'react-select';
import { pages } from '../../data/data'
import { checkResult } from '../../helpers/gamehelpers'
import Call from './call/Call'
import './App.css';
import { connect } from 'react-redux';
import * as gameActions from '../../store/gameactions'
import * as keyActions from '../../store/keyactions'
import Timer from './timer/Timer'
const prettyMs = require('pretty-ms');




class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: false,
      response: "",
      responseOn: false,
      dxCode: "",
      manual: false,
      pageImg: null,
      time: 0,
      start: 0,
    }
  }

componentDidMount(){
  this.props.loadCalls()
  this.levelInput.focus()
  document.addEventListener("keydown", this.handleTab, false)
  document.addEventListener("keydown", this.toggleSearchKey, false)
  document.addEventListener("keydown", this.handleN, false)
  document.addEventListener("keydown", this.handleD, false)
}
componentWillUnmount(){
  document.removeEventListener("keydown", this.handleTab)
  document.removeEventListener("keydown", this.toggleSearchKey)
  document.removeEventListener("keydown", this.handleN)
  document.removeEventListener("keydown", this.handleD, false)
}

handleN = (event) => {
  if (event.shiftKey && event.keyCode === 78 && !this.props.timeOn) {
    event.preventDefault();
    this.props.startTimer()
    this.levelInput.focus()
  }
}

toggleSearchKey = (event) => {
  if (event.keyCode === 18) {
    event.preventDefault();
    this.setState({
      manual: !this.state.manual
    }, () => {
      if (!this.state.manual) {
        this.levelInput.focus()
      }
    })
  }
}

toggleSearchButton = () => {
  this.setState({
    manual: !this.state.manual
  }, () => {
  if (!this.state.manual) {
    this.levelInput.focus()
  }
})

}

handleResponse = (event) => {
  this.setState({
    ...this.state,
    response: event.target.value
  })
}

handleSelect = (selection) => {
  this.setState({
      ...this.state,
      pageImg: selection.value,
      manual: !this.state 
  }, this.props.setPageImg(selection.value))
  this.levelInput.focus();
}



handleTab = (event) => {
  if (event.keyCode === 9) {
    event.preventDefault();
    if (!this.state.manual) {
      this.levelInput.focus();
    }
  }
}


handleSubmit = (event) => {
  event.preventDefault()
  if (this.state.response === ""){
    alert("No blank fields allowed!")
  } else {
    this.sendSubmit();
  }
}


handleD = (event) => {
  if (event.keyCode === 68 && event.shiftKey && !this.state.manual) {
    event.preventDefault();
    if (this.state.response === ""){
      alert("No blank fields allowed!")
    } else {
      this.sendSubmit();
    }
  }
}

sendSubmit = () => {
  this.props.updateScore(
    checkResult(this.props.calls[this.props.callNum], 
    {response: this.state.response, time: this.props.time}));
  this.setState({
      ...this.state,
      response: ""
    });
}


  render() {
    return (
      <div className="wrapper">
          <div className="row black-background">
            <div className="col-6 pl-4 pt-2">
              <h1>Criteria Based Dispatch</h1>
              <h2>Training Simulator</h2>
            </div>
            <div className="col-6 mt-3 p-0">
              <div className="row score-box pt-2">
                <div className="col-6">
                  <span className="font-weight-bold">Best Dispatch Time:</span> {this.props.bestTime ? prettyMs(this.props.bestTime) : null}  <br></br>
                  <span className="font-weight-bold">Avg Dispatch Time:</span> {this.props.avgTimeInfo ? 
                    <span className={this.props.avgTimeInfo.color}>
                      {prettyMs(this.props.avgTimeInfo.avg)} - {this.props.avgTimeInfo.rating}
                    </span>: null}
                </div>
                <div className="col-6">
                <span className="font-weight-bold">Total Score:</span> {this.props.score} / {this.props.callLimit * 20}<br></br> 
                <span className="font-weight-bold">Total Calls Complete: {this.props.callNum} / {this.props.calls.length - 1}</span><br></br>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-5 game-background pl-4 pr-4 pt-2 pb-2">
                <div className="col-12 call-container m-2">
                  <Call {...this.props} />
                </div> 
                <div className="col-12 mb-4">
                  <form>
                    <div className="input-holder mt-2">
                        <span className={!this.props.timeOn ? "disabled" : ""}><h2>RESPONSE:</h2></span>
                        <select name="level" className="level-dropdown" value={this.state.response} disabled={!this.props.timeOn ? "disabled" : ""} onChange={this.handleResponse} ref={(input) => { this.levelInput = input; }}>
                        <option value="">Choose Response</option>
                          <option value="ALS">ALS</option>
                          <option value="BLS">BLS</option>
                        </select> 
                        <div className="mt-2">
                          <button type="submit" className={!this.props.timeOn ? "disabled-button" : "" } onClick={this.handleSubmit}>Dispatch (SHFT + 'D')</button>
                        </div>
                    </div>
                  </form>
                </div>
                <div className="col-12">
                  <Timer {...this.props}/>
                </div>
              </div>
              <div className="col-7 p-0 m-0">
                <div><button onClick={this.toggleSearchButton}>Search Manual (ALT)</button></div>
                <div>
                  <img src={`img/pages/${this.props.savedPage}`} alt={this.props.savedPage} width="98%"/>
                </div>
              </div>
          </div>
        { this.state.manual ? 
          <div className="popup">
            <div className="popup-inner">
              <div className="row">
                  <div className="col-12 mb-2"><h2>Type to Search...</h2></div>
                  <div className="col-12">
                      <Select 
                          options={pages}
                          value={this.state.pageImg}
                          onChange={this.handleSelect}
                          autoFocus={true} />
                  </div>
              </div>
            </div>
          </div> : null }
      </div>
    );
  }
}

const mapStateToProps= state => {
  return {
    calls: state.game.calls,
    result: state.game.result,
    timeLeft: state.game.timeLeft,
    inProgress: state.game.inProgress,
    score: state.game.score,
    callHistory: state.game.callHistory,
    avgTime: state.game.avgTime,
    savedPage: state.key.savedPage,
    callNum: state.game.callNum,
    time: state.game.time,
    start: state.game.start,
    timeOn: state.game.timeOn,
    callLimit: state.game.callLimit,
    lastCall: state.game.lastCall,
    avgTimeInfo: state.game.avgTimeInfo,
    bestTime: state.game.bestTime
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadCalls: () => dispatch(gameActions.loadCalls()),
    updateScore: (result) => dispatch(gameActions.updateScore(result)),
    setPageImg: (pageImg) => dispatch(keyActions.setPageImg(pageImg)),
    incrementCall: () => dispatch(gameActions.incrementCall()),
    startTimer: () => dispatch(gameActions.startTimer()),
    stopTimer: () => dispatch(gameActions.stopTimer()),
    updateLastCall: () => dispatch(gameActions.updateLastCall)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
