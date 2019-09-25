import React from "react";

const OperatorButton = () => {
  return <button
  onClick={() => {
    switch (props.operator.char) {
      case '=':
        return props.setDisplay(eval(props.display))
      default:
        return props.setDisplay(`${props.display}${props.operator.value}`)
    }
  }}
>{props.operator.char}</button>
   
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    
  
};

export default OperatorButton