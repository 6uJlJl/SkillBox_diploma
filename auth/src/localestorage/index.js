export const saveScroll = () => {
  try {
    let scroll = $(window).scrollTop();
    if ( $(".elements-container").length===1 ) {
      localStorage.setItem ('photogramScroll', scroll);
    }
  } catch (error) {
    console.log("Не удалось установить значение Scroll "+ error);
  }
}

export const LoadScroll = () => {
  try {
    let scrollTo = + localStorage.getItem ('photogramScroll');
    if (scrollTo != null) { $(window).scrollTop(scrollTo) };
  } catch (error) {
    console.log("Не удалось получить значение Scroll из localstorage " + error);
  }
}

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
