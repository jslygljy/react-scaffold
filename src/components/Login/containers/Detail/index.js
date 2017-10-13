import React from "react";
import './index.css';

import autobind from 'autobind-decorator';
import classNames from 'classnames';

class PickList extends YHPage {
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
      <div onClick={this.goToWaveSeting}></div>
    )
  }
}
