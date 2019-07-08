import listofphotos from './reducers/listofphotos';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { saveState } from './localestorage';
import { createStore, applyMiddleware } from 'redux';

function configureStore () {
  let initialstate = {  listOfPhotos: [],
                        code: "",
                        counter: 0,
                        unsplash: {}
                      };
  const store = createStore (
    listofphotos,
    initialstate,
    applyMiddleware(thunk)
  );
  store.subscribe (throttle(() => {
    let state = store.getState();
    saveState({
      listOfPhotos: state.listOfPhotos,
      code: state.code,
      counter: state.counter,
      bearerToken: state.unsplash._bearerToken
    } );
  }, 1000));
  return store;
}

export default configureStore;
