import React from "react";
const Hello=()=>{
    // return(
    // <div>
    //     <h1>Hello This is Yeshwanth</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'Hello',class:'dummyclass'},
    React.createElement('div',null,<h1>Hello</h1>))
}
export default Hello