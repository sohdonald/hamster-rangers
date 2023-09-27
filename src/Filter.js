/** this is where we will filter the ranger table by team or color*/
import React from "react";
import AssembleRangers from "./AssembleRangers";

function Filter ({rangerTeam, onTeamChange, rangerColor, onRangerColor}) {

// need onTeamChange function in AssembleRangers, pass as prop here
return (
    <>
    <select
    name="filter"
    value={rangerTeam}
    onChange={(e) => onTeamChange(e.target.value)}
    >
        <option value="All">Filter by Team</option>
        <option value="Coconut Avengers">Coconut Avengers</option>
        <option value="Soggy Pillows">Soggy Pillows</option>
        <option value="Tickle Elves">Tickle Elves</option>
        <option value="Clean Towels">Clean Towels</option>
        <option value="Fuzzy Pumpkins">Fuzzy Pumpkins</option>

    </select>
    <select
    name="filter"
    value={rangerColor}
    onChange={(e) => onRangerColor(e.target.value)}
    >
        <option value="All">Filter by Color</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
        <option value="green">green</option>
        <option value="pink">pink</option>

    </select>
    </>
);
}

export default Filter;
