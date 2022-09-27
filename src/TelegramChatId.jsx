import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function TelegramChatId(props) {
  function updateFriends() {
    let newFriennds = [];
    axios
      .get(
        `https://stalkforces-server.herokuapp.com/friends/${props.telegramChatId}`
      )
      .then((res) => {
        let data = res.data;
        data.forEach((it) => {
          newFriennds.push(it.userName);
        });
      });
    props.setFriends(newFriennds);
  }

  return (
    <div className="flex justify-center space-x-12 mt-12">
      <input
        type="text"
        placeholder="Your Telegram Chat ID"
        className="input input-bordered input-accent w-full max-w-xs"
        onChange={(e) => {
          props.setTelegramChatId(e.target.value);
        }}
      />
      <button className="btn btn-outline btn-success" onClick={updateFriends}>
        UPDATE CHAT ID
      </button>
    </div>
  );
}

export default TelegramChatId;
