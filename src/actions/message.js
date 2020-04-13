export const sendMessage = (idSender, text) => (dispatch) => {
  let data = {
    idSender: idSender,
    text: text,
  };

  dispatch({ type: "SEND_MESSAGE", payload: data });
};
