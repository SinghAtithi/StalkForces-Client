import React, { useEffect } from "react";
import { useState } from "react";
import FriendsDetails from "./FriendsDetails";
import axios from "axios";

function DisplayFriendsDetails(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    console.log(props.telegramChatId);
    axios
      .get(
        "https://stalkforces-server.herokuapp.com/friends/" +
          props.telegramChatId
      )
      .then((res) => {
        let temp = [];
        res.data.forEach((friend) => {
          if (props.telegramChatId == friend.telegramChatId)
            temp.push(friend.userName);
        });
        setFriends(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.telegramChatId]);

  return (
    <div>
      <h1>Hellow friends</h1>
      <div className="flex flex-wrap m-12 ">
        {friends.map((friend) => {
          return <FriendsDetails friend={friend} />;
        })}
      </div>
    </div>
  );
}

export default DisplayFriendsDetails;
