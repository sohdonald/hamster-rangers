// this will be a new route
/**
 * set this up as component, then use routing
 */

import React, { useState } from "react";
import styles from "./NewRangerForm.module.css"

function NewRangerForm() {
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState("red");
  const [newTeam, setNewTeam] = useState("Soggy Pillows");
  const [newRanger, setNewRanger] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false)

  // how do we make the h2, "Bob has been recruited!"
  // change to say "newName" has been recruited!

// make the text of h2 change from
// "Recruit a new ranger." to "[newName] has been recruited!" after we click submit
// what do we need to keep track of?
// if submit button is clicked, clickSubmit is true and "[newName] has been recruited is displayed"
// if the newName is not equal to the previous name we submitted, it goes back to "recruit a new..."
// newName != newName

function handleClickSubmit() {
  setClickSubmit(true)
}

function handleH2State() {
if (clickSubmit === false) {
   return <h2>Recruit a new ranger</h2>
} else {
   return <h2>{newName} has been recruited</h2>
}
}

console.log(clickSubmit)

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
      .then((rangerSubmit) => {
        setNewRanger(rangerSubmit)
      handleClickSubmit()
   });
  }

  return (
    <div className={styles.submit}>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value)
              setClickSubmit(false)  
            }}
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
        <button className={styles.button} type="submit">Recruit</button>
        {handleH2State()}
      </form>
    </div>
  );
}

export default NewRangerForm;
