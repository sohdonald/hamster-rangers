import React, { useState } from "react";

function RangerCard({ rangerColor, rangerName }) {
  // seperate useState for counter
  const [rangerCount, setRangerCount] = useState(0);

  const [isSelectHidden, setIsSelectHidden] = useState(false);

    let element = document.getElementsByClassName("ui button")
  if (isSelectHidden) {
    element.remove()
  }

  function toggleRanger() {
    setRangerCount(rangerCount+1);
    setIsSelectHidden(true)
  }
  return (
    <div className="card">
      <h3>name:{rangerName}</h3>
      <div>color:{rangerColor}</div>
      <button className="ui button" onClick={toggleRanger}>
        select
      </button>
      <div>count: {rangerCount}</div>
    </div>
  );
}

export default RangerCard;
