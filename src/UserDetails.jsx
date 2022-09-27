import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UserDetails(props) {
  const [userNameHere, setUserNameHere] = useState(props.user.userName);

  useEffect(() => {
    setUserNameHere(props.user.userName);
  }, [props.user.profilePic]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function updateFriends() {
    axios
      .get(
        `https://stalkforces-server.herokuapp.com//friends/${props.telegramChatId}`
      )
      .then((res) => {
        let newFriends = [];
        res.data.forEach((friend) => {
          newFriends.push(friend.userName);
        });
        props.setTelegramChatId(newFriends);
        console.log(props);
      });
  }

  function sendDataToMongo() {
    console.log("sending data to user");
    const data = {
      userName: props.user.userName,
      telegramChatId: props.telegramChatId,
    };
    axios
      .post("https://stalkforces-server.herokuapp.com/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure>
          <img
            src={props.user.profilePic}
            alt="Profile Pic"
            className="rounded-3xl shadow-2xl min-w-full min-h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{userNameHere}</h2>
          <div className="overflow-x-auto">
            <table className="table w-full overflow-hidden">
              <thead>
                <tr>
                  <th>Query</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Curr Rating</td>
                  <td>{props.user.currRating}</td>
                </tr>
                <tr className="active">
                  <td>Max Rating</td>
                  <td>{props.user.maxRating}</td>
                </tr>
                <tr>
                  <td>User Max Ranking</td>
                  <td>{capitalizeFirstLetter(props.user.maxRank)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success" onClick={sendDataToMongo}>
              Add to Stalk List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
