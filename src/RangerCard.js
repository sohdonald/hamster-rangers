import React, { useState } from "react";

function RangerCard() {
    const [isCardHidden, setIsCardHidden] = useState(false);
    
    const {name, color} = ranger;

    if (isCardHidden) {
        return null;
    }

    return (
        <div className="card">
            <h3>name:{name}</h3>
            <div>color:{color}</div>
            <button className="ui button"
            onClick={() => setIsCardHidden(true)}></button>
        </div>
    )
}

export default RangerCard;