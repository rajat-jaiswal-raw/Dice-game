import React, { Component } from 'react';
import './RollDice.css';
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
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.faceChange}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;