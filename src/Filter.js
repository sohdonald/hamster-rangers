/** this is where we will filter the ranger table by team or color*/
import React from "react";

function Filter({ selectedTeam, onTeamChange}) {
  // need onTeamChange function in AssembleRangers, pass as prop here
  return (
    <>
      <select
        name="filter-team"
        value={selectedTeam}
        onChange={(e) => onTeamChange(e.target.value)}
      >
        <option value="All">Filter by Team</option>
        <option value="Coconut Avengers">Coconut Avengers</option>
        <option value="Soggy Pillows">Soggy Pillows</option>
        <option value="Tickle Elves">Tickle Elves</option>
        <option value="Clean Towels">Clean Towels</option>
        <option value="Fuzzy Pumpkins">Fuzzy Pumpkins</option>
      </select>
    </>
  );
}

export default Filter;
