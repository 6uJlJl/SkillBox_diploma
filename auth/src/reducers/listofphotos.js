import { addPhotos } from '../actions';


const listofphotos = (state={}, action) => {

  switch ( action.type ) {

    case "ADD_PHOTOS":
      return Object.assign ({}, state,{
          listOfPhotos: state.listOfPhotos.concat (action.json),
          counter: action.counter+1
      });

    case "LIKE_PHOTO":
      return Object.assign ({}, state, {
        listOfPhotos: state.listOfPhotos.map ( item => {
            if (action.id === item.id) {
                let newLikes = (item.liked_by_user) ? item.likes-1 : item.likes+1;
                return Object.assign ({}, item, {
                  item: {
                    liked_by_user : !item.liked_by_user,
                    likes : newLikes
                  }
                })};
            return item;
          })
      })

    case "LOAD_PHOTOS":
      return state;

    default:
      return state;

  };

};

export default listofphotos;
