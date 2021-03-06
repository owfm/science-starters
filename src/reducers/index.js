import { combineReducers } from 'redux';

import { filters, ui } from './ui';
import { questions, visibleQuestions } from './questions';
import chapters from './chapters';

export default combineReducers({
  ui,
  filters,
  chapters,
  questions,
  visibleQuestions,
});
