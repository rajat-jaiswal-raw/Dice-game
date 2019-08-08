import React, { Component } from 'react';
import './Die.css';

class Die extends Component{
  constructor(props){
    super(props);
    this.state = {
      numList: ["", "one", "two", "three", "four", "five", "six"]
    }
  }
  render(){
    const num = this.state.numList[this.props.face];
    const faClass = "Die fas fa-dice-"+num;
    return (
      <i className={faClass}></i>
    );
  }
}

export default Die;