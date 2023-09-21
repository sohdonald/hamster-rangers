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
    console.log(newRangerData);
    
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
            <form onSubmit={handleSubmit}>
                <label>Name:
                <input 
                type="text"
                name="name"
                value={newName}
                onChange={(e)=> setNewName(e.target.value)}
                />
                </label>
                <label>Color:
                <input 
                type="text"
                name="color"
                value={newColor}
                onChange={(e)=> setNewColor(e.target.value)}
                />
                </label>  
                <label>Team:
                <input 
                type="text"
                name="team"
                value={newTeam}
                onChange={(e)=> setNewTeam(e.target.value)}
                />
                </label>
                <button type="submit">Recruit</button>
            </form>
        </div>
    );
}

export default NewRangerForm;