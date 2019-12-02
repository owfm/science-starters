import * as actions from '../actions/types';

export const visibleQuestions = (state = [], action) => {
  switch (action.type) {
    case actions.SET_VISIBLE_QUESTIONS:
      return [...action.payload];
    case actions.CLEAR_VISIBLE_QUESTIONS:
      return [];
    default:
      return state;
  }
};

export const questions = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_ALL_QUESTIONS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
