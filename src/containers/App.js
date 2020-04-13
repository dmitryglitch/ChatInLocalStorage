import React from "react";
// import logo from "../logo.svg";
import "./App.css";
import Chat from "../components/Chat/Chat.jsx";

function App() {
  return (
    <div className="App">
      <div className="chat">
        <div className="chat__container">
          <div className="chat__container__item user">
            <Chat type="user" />
          </div>
          <div className="chat__container__item supporter">
            <Chat type="supporter" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
