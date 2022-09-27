import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function InputForm(props) {
  useEffect(() => {
    updateUser();
  }, []);
  const [userNameHere, setUserNameHere] = useState(props.user.userName);
  function updateUser(e) {
    axios
      .get(
        `https://codeforces.com/api/user.info?handles=${props.user.userName}`
      )
      .then((res) => {
        props.setUser({
          ...props.user,
          profilePic: res.data.result[0].titlePhoto,
          currRating: res.data.result[0].rating,
          maxRating: res.data.result[0].maxRating,
          maxRank: res.data.result[0].maxRank,
        });
      });
  }

  return (
    <div className="flex justify-center space-x-12 mt-12">
      <input
        type="text"
        placeholder="username"
        className="input input-bordered input-accent w-full max-w-xs"
        onChange={(e) => {
          props.setUser({ ...props.user, userName: e.target.value });
        }}
      />
      <button className="btn btn-outline btn-success" onClick={updateUser}>
        Stalk🧐
      </button>
    </div>
  );
}

export default InputForm;
