import React, { Component } from 'react';
import Select from 'react-select';
import { pages } from '../../data/data'
import { checkResult } from '../../helpers/gamehelpers'


import './App.css';
import { connect } from 'react-redux';
import * as gameActions from '../../store/gameactions'
import * as keyActions from '../../store/keyactions'

const prettyMs = require('pretty-ms');


class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: false,
      response: "",
      dxCode: "",
      manual: false,
      pageImg: null,
      time: 0,
      start: 0,
      timeOn: false
    }
  }

componentDidMount(){
  this.props.loadCalls()
  this.levelInput.focus()
  document.addEventListener("keydown", this.handleTab, false)
  document.addEventListener("keydown", this.toggleSearchKey, false)
}
componentWillUnmount(){
  document.removeEventListener("keydown", this.handleTab)
  document.removeEventListener("keydown", this.toggleSearchKey)
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

handleSelect = (selection) => {
  this.setState({
      ...this.state,
      pageImg: selection.value,
      manual: !this.state 
  }, this.props.setPageImg(selection.value))
}

handleSubmit = (event) => {
  event.preventDefault()
  if (this.state.response.trim() === "" || this.state.dxCode.trim() === ""){
    alert("No blank fields allowed!")
  } else {
    this.setState({
      ...this.state,
      dxCode: "",
      response: ""
    }, this.props.updateScore(
      checkResult(this.props.calls[this.props.callNum], 
      {response: this.state.response.toUpperCase(), dxCode: this.state.dxCode.toUpperCase()})
    ))
  }
}

handleDxCode = (event) => {
  event.preventDefault();
  this.setState({
    ...this.state,
    dxCode: event.target.value
  })
}

handleResponse = (event) => {
  event.preventDefault();
  this.setState({
    ...this.state,
    response: event.target.value
  })
}


handleTab = (event) => {
  if (event.keyCode === 9) {
    event.preventDefault();
    if (!this.state.manual) {
      if (this.state.tab){
        this.setState({
          tab: !this.state.tab
        })
        this.levelInput.focus()
      } else {
        this.setState({
          tab: !this.state.tab,
          manualFocus: !this.state.manualFocus
        })
        this.dxCodeInput.focus()
      }
    }
  }
}

handleEnter = (event) => {
  if (event.keyCode === 9 && !this.state.manual) {
    event.preventDefault();
    this.handleSubmit();
  }
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
          <div className="row black-background">
            <div className="col-7 pl-4 pt-2">
              <h1>Criteria Based Dispatch</h1>
              <h2>Training Simulator</h2>
            </div>
            <div className="col-5 mt-3">
              <div className="col-12 score-box">
                Total Score: {this.props.score} / 105
                <div>
                  <h3>timer: {prettyMs(this.state.time)}</h3>
                  {start}
                  {resume}
                  {stop}
                  {reset}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-5">
                <div className="col-12 mb-4">
                  <form>
                    <div className="input-holder mt-4">
                      <h2>RESPONSE:</h2>
                      <input type="text" name="level" value={this.state.response} onChange={this.handleResponse} style={{ textTransform: 'uppercase' }} ref={(input) => { this.levelInput = input; }} />
                    </div>
                    <div className="input-holder mt-4">
                      <h2>DX CODE:</h2>
                      <input type="text" name="dxCode" value={this.state.dxCode} onChange={this.handleDxCode} style={{ textTransform: 'uppercase' }} ref={(input) => { this.dxCodeInput = input; }} />
                    </div>
                    <div>
                      <button type="submit" onClick={this.handleSubmit}>Dispatch (RETURN)</button>
                    </div>
                  </form>
                </div>
                <div className="col-12 mb-2">
                  <div className="call-container">
                    <h2>Call Details</h2>
                    <ul>
                      {this.renderCall()}
                    </ul>
                  </div>
                </div>  
              </div>
              <div className="col-7 p-0 m-0">
                <div><button onClick={this.toggleSearchButton}>Search Manual (ALT)</button></div>
                <div>
                  <img src={`img/pages/${this.props.savedPage}`} alt={this.props.savedPage} width="100%"/>
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
    gameHistory: state.game.gameHistory,
    totalCorrect: state.game.totalCorrect,
    totalWrong: state.game.totalWrong,
    times: state.game.times,
    avgTime: state.game.avgTime,
    savedPage: state.key.savedPage,
    callNum: state.game.callNum
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadCalls: () => dispatch(gameActions.loadCalls()),
    updateScore: (result) => dispatch(gameActions.updateScore(result)),
    setPageImg: (pageImg) => dispatch(keyActions.setPageImg(pageImg)),
    incrementCall: () => dispatch(gameActions.incrementCall())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
