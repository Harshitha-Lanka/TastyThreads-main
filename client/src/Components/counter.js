import React, { Component } from 'react';


 class Counter extends Component { 
    constructor(props) {
      super(props)
    
      this.state = {
         Count:0
      }
    }
    Increment(){
        this.setState({
            Count:this.state.Count+1
        })
    console.log(this.state.Count)
    }
  render() {
    return (
        <div>
            <div><h1>
            Count-{this.state.Count}
            </h1>
        </div>
            <button onClick={()=>this.Increment()}>Increment</button>

    </div>
    )
  }
}

export default Counter
