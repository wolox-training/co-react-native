import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from '@redux/book/reducers';
import Reactotron from '@config/reactotronConfig';

const enhancers = [applyMiddleware(thunk)];

if (__DEV__) {
  const reactotronMiddleware = Reactotron.createEnhancer();
  enhancers.push(reactotronMiddleware);
}

export const store = createStore(bookReducer, compose(...enhancers));
