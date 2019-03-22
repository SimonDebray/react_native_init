import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main';
import configureStore from './store';
import { UIManager, LayoutAnimation, Platform} from 'react-native';

const store = configureStore();

export default class App extends React.Component {
  
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  
  render() {
    return (
      <Provider store = { store }>
        <Main />
      </Provider>
    );
  }
}
