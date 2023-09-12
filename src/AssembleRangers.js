import React, { useState, useEffect } from "react";
import RangerCard from "./RangerCard";

function AssembleRangers() {
  // combine all the rangers from rangerRoster into one large array
  // converts the json into something we can work with
  const [coconuts, setCoconuts] = useState([]);
  const [soggies, setSoggies] = useState([]);
  const [ticklers, setTicklers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/coconutAvengers`)
      .then((r) => r.json())
      .then((rangersJson) => setCoconuts(rangersJson));
    // setRangers set the current state of rangers to rangersJson
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/soggyPillows`)
      .then((r) => r.json())
      .then((soggyJson) => setSoggies(soggyJson));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/tickleElves`)
      .then((r) => r.json())
      .then((tickJson) => setTicklers(tickJson));
  }, []);

  //const rangerDisplay = rangers;
  return (
    <div>
      Recruit 5 rangers
      {/* should show a bunch of ranger cards for
            us to select, is when we recruit, the text should be
            updated with the remaining number of rangers that are needed to
            form the megazord
            
            RangerCard only shows 1 ranger
            so we want to map the jsons we have to convert the json into html
            one object in new array would be a rangerCard 
            
            rangers.map((ranger)=> {return <RangerCard/>})*/}
      <h2>Coconut Avengers</h2>
      {coconuts.map((ranger) => {
        return (
          <RangerCard rangerName={ranger.name} rangerColor={ranger.color} />
        );
      })}
      <h2>Soggy Pillows</h2>
      {soggies.map((ranger) => {
        return (
          <RangerCard rangerName={ranger.name} rangerColor={ranger.color} />
        );
      })}
      <h2>Tickle Elves</h2>
      {ticklers.map((ranger) => {
        return (
          <RangerCard rangerName={ranger.name} rangerColor={ranger.color} />
        );
      })}
    </div>
  );
}

export default AssembleRangers;
