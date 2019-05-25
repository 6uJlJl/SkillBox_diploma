export const addPhotos = (json, counter, code, unsplash) => {
  return {
    type: "ADD_PHOTOS",
    json,
    counter,
    code,
    unsplash
  }
}

export const likePhoto = (code, unsplash, id) => {
  return dispatch => {
    try {
      unsplash.photos.likePhoto (id)
        .then(res => res.json())
        .then(json => {
          dispatch({ type: 'LIKE_PHOTO', id}) });
    } catch (e) {
      console.log("Произошла ошибка при отправке данных: "+e);
    };
  };
};

export const unlikePhoto = (code, unsplash, id) => {
  return dispatch => {
    try {
      unsplash.photos.unlikePhoto (id)
        .then(res => res.json())
        .then(json => {
          dispatch({ type: 'LIKE_PHOTO', id}) });
    } catch (e) {
      console.log("Произошла ошибка при отправке данных: "+e);
    };
  };
};

export const loadPhotos = (code, unsplash, counter) => {
  return dispatch => {
    try {
      unsplash.photos.listPhotos(counter+1, 10, "latest")
        .then(res => res.json())
        .then(json => {
          dispatch({ type: 'ADD_PHOTOS', json, counter, code, unsplash}) });
    } catch (e) {
      console.log("Произошла ошибка при отправке данных: "+e);
    };
  };
};
