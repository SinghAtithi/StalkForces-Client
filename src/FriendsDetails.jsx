import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function FriendsDetails(props) {
  const [user, setUser] = useState({
    userName: props.friend,
    profilePic: "",
    currRating: 0,
    maxRating: 0,
    maxRank: "",
  });

  useEffect(() => {
    console.log("came here for " + props.friend);
    axios
      .get("http://codeforces.com/api/user.info?handles=" + props.friend)
      .then((res) => {
        setUser({
          ...user,
          profilePic: res.data.result[0].titlePhoto,
          currRating: res.data.result[0].rating,
          maxRating: res.data.result[0].maxRating,
          maxRank: res.data.result[0].rank,
        });
      });
  }, []);

  return (
    <div className="flex justify-center m-12">
      <div className="card card-compact w-96 h-auto bg-base-100 shadow-2xl">
        <figure>
          <img
            src={user.profilePic}
            alt="Profile Pic"
            className="rounded-3xl w-96 h-72 shadow-2xl min-w-full min-h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.userName}</h2>
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
                  <td>{user.currRating}</td>
                </tr>
                <tr className="active">
                  <td>Max Rating</td>
                  <td>{user.maxRating}</td>
                </tr>
                <tr>
                  <td>User Max Ranking</td>
                  <td>{user.maxRank}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Add to Stalk List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendsDetails;
