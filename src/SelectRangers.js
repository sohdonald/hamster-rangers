import React from "react";

/* this component displays all the rangers we selected.

text displays "Recruit (5) more rangers."
the (5) decreases by 1 with each ranger selected

1. display rangers selected in another part of the browser
2. make a countdown state, then a function that decreases the number by 1
*/

function SelectRangers({team}) {

  return (
    <div>
      {/* we need to display the rangers we selected */}
      <h1>
        Recruit {5 - team.length} more rangers.
        {/* how do we make that number dynamic? */}
      </h1>
    </div>
  );
}

export default SelectRangers;
