import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'
import PhotoApp from './containers/photo-app';
import PhotoItem from './containers/photo-item';
import { configureStore } from './configureStore'
import Unsplash from 'unsplash-js';
import { addPhotos } from './actions';
import { loadState } from './localestorage';

const store = configureStore ();

let unsplash = new Unsplash({
  applicationId: "e4139046c1f47dffb34a77d3bf568bcc4ae568c6070b8210a2e529d16881fcec",
  secret: "8e374945a4007e2d9b2bd8185d2377368d128bf87f9298dd66aa463fe2562596",
  callbackUrl: "http://bgatesmf.bget.ru/auth"
});

let loadedState = loadState();

const code = (loadedState) ? loadedState.code : location.search.split('code=')[1];

if ( code ) {
  try {
    if ( loadedState ) {
      unsplash.auth.setBearerToken(loadedState.bearerToken);
      store.dispatch ( addPhotos (loadedState.listOfPhotos, loadedState.counter, code, unsplash)); }
    else {
      unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token);
          unsplash.photos.listPhotos(1, 10, "latest")
            .then(res => res.json())
            .then(json => { store.dispatch ( addPhotos (json, 1, code, unsplash)); });
        })};
  } catch (e) { console.log("При загрузке фотографий произошла ошибка: "+e); };
} else alert("Не удалось получить данные от Unsplash, попробуйте перезагрузить страницу или зайдите попозже...");

ReactDOM.render (
  <HashRouter>
    <Provider store={store}>
      <Route exact path="/" component={PhotoApp}/>
      <Route path="/image/:id" component={PhotoItem} />
    </Provider>
  </HashRouter>,
  document.querySelector (".posts")
);