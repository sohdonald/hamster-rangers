/* 
summonMegazord is a component that executes only when 5 rangers are selected
we want to make a bunch of megazords with different conditions
*/

import React from "react";

function SummonMegazord({ team }) {

  function handleMegaMessage() {
    if (team.length === 5) {
      return <h2>Here Comes a New Megazord!</h2>
    } else {
      return <h2>Create a Megazord.</h2>
    }
  }

  function handleMegazord() {
    if (team.length === 5) {
      let rangerColors = team.map((ranger) => ranger.color);
      let megazord = "calculating megazord";
      let r = 0;
      let y = 0;
      let b = 0;
      let g = 0;
      let p = 0;
    

      rangerColors.forEach((color) => {
        if (color === "red") {
          r = r + 1;
        } else if (color === "yellow") {
          y = y + 1;
        } else if (color === "blue") {
          b = b + 1;
        } else if (color === "green") {
          g = g + 1;
        } else if (color === "pink") {
          p = p + 1;
        }
      }); // end forEach

      if (r === 3 && y === 2) {
        megazord = "Bloody Banana";
      } else if (p === 3 && b === 1 && y === 1) {
        megazord = "Pink Lemonade";
      } else if (p === 1 && r === 1 && y === 3) {
        megazord = "Super Sour";
      } else if (b === 3 && y === 1 && r === 1) {
        megazord = "Boring Suitcase";
      } else if (p === 1 && g === 1 && b === 1 && y === 1 && r === 1) {
        megazord = "Classic Coke";
      } else if (r === 5) {
        megazord = "Promoting Violence";
      } else if (b === 4 && g === 1) {
        megazord = "Invisible Hamster King";
      } else if (r === 1 && b === 3 && p === 1) {
        megazord = "Cuban Pete";
      } else if (g === 4 && p === 1) {
        megazord = "Mighty Pinecone";
      } else {
        megazord = "Cheap Knockoff";
      }

      return megazord;
    } 
  }

  return (
    <div>
      {/* can we do something similar to what we did with NewRangerForm's h2?*/}
      {handleMegaMessage()}
      <h1>{handleMegazord()}</h1>
    </div>
  );
}

export default SummonMegazord;

/* the switch statement allows us to make multiple cases
    each case has their own set of conditions 
    the case 'Fuzzy Sock Monkey' is checking the Megazord variable. 
    
    The Megazord variable is the EXPRESSION and the expression's VALUE
    is being checked by the case clauses.

    If the VALUE matches any of the case clauses, the statements in rangers below the matching case are executed
    What happens when statements are 'executed'?
    What does 'executed' mean in this case?

    The 'executed' statements are turned into OPERATIONS that the computer can operate.  
    When statements are 'executed', the operations tell the computer WHAT TO DO.
    We are TELLING the computer to CHECK THE VALUE of the Megazord EXPRESSION and
    PERFORM THE OPERATION that is DEFINED IN THE STATEMENTS contained in the MATCHING CASE CLAUSE
*/

/** the statements in rangers are strings,
 *  but the data we need are keys from objects
 * So we need to convert this data
 *
 * didn't we already convert this data in AssembleRangers
 * How do we pass it down here?
 *
 * rangerColor and rangerName are the props we need
 *
 * Even that would not be enough
 * How would the 'stringified' data know to check if the statements match?
 * Especially since the statements themselves don't tell specifically to
 * look for name: and color:
 *
 * I was thinking e.target would be useful, but
 * what does e.target do?  Would it really 'target' the data we want to check?
 *
 *
 * it would be confusing if we have to do something like this
 * rangers = `rangers.color===red && rangers.color===yellow && rangers.color===green...`
 * besides, this wouldn't work anyway because it would only output objects that matches ALL these conditions
 * instead of ASSIGNING a different 'check' FOR EACH ranger we selected
 *
 * there's gotta be a way to check and match data that doesn't look confusing
 */
