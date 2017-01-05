import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { loadImages } from "./actions/glytchActions";
import routes from "./routes";
import './styles/app.css';

const store = configureStore();
store.dispatch(loadImages());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
