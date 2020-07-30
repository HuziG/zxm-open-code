export const setItem = (key: string, val: any) => {
  return localStorage.setItem(key, JSON.stringify(val));
};

export const getItem = (key: string) => {
  try {
    return JSON.parse(<string>localStorage.getItem(key));
  } catch (error) {
    return localStorage.getItem(key);
  }
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
