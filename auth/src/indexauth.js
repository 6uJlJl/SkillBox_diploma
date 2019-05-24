import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import Unsplash from 'unsplash-js';
import PhotoApp from './containers/photo-app';
import PhotoItem from './containers/photo-item';
import listofphotos from './reducers/listofphotos';
import { loadState, saveState } from './localestorage';
import { addPhotos } from './actions'

let initialstate = loadState() || {
                                    listOfPhotos: [],
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

if ( initialstate.listOfPhotos.length === 0 ) {
  let unsplash = new Unsplash({
    applicationId: "e4139046c1f47dffb34a77d3bf568bcc4ae568c6070b8210a2e529d16881fcec",
    secret: "8e374945a4007e2d9b2bd8185d2377368d128bf87f9298dd66aa463fe2562596",
    callbackUrl: "http://bgatesmf.bget.ru/auth"
  });
  const code = location.search.split('code=')[1] || "";
  if ( code ) {
    try {
      unsplash.auth.userAuthentication(code)
       .then(res => res.json())
       .then(json => {
         unsplash.auth.setBearerToken(json.access_token);
         const bearerToken = json.access_token;
         store.dispatch ( { type:"SET_UNSPLASH", unsplash, code } );

         unsplash.photos.listPhotos(1, 10, "latest")
           .then(res => res.json())
           .then(json => {
              store.dispatch ( addPhotos (json, 1));
            });
         });
    } catch (e) {
        console.log("При загрузке фотографий произошла ошибка: "+e);
    };
  } else alert("Не удалось получить данные от Unsplash, попробуйте перезагрузить страницу или зайдите попозже...");
}

store.subscribe (throttle(() => {
  saveState( store.getState());
}, 1000));

ReactDOM.render (
  <Provider store={store}>
    <PhotoApp />
  </Provider>,
  document.querySelector (".posts")
);


/*

    <HashRouter>
     <Route exact path="/" component={PhotoApp}/>
     <Route path="/image/:id" component={PhotoItem} />
  </HashRouter>

*/
