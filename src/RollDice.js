import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
  constructor(props){
    super(props);
    this.state = {
      die1: 1,
      die2: 1,
      rolling: false
    }
    this.faceChange = this.faceChange.bind(this);
    this.getRandFace = this.getRandFace.bind(this);
    this.roll = this.roll.bind(this);
  }
  getRandFace(){
    return Math.floor(Math.random() * 6) + 1;
  }

  faceChange(){
    this.setState({
      die1: this.getRandFace(),
      die2: this.getRandFace(),
    });
  }

  roll(){
    this.setState({rolling:true});
    let waitTime = 0;
    for(let count = 1; count <= 5; count++){
      waitTime += 200;
      setTimeout(this.faceChange, waitTime);
    }
    setTimeout(() => {
      this.setState({rolling:false});
    }, waitTime);
  }

  render(){
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling? "Rolling...": "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;