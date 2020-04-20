import React from "react";
import "./Message.css";

const Message = ({ text, type, avatarUrl }) => {
  return (
    <>
      <div
        className={
          type === "left"
            ? "chat__container__item__messagelist__message__left"
            : "chat__container__item__messagelist__message__right"
        }
      >
        <div className="chat__container__item__messagelist__message__avatar">
          <img src={avatarUrl} alt="" />
        </div>
        <div className="chat__container__item__messagelist__message__text">
          <p> {text} </p>
        </div>
      </div>
    </>
  );
};

export default Message;
