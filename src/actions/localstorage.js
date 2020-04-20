export const initLocalStorage = (chats, users) => {
  localStorage.setItem("chats", JSON.stringify(chats));
  localStorage.setItem("users", JSON.stringify(users));

  return { type: "INIT_LOCALSTORAGE", payload: true };
};

export const initStore = (chats, users) => {
  let data = {
    chats,
    users,
  };
    
  return { type: "INIT_STORE", payload: data };
};
