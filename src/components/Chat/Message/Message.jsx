import React from "react";
import './MInput.css'

const Message = ({type}) => {
  return (
    <>
      <div className={ type === 'user' ? 'chat__container__item__messagelist__' : '' }>
        <input type="text"/>
      </div>
    </>
  );
};

export default Message;
