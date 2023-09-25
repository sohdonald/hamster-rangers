import React, { useState } from "react";
import AssembleRangers from "./AssembleRangers";
import SelectRangers from "./SelectRangers";
import { Route, Switch } from "react-router-dom";
import NewRangerForm from "./NewRangerForm";
import NavBar from "./NavBar";
import SummonMegazord from "./SummonMegazord";

// need to declare countDown state to every component that needs it

function App() {
  const [countDown, setCountDown] = useState(5);
  const [team, setTeam] = useState([]);
  // displays 5
  // the number is not displaying
  // this state makes the number of rangers we selected dynamic
  function handleCountDown() {
    setCountDown(countDown - 1);
  }

  function handleCountUp() {
    setCountDown(countDown + 1);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <SelectRangers onCountDown={countDown} />
          <SummonMegazord team= {team}/>
          <AssembleRangers
            onCountDown={handleCountDown}
            onCountUp={handleCountUp}
            countDown={countDown}
            team = {team}
            setTeam = {setTeam}
          />
          
        </Route>
        <Route exact path="/newrangerform">
            <NewRangerForm />
        </Route>
      </Switch>
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
