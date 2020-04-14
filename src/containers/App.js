import React, { Component } from "react";
import { connect } from "react-redux";

// import logo from "../logo.svg";
import "./App.css";
import Chat from "../components/Chat/Chat.jsx";

import { initLocalStorage } from "../actions/localstorage.js";

class App extends Component {
  componentDidMount() {
    
    // проверка на первый запуск приложения
    // если нет записи в локальном хранилище, то мы записываем наш инициальный стор
    if (localStorage.getItem("chats") == null) {
      const { chats, users } = this.props;
      this.props.onInitLocalStorage(chats, users);
    }
  }

  render() {
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
}

export default connect(
  (state) => ({
    chats: state.localstorage.chats,
    users: state.localstorage.users,
  }),
  (dispatch) => ({
    onInitLocalStorage: (chats, users) => {
      dispatch(initLocalStorage(chats, users));
    },
    onSendMessage: () => {
      dispatch();
    },
  })
)(App);
