const getDataFromSession = (key: string) => {
  return localStorage.getItem(key) || null;
  // return storageData ? JSON.parse(storageData) : null;
}

const setDataToSession = (key: string, value: string) => {
  return localStorage.setItem(key, value);
}
const RemoveDataFromSession = (key: string) => {
  return localStorage.removeItem(key);
};

export { getDataFromSession, setDataToSession, RemoveDataFromSession }