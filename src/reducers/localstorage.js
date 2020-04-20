const initialState = {
  isStorage: false,
  chats: {
    id: 0,
    chatName: "Question #1",
    idMember: 1,
    messageList: [
      {
        text: "Привет",
        idSender: 1,
      },
      {
        text: "Давай протестируем наш новый чат для общения с тех.поддержкой?",
        idSender: 1,
      },
      {
        text: "Давай приступим!",
        idSender: 0,
      },
    ],
  },
  users: [
    {
      id: 0,
      name: "Support Masha",
      avatarUrl:
        "https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportfemale-2-512.png",
    },
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
    case "SEND_MESSAGE":
      return {
        ...state,
        chats: {
          ...state.chats,
          messageList: state.chats.messageList.concat(action.payload),
        },
      };
    default:
      return state;
  }
};

export default localstorage;
