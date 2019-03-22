import React from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../components/Home';
import Info from '../components/Info';
import ListGames from './GameList';
import GameDetails from './GameDetails';

const RootStack = createStackNavigator(
  {
    Home: Home,
    GameDetails: GameDetails,
    ListGames: ListGames,
    Info: Info
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      title: "Games",
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0277BD',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: "#fff"
      }
    },
  }
);

const Main = createAppContainer(RootStack);

export default Main
