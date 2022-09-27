import React, { useEffect } from "react";
import { useState } from "react";
import FriendsDetails from "./FriendsDetails";

function DisplayFriendsDetails(props) {
  const [userNames, setUserNames] = useState([]);
  const [dummy, setDummy] = useState(0);
  useEffect(() => {
    setUserNames(props.friends);
    console.log("UserNames set");
    setDummy(1 - dummy);
  }, [props.friends]);

  return (
    <div>
      <div>{dummy}</div>
      {userNames.map((it) => {
        return <FriendsDetails userName={it} />;
      })}
    </div>
  );
}

export default DisplayFriendsDetails;
