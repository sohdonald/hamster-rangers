/* 
summonMegazord is a button that works only when 5 rangers are selected

when 5 rangers are selected, it checks from an object array of Megazords
that fulfill the conditions of the SummonBy key

we want to make a bunch of megazords with different conditions

we need to do something like this

const order = 'cheeseburger';

let ingredients;

switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}

*/

import React from "react";

function SummonMegazord({ team }) {
  // how do we make the value dynamic?

  /** we need to convert the arrays in rangerColor
 * into string arrays like this
 * rangerColor = ["red", "blue", "yellow", "green", "pink"]
 * 
 * [..., rangerColor]
 * 
    how do we create a new array with only the 5 rangers selected?
*/
  // ["red","red","red","yellow","yellow"]: 'Bloody Banana',
  //      ["pink","pink","pink","blue","yellow"]: 'Pink Lemonade',
  //     ["yellow","yellow","yellow","red","pink"]: 'Super Sour',
  //     ["blue","blue","blue","yellow","red"]: 'Boring Suitcase',

  // we can use search based on colors

  function handleMegazord() {
    if (team.length === 5) {
      let rangerColors = team.map((ranger) => ranger.color);
      let colorString = rangerColors.join(", ");
      let megazord = "calculating megazord";
      let r = 0;
      let y = 0;
      let b = 0;
      let g = 0;
      let p = 0;
      console.log(colorString);
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
        console.log(r, y, b, g, p);
      });

      // rangerColors is currently an array of strings
      // rangerColors combine existing array as a string
      // we want to compare contents of rangerColors to contents of Bloody Banana
      // for loop by comparing each item
      //  for ([initialization],[condition],[iteration]) {[loop body]}
      /** INITIALIZATION is the variable we begin with
       * CONDITION is the expression evaluated before each pass through the loop, if expression
       * is true, the statements in the LOOP BODY are executed
       * ITERATION is the expression executed at the end of each iteration */
      /**goal is to return a specific megazord based on colors
       * how do we compare rangerColors with a condition?
       */
      /** if r = 0
       * then 'red, red, red' = 3r
       * r keeps track of number of rangers with color = 'red'
       * we need a way to keep track of r

      need to check each ranger color from rangers object array
      datatype of rangerColor is a string
      for each 'red', increase r by +1
      compare 'red' in colorString
      colorString is a string
      rangerColors.forEach((color)=>console.log(color))
      
       */
      /**compare with if  */
      if (r === 3 && y === 2) {
        megazord = "Bloody Banana";
      } else if (p === 3 && b === 1 && y === 1) {
        megazord = "Pink Lemonade";
      } else if (p === 1 && r === 1 && y === 3) {
        megazord = "Super Sour";
      } else if (b === 3 && y ===1 && r === 1) {
        megazord = "Boring Suitcase"
      } else {
        megazord = "Cheap Knockoff"
      }

      console.log(megazord);
      return megazord;
    }
  }

  // function handleMegazordButton() {
  //   //console.log("countDown", countDown)
  //   if (countDown === 0) {
  //     handleMegazord();
  //   }
  // }

  return (
    <div>
      {/* <button onClick={handleMegazordButton}>Summon Megazord</button> */}
      <h2>Here Comes A New Megazord!</h2>
      <h1>{handleMegazord()}</h1>
      {/* we are really close to figuring this out
    we know that the handleMegazordButton is working like it should
    and we are getting ONE of the OPERATIONS from the switch EXECUTED
     
    Now we need to figure out how to get the other operations to execute
     */}
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

// currently, the Megazord expression's value is static.  We need to make it dynamic
