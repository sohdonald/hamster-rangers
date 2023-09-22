import React, { useState, useEffect } from "react";
import RangerCard from "./RangerCard";

function AssembleRangers({onCountDown, onCountUp, countDown}) {
  // combine all the rangers from rangerRoster into one large array
  // converts the json into something we can work with
  const [rangers, setRangers] = useState([]);


  // console.log(onCountDown)

  useEffect(() => {
    fetch(`http://localhost:4000/rangers`)
      .then((r) => r.json())
      .then((rangersJson) => setRangers(rangersJson));
    // setRangers set the current state of rangers to rangersJson
  }, []);
// making multiple fetches would make this way more complicated than necessary
// so let's just make it one fetch as it will make it easier to retrieve the data we need


  return (
    <div >
      {/* should show a bunch of ranger cards for
            us to select, is when we recruit, the text should be
            updated with the remaining number of rangers that are needed to
            form the megazord
            
            RangerCard only shows 1 ranger
            so we want to map the jsons we have to convert the json into html
            one object in new array would be a rangerCard 
            
            rangers.map((ranger)=> {return <RangerCard/>})*/}

      <h2>Rangers</h2>
      {rangers.map((ranger) => {
        return (
          <RangerCard key={ranger.id} rangerName={ranger.name} rangerColor={ranger.color} onCountDown={onCountDown} onCountUp={onCountUp} countDown={countDown}/>
        );
      })}
    </div>
  );
}

export default AssembleRangers;
