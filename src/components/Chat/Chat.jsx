import React, { Component } from "react";
import "./Chat.css";

import ChatName from "./ChatName/ChatName.jsx";
import MList from "./MessageList/MList.jsx";
import MInput from "./MessageInput/MInput.jsx";

class Chat extends Component {
  state = {
    inputValue: "",
  };

  // сохранение введенного сообщения в инпуте
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

    this.props.onSendMessage(newMessage.text, newMessage.idSender);
    let chat = JSON.parse(localStorage.getItem("chats"))
    chat.messageList.push(newMessage)
    localStorage.setItem('chats', JSON.stringify(chat))
    

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
