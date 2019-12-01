import * as actions from '../actions/types';

const chapters = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_ALL_QUESTIONS_SUCCESS:
      return [...new Set(action.payload.map(item => item.chapter))];
    default:
      return state;
  }
};

export default chapters;
