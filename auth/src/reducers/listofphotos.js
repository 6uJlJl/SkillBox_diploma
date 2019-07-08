import { orderPhotos } from '../style/layout';

const listofphotos = (state, action) => {
  switch ( action.type ) {

    case "ADD_PHOTOS":
      let listOfPhotos = orderPhotos (state.listOfPhotos.concat (action.json)) ;
      return Object.assign ({}, state,{
          listOfPhotos: listOfPhotos,
          counter: action.counter+1,
          code : action.code,
          unsplash : action.unsplash
      });

    case "LIKE_PHOTO":
      return Object.assign ({}, state, {
        listOfPhotos: state.listOfPhotos.map ( item => {
            if (action.id === item.id) {
                let newLikes = (item.liked_by_user) ? item.likes-1 : item.likes+1;
                return Object.assign ({}, item, {
                  liked_by_user : !item.liked_by_user,
                  likes : newLikes
                })}
            return item;
          })
      });

    case "RESIZE_WINDOW":
      return Object.assign ({}, state, {
        listOfPhotos: orderPhotos(action.listOfPhotos)
      })

    default:
      return state;

  }

};

export default listofphotos;
