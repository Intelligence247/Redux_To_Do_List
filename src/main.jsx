import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { todoReducer } from './Redux/Resducer'
import { createStore } from 'redux'
const rootElement = document.getElementById("root");
const store = createStore(todoReducer);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    <StrictMode/>
  </React.StrictMode>,
)
