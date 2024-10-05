import React,{ Component } from "react";
class Greet1 extends Component{
    render(){
        const {name,city}=this.props
        // const {state1,state2}=this.state
        return (
         <h1> Hello {name}
                {city}
        </h1>
        )
    }
}
export default Greet1