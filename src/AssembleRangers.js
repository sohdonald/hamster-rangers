import React from "react";
import RangerCard from "./RangerCard";

function AssembleRangers() {
    // combine all the rangers from rangerRoster into one large array
    // converts the json into something we can work with

//const rangerDisplay = rangers;
    return (
        <div>
            Recruit 5 rangers
            {/* should show a bunch of ranger cards for
            us to select, is when we recruit, the text should be
            updated with the remaining number of rangers that are needed to
            form the megazord */}
            <RangerCard/>
        </div>
    )
}

export default AssembleRangers;