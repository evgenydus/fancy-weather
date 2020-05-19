export const setToStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromStorage = (key) => localStorage.getItem(key);
