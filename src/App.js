import React, { useState} from "react";
import AssembleRangers from "./AssembleRangers";
import SelectRangers from "./SelectRangers";


// need to declare countDown state to every component that needs it

function App() {
  const [countDown, setCountDown] = useState(5);
  console.log(countDown) // displays 5
  // the number is not displaying
  // this state makes the number of rangers we selected dynamic
  function handleCountDown() {
    setCountDown(countDown - 1);
  }

  function handleCountUp() {
    setCountDown(countDown + 1)
  }

  return (
    <div className="App">
      <SelectRangers onCountDown={countDown}/>
      <AssembleRangers onCountDown={handleCountDown} onCountUp={handleCountUp} countDown={countDown}/>
    </div>
  );
}


/** App is the main parent component 
 * SelectRangers, AssembleRangers and SummonMegazord are sibling components
 * sibling components share props, but don't have each other in return ()
 * RangerCard is the child of AssembleRangers
 * SummonMegazord is the child of RangerCard
*/
export default App;
