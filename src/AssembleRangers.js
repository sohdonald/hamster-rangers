import React, { useState, useEffect } from "react";
import RangerCard from "./RangerCard";
import Filter from "./Filter";
// import ColorFilter from "./ColorFilter";

function AssembleRangers({ team, setTeam }) {
  // combine all the rangers from rangerRoster into one large array
  // converts the json into something we can work with
  const [rangers, setRangers] = useState([]);

  function removeRanger(ranger) {
    setTeam((prev) => prev.filter((item) => item.id !== ranger.id));
  }

  useEffect(() => {
    fetch(`https://hamster-rangers.onrender.com/rangers`)
      .then((r) => r.json())
      .then((rangersJson) => setRangers(rangersJson));
    // setRangers set the current state of rangers to rangersJson
  }, []);
  // making multiple fetches would make this way more complicated than necessary
  // so let's just make it one fetch as it will make it easier to retrieve the data we need

  const [selectedTeam, setSelectedTeam] = useState("All");

  // sort rangers here
  const sortedRangers = [...rangers].sort((rangerA, rangerB) =>
    rangerA.team.localeCompare(rangerB.team)
  );

  const rangerFilterArray = sortedRangers.filter((ranger) => {
    // this creates a copy of sortedRangers array and filters it with
    // the operation below
    if (selectedTeam === "All") {
      return ranger;
    } else {
      return ranger.team === selectedTeam;
    }
  });

  function handleTeamChange(rangerTeam) {
    setSelectedTeam(rangerTeam);
  }

  // function handleColorChange(rangerColor) {
  // }

  return (
    <div>
      <h2>Rangers</h2>
      <Filter selectedTeam={selectedTeam} onTeamChange={handleTeamChange} />
      {/* <ColorFilter/> */}
      <button onClick={() => setTeam([])}>Dismiss All</button>
      <table style={{ width: "80%" }}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Team</th>
          <th>Select</th>
        </tr>
        </thead>
        <tbody>
        {rangerFilterArray.map((ranger) => {
          return (
            <RangerCard
              key={ranger.id}
              rangerName={ranger.name}
              rangerColor={ranger.color}
              rangerTeam={ranger.team}
              ranger={ranger}
              setTeam={setTeam}
              team={team}
              removeRanger={removeRanger}
              isOnTeam={team.includes(ranger)}
            />
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default AssembleRangers;
