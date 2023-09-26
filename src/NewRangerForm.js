// this will be a new route
/**
 * set this up as component, then use routing
 */

import React, { useState } from "react";

function NewRangerForm() {
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState("red");
  const [newTeam, setNewTeam] = useState("Soggy Pillows");
  const [newRanger, setNewRanger] = useState("");

  // function handleNewRanger() {
  // setNewRanger([...rangers, newRanger]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRangerData = {
      name: newName,
      color: newColor,
      team: newTeam,
    };
    console.log(newRangerData);

    fetch(`http://localhost:4000/rangers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRangerData),
    })
      .then((r) => r.json())
      .then((rangerSubmit) => setNewRanger(rangerSubmit));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Color:
          <select
            id="submitColor"
            type="text"
            name="color"
            value={newColor}
            // change this into select html element
            onChange={(e) => setNewColor(e.target.value)}
          >
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="pink">pink</option>
          </select>
        </label>
        <label>
          Team:
          <select
            id="submitTeam"
            type="text"
            name="team"
            value={newTeam}
            // let's change this into a select html element
            onChange={(e) => setNewTeam(e.target.value)}
          >
            <option value="Soggy Pillows">Soggy Pillows</option>
            <option value="Tickle Elves">Tickle Elves</option>
            <option value="Clean Towels">Clean Towels</option>
            <option value="Fuzzy Pumpkins">Fuzzy Pumpkins</option>
            <option value="Coconut Avengers">Coconut Avengers</option>
          </select>
        </label>
        <button type="submit">Recruit</button>
        <h2>Bob has been recruited!</h2>
      </form>
    </div>
  );
}

export default NewRangerForm;
