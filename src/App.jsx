import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import InputForm from "./InputForm";
import UserDetails from "./UserDetails";
import TelegramChatId from "./TelegramChatId";
import FriendsDetails from "./FriendsDetails";
import DisplayFriendsDetails from "./DisplayFriendsDetails";

function App() {
  const [message, setMessage] = useState("fuck");
  const [user, setUser] = useState({
    userName: "coder_ravan",
    profilePic: "",
    currRating: 0,
    maxRating: 0,
    maxRank: "",
  });

  const [telegramChatId, setTelegramChatId] = useState("");
  const [friends, setFriends] = useState([]);

  const [dummy, setDummy] = useState(0);

  useEffect(() => {
    setDummy(1 - dummy);
  }, [friends]);

  return (
    <div className="App pb-10">
      <Navbar />
      <TelegramChatId
        telegramChatId={telegramChatId}
        setTelegramChatId={setTelegramChatId}
        setFriends={setFriends}
      />
      <InputForm
        user={user}
        setUser={setUser}
        telegramChatId={telegramChatId}
        setTelegramChatId={setTelegramChatId}
      />
      <UserDetails
        user={user}
        setUser={setUser}
        telegramChatId={telegramChatId}
        setTelegramChatId={setTelegramChatId}
      />
      
      <DisplayFriendsDetails telegramChatId={telegramChatId} />
    </div>
  );
}

export default App;
