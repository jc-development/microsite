import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';

import homeReducer from '../shared/home/reducer';

const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
  routerMiddleware( createMemoryHistory() ),
  sagaMiddleware
];

export default (initialState) => {
  const store = createStore(
    combineReducers({
      productLists: homeReducer
    }),
    initialState,
    compose( applyMiddleware(...reduxMiddlewares) )
  );

  store.runSaga = sagaMiddleware.run;

  store.close = () => store.dispatch(END);

  return store;
}
