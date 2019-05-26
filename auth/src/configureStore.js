import listofphotos from './reducers/listofphotos';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { saveState } from './localestorage';
import { createStore, applyMiddleware, compose } from 'redux';

export const configureStore = () => {

  let initialstate = {  listOfPhotos: [],
                        code: "",
                        counter: 0,
                        unsplash: {}
                      };

  const store = createStore (
    listofphotos,
    initialstate,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
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
