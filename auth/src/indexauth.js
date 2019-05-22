import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk';
import Unsplash from 'unsplash-js';

import PhotoApp from './containers/photo-app';
import PhotoItem from './containers/photo-item';
import listofphotos from './reducers/listofphotos';

let unsplash = new Unsplash({
  applicationId: "e4139046c1f47dffb34a77d3bf568bcc4ae568c6070b8210a2e529d16881fcec",
  secret: "8e374945a4007e2d9b2bd8185d2377368d128bf87f9298dd66aa463fe2562596",
  callbackUrl: "http://bgatesmf.bget.ru/auth"
});

const code = location.search.split('code=')[1] || "";

let initialstate = {
  listOfPhotos: [],
  code: code,
  counter: 0,
  unsplash: unsplash
};

if ( code ) {
  try {
    unsplash.auth.userAuthentication(code)
     .then(res => res.json())
     .then(json => {
       unsplash.auth.setBearerToken(json.access_token);
       const bearerToken = json.access_token;

       unsplash.photos.listPhotos(1, 10, "latest")
         .then(res => res.json())
         .then(json => {
             initialstate = Object.assign ({}, initialstate, {
                 listOfPhotos: json,
                 counter: 1,
                 unsplash: Object.assign ({}, unsplash, {
                   bearerToken: bearerToken
                 })
             })

             let store = createStore (
               listofphotos,
               initialstate,
               compose(
                 applyMiddleware(thunk),
                 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
               )
             );

             ReactDOM.render (
               <Provider store={store}>
                 <HashRouter>
                    <Route exact path="/" component={PhotoApp}/>
                    <Route path="/image/:id" component={PhotoItem} />
                 </HashRouter>
               </Provider>,
               document.querySelector (".posts")
             );
          });
       });
  } catch (e) {
      console.log("При загрузке фотографий произошла ошибка: "+e);
      let store = createStore (
        listofphotos,
        initialstate,
        compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      );

      ReactDOM.render (
        <Provider store={store}>
          <HashRouter>
             <Route exact path="/auth/" component={PhotoApp}/>
             <Route path="/auth/image/:id" component={PhotoItem} />
          </HashRouter>
        </Provider>,
        document.querySelector (".posts")
      );
  };
} else alert("Не удалось получить данные от Unsplash, попробуйте перезагрузить страницу или зайдите попозже...");
