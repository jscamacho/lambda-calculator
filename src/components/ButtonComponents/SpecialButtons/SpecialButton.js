import React from "react";

const SpecialButton = props => {
  return  <button
  style={{ gridArea: cn(props.special) }}
  onClick={() => props.setDisplay(0)}>{props.special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    

};

export default SpecialButton