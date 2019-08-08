import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  constructor(props){
    super(props);
    this.state = {
      die1: 1,
      die2: 1,
    }
    this.faceChange = this.faceChange.bind(this);
    this.getRandFace = this.getRandFace.bind(this);
  }
  getRandFace(){
    return Math.floor(Math.random() * 6) + 1;
  }
  faceChange(){
    this.setState({
      die1: this.getRandFace(),
      die2: this.getRandFace()
    })
    console.log(this.state);
  }
  render(){
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.faceChange}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;