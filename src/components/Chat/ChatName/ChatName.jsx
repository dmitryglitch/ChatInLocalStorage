import React from "react";
import "./ChatName.css";

const ChatName = ({ chatName }) => {
  return (
    <>
      <div className="chat__container__item__chatname">
        <p className="chat__container__item__chatname__name">{chatName}</p>
      </div>
    </>
  );
};

export default ChatName;
