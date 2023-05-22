import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { counterReducer } from './Redux/Resducer'
import { createStore } from 'redux'
// ReactDOM.createRoot(document.getElementById('root')).
const rootElement = document.getElementById("root");
const store = createStore(counterReducer);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    <StrictMode/>
  </React.StrictMode>,
)
