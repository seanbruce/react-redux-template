export const loadState = () => {
  try {
    const serializaedState = localStorage.getItem("token");
    if (serializaedState === null) {
      return undefined;
    }
    return JSON.parse(serializaedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializaedState = JSON.stringify(state);
    localStorage.setItem("state", serializaedState);
  } catch (err) {
    // Ignore write error
  }
};
