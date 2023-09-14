import React, { useState} from "react";
import AssembleRangers from "./AssembleRangers";
import SelectRangers from "./SelectRangers";

// need to declare countDown state to every component that needs it

function App() {
  const [countDown, setCountDown] = useState(5);
  console.log(countDown) // displays 5
  // the number is not displaying

  function handleCountDown() {
    setCountDown(countDown - 1);
  }

  return (
    <div className="App">
      <SelectRangers onCountDown={countDown}/>
      <AssembleRangers />
      
    </div>
  );
}

export default App;
