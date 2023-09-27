import React, { useState } from "react";
import AssembleRangers from "./AssembleRangers";
import SelectRangers from "./SelectRangers";
import { Route, Switch } from "react-router-dom";
import NewRangerForm from "./NewRangerForm";
import NavBar from "./NavBar";
import SummonMegazord from "./SummonMegazord";

function App() {
  const [team, setTeam] = useState([]);
  /** this state makes the number of rangers we selected dynamic.
   it also checks the colors of the rangers we selected.
   done by creating an array of rangers that 
   dynamically changes by which rangers we selected */

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <SelectRangers team={team} />
          <SummonMegazord team={team} />
          <AssembleRangers team={team} setTeam={setTeam} />
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
