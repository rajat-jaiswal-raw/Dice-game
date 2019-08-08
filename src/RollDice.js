import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  render(){
    return (
      <div>
        <Die face={4} />
        <Die face={3} />
      </div>
    );
  }
}

export default RollDice;