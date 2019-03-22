import { GAMES_ACTIONS } from '../actions/index';

export const loadGames = games => {
  return {
    type: GAMES_ACTIONS.LOAD_ALL,
    payload: games
  }
};

export const loadGameDetails = payload => {
  return {
    type: GAMES_ACTIONS.FETCH_ONE_DETAILS,
    payload: payload
  }
};

export const lastGameId = payload => {
  return {
    type: GAMES_ACTIONS.LAST_GAME_ID,
    payload: payload
  }
};
