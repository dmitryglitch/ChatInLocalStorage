import React, { Component } from "react";
import "./Chat.css";

import ChatName from "./ChatName/ChatName.jsx";
import MList from "./MessageList/MList.jsx";
import MInput from "./MessageInput/MInput.jsx";

class Chat extends Component {
  state = {
    inputValue: "",
  };

  handleInput = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  handleKeyDown = () => {
    const newMessage = {
      text: this.state.inputValue,
      idSender: this.props.userId,
    };

    // вызываем action на отправку нового сообщения в стор и записываем его в localstorage
    this.props.onSendMessage(newMessage.text, newMessage.idSender);
    let chat = JSON.parse(localStorage.getItem("chats"));
    chat.messageList.push(newMessage);
    localStorage.setItem("chats", JSON.stringify(chat));

    // очищаем наш инпут от прошлого сообщения
    this.setState({ inputValue: "" });
  };

  render() {
    const { users, userId } = this.props;
    const { messageList, chatName } = this.props.chats;
    return (
      <>
        <ChatName chatName={chatName} />
        <MList messageList={messageList} users={users} userId={userId} />
        <MInput
          handleInput={this.handleInput}
          handleKeyDown={this.handleKeyDown}
        />
      </>
    );
  }
}

export default Chat;
