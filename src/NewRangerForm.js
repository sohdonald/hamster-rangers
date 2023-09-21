// this will be a new route
/**
 * set this up as component, then use routing
 */

import React, { useState } from "react";


function NewRangerForm() {
    const [newName, setNewName] = useState("")
    const [newColor, setNewColor] = useState("red")
    const [newTeam, setNewTeam] =useState("")
    const [newRanger, setNewRanger] =useState("")

// function handleNewRanger() {
// setNewRanger([...rangers, newRanger]);


function handleSubmit(e) {
    e.preventDefault();
    const newRangerData = {
        name: newName,
        color: newColor,
        team: newTeam,
    }
    fetch(`http://localhost:4000/coconutAvengers`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(newRangerData),
    })
    .then((r) => r.json())
    .then((rangerSubmit) => setNewRanger(rangerSubmit))
}

    return(
        <div>
            <form>
                <h2>Name:</h2>
                <input 
                type="text"
                name="name"
                value={newName}
                onChange={(e)=> setNewName(e.target.value)}
                />
                <h2>Color:</h2>
                <input />
                <h2>Team:</h2>
                <input />
            </form>
        </div>
    );
}

export default NewRangerForm;