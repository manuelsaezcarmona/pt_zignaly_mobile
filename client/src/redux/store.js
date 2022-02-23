import {
  combineReducers, applyMiddleware, compose, createStore
} from 'redux';
import thunk from 'redux-thunk';
import { phonesReducer } from './phones.reducer';

export default function configureStore(preLoadState) {
  const rootReducer = combineReducers({
    phones: phonesReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preLoadState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
