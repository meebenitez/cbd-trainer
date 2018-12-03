import React, { Component } from 'react';
import Manual from '../manual/Manual'
import './App.css';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import * as gameActions from '../../store/gameactions'
import * as keyActions from '../../store/keyactions'


class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: false,
      field: "none",
      manual: false
    }
    this.handleTab = this.handleTab.bind(this)
    this.toggleManual = this.toggleManual.bind(this)
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
  if (event.keyCode === 32) {
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


handleTab(event) {
  if (event.keyCode === 9) {
    event.preventDefault();
    if (!this.state.manual) {
      if (this.state.tab){
        this.setState({
          field: "level",
          tab: !this.state.tab
        })
        this.levelInput.focus()
      } else {
        this.setState({
          field: "dxcode",
          tab: !this.state.tab
        })
        this.dxCodeInput.focus()
      }
    }
  }
}




  render() {
    console.log(this.props.currentCall)
    return (
      <div>
        <Grid container spacing={24} style={{padding: 6}}>
          <Grid item sm={12} style={{textAlign: "center"}}>
            <div className="header">
              <h1>Criteria Based Dispatch</h1>
              <h2>Training Simulator</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
            <div className="call-container">
              <span onClick={this.props.changeTest} className="text-center">Call Details:</span>
              <div>
                <p>29 y/o male</p>
                <p>slurred speech</p>
                <p>possible alcohol intoxication</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
            <form>
              <div className="input-holder">
                <h2>RESPONSE:</h2>
                <input type="text" name="level" style={{ textTransform: 'uppercase' }} ref={(input) => { this.levelInput = input; }} />
              </div>
              <div className="input-holder">
                <h2>DX CODE:</h2>
                <input type="text" name="dxCode" style={{ textTransform: 'uppercase' }} ref={(input) => { this.dxCodeInput = input; }} />
              </div>
            </form>
          </Grid>
        </Grid>
        { this.state.manual ? <div className="popup"><div className="popup-inner"><Manual {...this.props} /></div></div> : null }
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
    setPageImg: (pageImg) => dispatch(keyActions.setPageImg(pageImg))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
