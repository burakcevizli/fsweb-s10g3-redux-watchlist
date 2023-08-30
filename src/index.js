import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import reducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers)
root.render(
  <Provider store ={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
