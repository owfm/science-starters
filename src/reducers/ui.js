export function filters(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      if (state.includes(action.filter)) {
        return [...filters.filter(f => f !== action.filter)];
      } else {
        return [...state, action.filter];
      }

    case 'CLEAR_FILTERS':
      return [];
    default:
      return state;
  }
}

export const initialUiState = {
  chaptersVisible: false,
  loading: false,
};

export function ui(state = initialUiState, action) {
  switch (action.type) {
    case 'TOGGLE_CHAPTERS_VISIBLE':
      return { ...state, chaptersVisible: !state.chaptersVisible };
    case 'SET_LOADING':
      return { ...state, loading: action.loadingState };

    default:
      return state;
  }
}
