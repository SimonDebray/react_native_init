import React from 'react';
import { UPDATE_TEXT } from '../actions/index';

const initialState = {
  text: "Initial text"
};

const textReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
};

export default textReducer;
