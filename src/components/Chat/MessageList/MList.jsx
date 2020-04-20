import React from "react";
import Message from "../Message/Message.jsx";
import "./MList.css";

const MList = ({ messageList, userId, users }) => {
  return (
    <>
      <div className="chat__container__item__messagelist">
        {messageList.map((message, i) => {
          return (
            <Message
              key={i}
              type={userId === message.idSender ? "right" : "left"}
              text={message.text}
              idSender={message.idSender}
              avatarUrl={users[message.idSender].avatarUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default MList;
