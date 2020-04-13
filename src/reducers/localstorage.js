const initialState = {
  chats: [
      {
          id: 0,
          chatName: 'Question #1',
          idMembar: 1,
          messageList: [
              {
                  idMessage: 0,
                  text: 'Привет',
                  idSender: 1 
              }
          ]
      }
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
    case "SEND_MESSAGE":
      return {
        ...state,
        isFetching: false,
        isError: null,
        isLogin: true,
        id: action.payload.id,
        date: action.payload.date,
        endSample: action.payload.endSample,
        answerUser: action.payload.answerUser,
        answerAdmin: action.payload.answerAdmin,
        statisticsAdmin: action.payload.statisticsAdmin,
        statistics: action.payload.statistics,
        id_answer: action.payload.id_answer,
        result: action.payload.result,
        massProducts: action.payload.massProducts,
      };

    default:
      return state;
  }
};

export default localstorage;
