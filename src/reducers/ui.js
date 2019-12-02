import * as actions from '../actions/types';

export function filters(state = [], action) {
  switch (action.type) {
    case actions.SET_FILTERS:
      if (!action.payload) return [];
      if (state.includes(action.payload)) {
        return [...state.filter(f => f !== action.payload)];
      }
      return [...state, action.payload];

    default:
      return state;
  }
}

export const initialUiState = {
  chapterFiltersVisible: true,
  answersVisible: false,
  loading: false,
};

export function ui(state = initialUiState, action) {
  switch (action.type) {
    case actions.TOGGLE_ANSWERS_VISIBLE:
      return { ...state, answersVisible: !state.answersVisible };

    case actions.TOGGLE_CHAPTERS_VISIBLE:
      return { ...state, chapterFiltersVisible: !state.chapterFiltersVisible };

    case actions.FETCH_ALL_QUESTIONS_REQUEST:
      return { ...state, loading: true };

    case actions.FETCH_ALL_QUESTIONS_SUCCESS:
    case actions.FETCH_ALL_QUESTIONS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
}
