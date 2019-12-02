import * as actions from './types';

export const toggleChaptersVisible = () => dispatch => {
  dispatch({
    type: actions.TOGGLE_CHAPTERS_VISIBLE,
    payload: null,
  });
};

export const toggleAnswersVisible = () => dispatch => {
  dispatch({
    type: actions.TOGGLE_ANSWERS_VISIBLE,
    payload: null,
  });
};
