import React, { Component } from "react";
import { connect } from "react-redux";

// import logo from "../logo.svg";
import "./App.css";
import Chat from "../components/Chat/Chat.jsx";

import { initLocalStorage, initStore } from "../actions/localstorage.js";

class App extends Component {
  componentDidMount() {

    // проверка на первый запуск приложения
    // если нет записи в локальном хранилище, то мы записываем наш инициальный стор
    // если напротив есть, то актуализируем наш стор
    const { chats, users, onInitLocalStorage, onInitStore } = this.props;

    if (localStorage.getItem("chats") == null) {
      onInitLocalStorage(chats, users);
    } else {
      const localStorageChats = JSON.parse(localStorage.getItem("chats"));
      const localStorageUsers = JSON.parse(localStorage.getItem("users"));

      onInitStore(localStorageChats, localStorageUsers);
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
    onInitStore: (chats, users) => {
      dispatch(initStore(chats, users));
    },
    onSendMessage: () => {
      dispatch();
    },
  })
)(App);
