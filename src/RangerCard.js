import React, { useState } from "react";

function RangerCard({ rangerColor, rangerName }) {
  // seperate useState for counter
  const [rangerCount, setRangerCount] = useState(0);
  

  //const [isSelectHidden, setIsSelectHidden] = useState(false);

  //   let element = document.getElementsByClassName("ui button")
  // if (isSelectHidden) {
  //    element.remove()
  //  }

// we should make a ternary that switches from select and deselect
// selectRanger ? "select":"deselect"
const [selectRanger, setSelectRanger] = useState("select")
  console.log(setSelectRanger) //setSelectRanger is function
function handleSelectRanger() {
setSelectRanger(selectRanger === "deselect" ? "select":"deselect");
// the condition selectRanger === "deselect" evaluates to true or false
// left hand side of ? is the condition we are checking
// right hand side of ? is the output
// left hand side of : is the value returned when the condition is true
// right hand side of : is the value returned when the condition is false
// if true, then the state changes to "select"
// false, state changes to "deselect"
}

  function countRanger() {
    setRangerCount(rangerCount+1);
   // setIsSelectHidden(true)
  }

  return (
    <div className="card">
      <h3>name:{rangerName}</h3>
      <div>color:{rangerColor}</div>
      <button className="ui button" onClick={countRanger}>
      count: {rangerCount}
      </button>
      <button className="select button" onClick={handleSelectRanger}>
       {selectRanger}
      </button>
    </div>
  );
}

export default RangerCard;
