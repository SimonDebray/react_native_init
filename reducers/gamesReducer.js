import React from 'react';
import { GAMES_ACTIONS } from '../actions/index';

const initialState = {
  gameList: [],
  gameListById: {},
  lastGameId: null
};

const gamesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GAMES_ACTIONS.LOAD_ALL:
      
      return {
        ...state,
        gameList: action.payload
      };
    case GAMES_ACTIONS.FETCH_ONE_DETAILS:
      
      let newGameListById = state.gameListById;
      
      newGameListById[action.payload.id] = action.payload.game;
      
      return {
        ...state,
        gameListById: newGameListById
      };
    case GAMES_ACTIONS.LAST_GAME_ID:
      return {
        ...state,
        lastGameId: action.payload
      };
    default:
      return state;
  }
};

export default gamesReducer;
