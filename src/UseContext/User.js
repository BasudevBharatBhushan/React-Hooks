import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function User() {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>
        <h1>User:{username}</h1>
      </h1>
    </div>
  );
}

// function User({ username }) {
//   return (
//     <div>
//       <h1>
//         <h1>User:{username}</h1>
//       </h1>
//     </div>
//   );
// }

export default User;
