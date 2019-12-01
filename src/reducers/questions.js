import * as actions from '../actions/types';

const questions = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_ALL_QUESTIONS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default questions;
