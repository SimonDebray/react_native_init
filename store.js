import { createStore, combineReducers } from 'redux';
import textReducer from './reducers/textReducer';

const rootReducer = combineReducers({
  init: textReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
