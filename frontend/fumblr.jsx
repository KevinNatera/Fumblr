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
            users: {
              [window.currentUser.id]: window.currentUser
            }
          },
          session: {
            id: window.currentUser.id,
        }         
    };
  }
  
  const store = createStore(preloadedState);
  
  window.store = store

  ReactDOM.render(<Root store={store} />, root);
});