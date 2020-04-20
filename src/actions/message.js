export const sendMessage = (text, idSender) => {
  let data = {
    text: text,
    idSender: idSender,
  };

  return {
    type: "SEND_MESSAGE",
    payload: data,
  };
};
