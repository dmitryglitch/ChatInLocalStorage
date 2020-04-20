import React from "react";
import "./MInput.css";

const MInput = ({ handleInput, handleKeyDown }) => {
  return (
    <>
      <div className="chat__container__item__input">
        <input
          onChange={(e) => {
            handleInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              e.target.value = "";
              handleKeyDown();
            }
          }}
          type="text"
        />
      </div>
    </>
  );
};

export default MInput;
