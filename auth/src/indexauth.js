import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'
import PhotoApp from './containers/photo-app';
import PhotoItem from './containers/photo-item';
import { configureStore } from './configureStore'

const store = configureStore ();

ReactDOM.render (
  <HashRouter>
    <Provider store={store}>
      <Route exact path="/" component={PhotoApp}/>
      <Route path="/image/:id" component={PhotoItem} />
    </Provider>
  </HashRouter>,
  document.querySelector (".posts")
);
