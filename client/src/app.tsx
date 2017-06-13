import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import consoleFun from './commons/helpers/consoleFun';

import { configureStore } from './store/theCodingGameStore';
import { TheCodingGame } from './views/theCodingGame';
import initialState from './reducers/state/initialState';

const store = configureStore(initialState);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' component={TheCodingGame} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

consoleFun();