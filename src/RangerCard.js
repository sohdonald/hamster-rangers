import React, { useState } from "react";


function RangerCard({rangerColor, rangerName}) {

    // useEffect(() => {
    //     fetch(`http://localhost:4000/${rangerTeam}`)
    //     .then((r) => r.json)
    //     .then((rangers)=> setRangers(rangers))
    //   }, []);
      
    const [isCardHidden, setIsCardHidden] = useState(false);
    // const {name, color} = ranger;

    if (isCardHidden) {
        return null;
    }

    return (
        <div className="card">
            <h3>name:{rangerName}</h3>
            <div>color:{rangerColor}</div>
            <button className="ui button"
            onClick={() => setIsCardHidden(true)}></button>
        </div>
    )
}

export default RangerCard;