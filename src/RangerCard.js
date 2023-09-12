import React, { useState } from "react";

function RangerCard({ rangerColor, rangerName }) {
  const [isCardHidden, setIsCardHidden] = useState(false);

  if (isCardHidden) {
    return null;
  }

  return (
    <div className="card">
      <h3>name:{rangerName}</h3>
      <div>color:{rangerColor}</div>
      <button
        className="ui button"
        onClick={() => setIsCardHidden(true)}
      ></button>
    </div>
  );
}

export default RangerCard;
