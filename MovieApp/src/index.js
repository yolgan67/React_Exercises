import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import {semanticUICSS,semanticUIJS} from './helpers/semanticUI'
import logger from "redux-logger";
import promise from 'redux-promise-middleware'

// const allExtensions = compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const allExtensions = composeWithDevTools(applyMiddleware(promise,thunk,logger));
const myStore = createStore(rootReducer, allExtensions);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={myStore}>
     
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


