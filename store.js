import { createStore, combineReducers } from 'redux';
import textReducer from './reducers/textReducer';
import gamesReducer from './reducers/gamesReducer';

const rootReducer = combineReducers({
  init: textReducer,
  games: gamesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
