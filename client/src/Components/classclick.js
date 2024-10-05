import React, { Component } from 'react';

export class Classclick extends Component {
  Clickhandler(){
    console.log('Clicked the button')
  }
  render() {
    return (
      <div>
        <button onClick={this.Clickhandler}>Click me</button>
      </div>
    );
  }
}

export default Classclick;
