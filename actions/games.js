import { UPDATE_TEXT } from '../actions/index';

export const updateText = text => {
  return {
    type: UPDATE_TEXT,
    payload: text
  }
};
