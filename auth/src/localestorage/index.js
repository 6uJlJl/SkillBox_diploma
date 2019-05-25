export const loadState = () => {
  try {
    const loadedState = localStorage.getItem ('photogramState');
    if (loadedState === null) { return undefined; }
    return JSON.parse (loadedState);
  }
  catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const photogramState = JSON.stringify (state);
    localStorage.setItem ('photogramState', photogramState);
  }
  catch (err) {
    console.log("При сохранении состояния произошла ошибка: "+err);
  }
}
