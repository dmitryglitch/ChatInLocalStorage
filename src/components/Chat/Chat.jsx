import React, { Component } from "react";
import './Chat.css'

import ChatName from "./ChatName/ChatName.jsx";
import MList from "./MessageList/MList.jsx";
import MInput from "./MessageInput/MInput.jsx";

class Chat extends Component {
  render() {
    return (
      <>
        <ChatName name={ 'test' } />
        <MList />
        <MInput />
      </>
    );
  }
}

export default Chat;
