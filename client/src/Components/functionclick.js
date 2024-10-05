import React from 'react';

function FunctionClick() {
    function clickhandler(){
        console.log('Button clicked')
    }
  return (
    <div>
      <button onclick={clickhandler}>click</button>
    </div>
  );
}

export default FunctionClick;
