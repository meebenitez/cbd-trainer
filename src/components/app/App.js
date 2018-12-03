import React, { Component } from 'react';
import Page from '../manual/Page'
import Select from 'react-select';
import { pages } from '../../data/data'


import './App.css';
import { connect } from 'react-redux';
import * as gameActions from '../../store/gameactions'
import * as keyActions from '../../store/keyactions'


class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: false,
      response: "",
      dxCode: "",
      manual: false,
      pageImg: null,
    }
    this.handleTab = this.handleTab.bind(this)
    this.toggleManual = this.toggleManual.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDxCode = this.handleDxCode.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
  }

componentDidMount(){
  this.levelInput.focus()
  document.addEventListener("keydown", this.handleTab, false)
  document.addEventListener("keydown", this.toggleManual, false)
}
componentWillUnmount(){
  document.removeEventListener("keydown", this.handleTab)
  document.removeEventListener("keydown", this.toggleManual)
}

toggleManual(event) {
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
handleSelect = (selection) => {
  this.setState({
      ...this.state,
      pageImg: selection.value,
      manual: !this.state 
  }, this.props.setPageImg(selection.value))
}

handleSubmit() {
  this.props.submitAnswer( {response: this.state.response, dxCode: this.state.dxCode} )
}

handleDxCode(event){
  event.preventDefault();
  this.setState({
    ...this.state,
    dxCode: event.target.value
  })
}

handleResponse(event){
  event.preventDefault();
  this.setState({
    ...this.state,
    response: event.target.value
  })
}


handleTab(event) {
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






  render() {
    console.log(this.props.currentCall)
    return (
      <div className="col-12">
          <div className="row black-background">
            <div className="col-7 pl-4 pt-2">
              <h1>Criteria Based Dispatch</h1>
              <h2>Training Simulator</h2>
            </div>
            <div className="col-5 mt-3">
              <div className="col-12 score-box">
                Score box
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-5">
                <div className="col-12 mb-4">
                  <form>
                    <div className="input-holder">
                      <h2>RESPONSE:</h2>
                      <input type="text" name="level" onChange={this.handleResponse} style={{ textTransform: 'uppercase' }} ref={(input) => { this.levelInput = input; }} />
                    </div>
                    <div className="input-holder">
                      <h2>DX CODE:</h2>
                      <input type="text" name="dxCode" onChange={this.handleDxCode} style={{ textTransform: 'uppercase' }} ref={(input) => { this.dxCodeInput = input; }} />
                    </div>
                    <div>
                      <button type="submit" onClick={this.handleSubmit}>Dispatch</button>
                    </div>
                  </form>
                </div>
                <div className="col-12 mb-2">
                  <div className="call-container">
                    <span onClick={this.props.changeTest} className="text-center">Call Details:</span>
                    <div>
                      <p>29 y/o male</p>
                      <p>slurred speech</p>
                      <p>possible alcohol intoxication</p>
                    </div>
                  </div>
                </div>  
              </div>
              <div className="col-7 p-0 m-0">
                  <img src={`img/pages/${this.props.savedPage}`} alt={this.props.savedPage} width="100%"/>
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
    currentCall: state.game.currentCall,
    result: state.game.result,
    timeLeft: state.game.timeLeft,
    inProgress: state.game.inProgress,
    score: state.game.score,
    totalCorrect: state.game.totalCorrect,
    totalWrong: state.game.totalWrong,
    times: state.game.times,
    avgTime: state.game.avgTime,
    savedPage: state.key.savedPage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadGame: () => dispatch(gameActions.loadGame()),
    loadCalls: () => dispatch(gameActions.loadCalls()),
    submitAnswer: (answer) => dispatch(gameActions.submitAnswer(answer)),
    setPageImg: (pageImg) => dispatch(keyActions.setPageImg(pageImg))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
