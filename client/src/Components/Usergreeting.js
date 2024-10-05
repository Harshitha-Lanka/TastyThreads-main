import React, { Component } from 'react';

 class Usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    // return this.state.isLoggedIn && <div>Welcome to the world</div>
    return this.state.isLoggedIn ?(
    <div>Welcome to the world</div>):(
    <div>welcome guest</div>)
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcometo the world</div>
    // } else {
    //     message=<div>Welcome guest</div>
    // }
    // return<div>{message}</div>
    //sec method
    // if(this.state.isLoggedIn){
    //     return <div>Welcome to the world</div>
    // }else{
    //     return <div>Welcome guest</div>
    // }
    //1st method
    // return (
    //   <div>
    //     <div>welcome to the world</div>
    //     <div>Welcome guest</div>
    //   </div>
    // );
  }
}

export default Usergreeting;
