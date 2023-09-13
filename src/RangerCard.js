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
  
function handleSelectRanger() {
  if (setSelectRanger("select")) {
    setSelectRanger("deselect")
  } else {
    setSelectRanger("select")
  }
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
