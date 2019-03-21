import React from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../components/Home';
import Info from '../components/Info';
import ListGames from './ListGames';

const MainNavigator = createStackNavigator({
  Home:
    {
    screen: Home,
    },
  Info:
    {
    screen: Info,
    },
  ListGames:
    {
      screen: ListGames,
    }
});

const Main = createAppContainer(MainNavigator);

export default Main
