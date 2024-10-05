import React, { Component } from 'react';

export class Eventbind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }
    this.clickhandler=this.clickhandler.bind(this)
  }
  clickhandler(){
    this.setState(
      {
      message:'Good byee!'
      }
    )
    console.log(this)
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickhandler()}>Click</button> */}
        <button onClick={this.clickhandler}>Click</button>
      </div>
    );
  }
}

export default Eventbind;
