import React, { useState } from "react";
import SummonMegazord from "./SummonMegazord";

function RangerCard({
  rangerColor,
  rangerName,
  onCountDown,
  onCountUp,
  countDown,
}) {
  // seperate useState for counter

  console.log(onCountDown);
  console.log(onCountUp);

  const [selectRanger, setSelectRanger] = useState("select");
  //setSelectRanger is function
  console.log(selectRanger); // outputs "select"

  function handleSelectRanger() {
    // we should make a ternary that switches from select and deselect
    setSelectRanger(selectRanger === "deselect" ? "select" : "deselect");
    // the condition selectRanger === "deselect" evaluates to true or false
    // left hand side of ? is the condition we are checking
    // right hand side of ? is the output
    // left hand side of : is the value returned when the condition is true
    // right hand side of : is the value returned when the condition is false
    // if true, then the state changes to "select"
    // false, state changes to "deselect

    if (selectRanger === "select" && countDown >= 1) {
      onCountDown(); // stops substracting after we reach -1, why?
      // onCountdown = countDown - 1
      // 0 - 1 = -1
    } else if (selectRanger === "deselect") {
      // we need to check 2 conditions
      // 1. selectRanger = "deselect"
      // 2. count >= 0

      // selectRanger==="deselect" && count >= 0

      // selectRanger === "deselect" is first condition
      // && checks if both conditions are true
      // count is a place holder of the number of rangers we selected

      /* onCountDown() >= 0 doesn't work
        onCountDown() is a function
        they don't hold the value we need
        
      */

      // clicking deselect adds the count to 1 to countDown
      // have the condition of onCountDown >= 0
      // const countUp =  + 1
      // can't be less than 0
      onCountUp();
    }
  }

// [..., handleSelectRanger]
// need the selected rangers' names and colors
// doesn't have this info at the beginning
// we need to create this array with existing data
// we need useState

  console.log(onCountDown); // this is undefined, it's not misspelled
  // each rangerCard is outputting this console log, NOT just outputting it once

  /* have the onCountDown decrease by 1 with each ranger that has the select button
  set as "deselect" 
  
  Then have onCountDown increase by 1 with each select button set as "select", max at 5
  */

  // function countRanger() {
  //   setRangerCount(rangerCount + 1);
  // }

  return (
    <div className="card">
      <h3>name: {rangerName}</h3>
      <div>color: {rangerColor}</div>
      <button className="select button" onClick={handleSelectRanger}>
        {/* how do we decrease the number displayed in SelectRangers with this button? */}
        {selectRanger}
      </button>
      <SummonMegazord
        rangerColor={rangerColor}
        rangerName={rangerName}
        countDown={countDown}
      />
    </div>
  );
}

export default RangerCard;
