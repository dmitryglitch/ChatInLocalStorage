const initialState = {
  isStorage: false,
  chats: [
    {
      id: 0,
      chatName: "Question #1",
      idMembar: 1,
      messageList: [
        {
          idMessage: 0,
          text: "Привет",
          idSender: 1,
        },
      ],
    },
  ],
  users: [
    {
      id: 1,
      name: "Dmitry Bykov",
      avatarUrl:
        "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png",
    },
  ],
};

const localstorage = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_LOCALSTORAGE":
      return {
        ...state,
        isStorage: action.payload,
      };
    case "INIT_STORE":
      return {
        ...state,
        isStorage: true,
        chats: action.payload.chats,
        users: action.payload.users,
      };
    default:
      return state;
  }
};

export default localstorage;
