import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  

  let preloadedState = undefined; //undefined just so we have something 

  if (window.currentUser) {
    preloadedState = {
      entities: {
          session: {
            currentUser: window.currentUser
          }         
      }
    };
  }
  const store = createStore(preloadedState);
  window.store = store

  // ReactDOM.render(<h1>Welcome to Fumblr</h1>, root);
  ReactDOM.render(<Root store={store} />, root);
});