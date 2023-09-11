import React, {useState, useEffect} from "react";
import RangerCard from "./RangerCard";

function AssembleRangers() {
    // combine all the rangers from rangerRoster into one large array
    // converts the json into something we can work with
 const [rangers, setRangers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/coconutAvengers`)
        .then((r) => r.json)
        .then((rangers)=> setRangers(rangers))
      }, []);

      useEffect(() => {
        fetch(`http://localhost:4000/soggyPillows`)
        .then((r) => r.json)
        .then((rangers)=> setRangers(rangers))
      }, []);

      useEffect(() => {
        fetch(`http://localhost:4000/tickleElves`)
        .then((r) => r.json)
        .then((rangers)=> setRangers(rangers))
      }, []);

  function renderRangers(url, rangerName, rangerColor) {
    useEffect(() => {fetch(url, {
    body:JSON.stringify({
        name: rangerName,
        color: rangerColor,
    }),
  }) //fetch ends
  .then((r) => r.json)
  .then((rangers)=> setRangers(rangers))
  }, []);
  }

//const rangerDisplay = rangers;
    return (
        <div>
            Recruit 5 rangers
            {/* should show a bunch of ranger cards for
            us to select, is when we recruit, the text should be
            updated with the remaining number of rangers that are needed to
            form the megazord */}
            <RangerCard/>
        </div>
    )
}

export default AssembleRangers;