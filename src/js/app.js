import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from '../../redux/reducers';

import GameBoard from './containers/game-board';
import GameStatistics from './containers/game-statistics';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <GameBoard />
      <GameStatistics />
    </div>
  </Provider>
  , document.getElementById('react-root'));