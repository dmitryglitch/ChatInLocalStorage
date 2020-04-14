export const initLocalStorage = (users, chats) => {
  localStorage.setItem("chats", JSON.stringify(chats));
  localStorage.setItem("users", JSON.stringify(users));

  return { type: "SEND_MESSAGE", payload: true };
};
