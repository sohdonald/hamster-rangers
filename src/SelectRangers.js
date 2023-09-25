import React from "react";

/* this component displays all the rangers we selected.

text displays "Recruit (5) more rangers."
the (5) decreases by 1 with each ranger selected

After 5 rangers are selected, it displays the "summon megazord" button. 
clicking the "summon megazord" will display a megazord from the db.json that fulfills
the conditions in the summonBy key

1. display rangers selected in another part of the browser
2. make a countdown state, then a function that decreases the number by 1

like this

const [countDown, setCountDown] = useState(5)

function handleCountDown() {
  setCountDown(countDown -1)
}
*/

function SelectRangers({onCountDown}) {

 // why is this undefined?, the 'd' was not capitalized

// onCountDown = 5 may give us 5, but it is an assignment operator, doesn't work 
// the value from App is not being passed down here, 
// we need something to pass down the number itself
// how do we pass down info from a parent's prop?

  // const [countDown, setCountDown] = useState(5);

  // function handleCountDown() {
  //   setCountDown(countDown - 1);
  // }  need to call this as a prop

  return (
    <div>
      {/* we need to display the rangers we selected */}
      <h1>
        Recruit {onCountDown} more rangers.
        {/* how do we make that number dynamic 
        Recruit {countDown} more rangers.*/}
      </h1>
    </div>
  );
}

export default SelectRangers;
