import React, { Component } from 'react';
import './index.css';

import autobind from 'autobind-decorator';
import classNames from 'classnames';

import logo from 'assets/logo.svg';
import { Button } from 'antd';

class PickList extends Component {
  constructor(props) {
    super(props);
     
  }

  componentDidMount() {
   
  }

  @autobind
  goToWaveSeting(){
    
  }


  componentWillMount() {
   
  }

  componentWillUnmount() {
   
  }

  render() {
    const {
      dispatch
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
        <Button type="primary">Button</Button>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
