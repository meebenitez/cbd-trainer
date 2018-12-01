import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: false,
      field: "none"
    }
    this.handleTab = this.handleTab.bind(this)
  }

componentDidMount(){
  document.addEventListener("keydown", this.handleTab, false)
}
componentWillUnmount(){
  document.removeEventListener("keydown", this.handleTab)
}


handleTab(event) {
  
  if (event.keyCode === 9) {
    event.preventDefault();
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




  render() {
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
              <span onClick={this.props.changeTest} className="text-center">{this.props.currentCall}</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
            <div>{this.state.field}</div>
            <form>
              <input type="text" name="level" ref={(input) => { this.levelInput = input; }} /><br></br>
              <input type="text" name="dxCode" ref={(input) => { this.dxCodeInput = input; }} />
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps= state => {
  return {
    test: state.test,
    currentCall: state.currentCall,
    openManual: state.openManual,
    dxCode: state.dxCode,
    result: state.result
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changeTest: () => dispatch({type: 'CHANGE_STATE'}),
    handleDxCode: () => dispatch({type: 'UPDATE_DXCODE'}),
    handleSubmit: () => dispatch({type: 'HANDLE_SUBMIT'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
