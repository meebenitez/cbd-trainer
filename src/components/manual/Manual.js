import React, { Component } from 'react';
import Page from './Page'
import './Manual.css';

class Manual extends Component {
  constructor(props) {
    super();

    }
    
  render() {
    return (
      <Page {...this.props} />
    );
  }
}


export default Manual;
