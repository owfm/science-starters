/* eslint-disable import/prefer-default-export */
import * as actions from './types';

const generateQuestions = filtered => (dispatch, getState) => {
  const { filters, questions } = getState();

  const filteredArray =
    filters.length && filtered
      ? questions.filter(question => filters.includes(question.chapter))
      : questions;

  const l = filteredArray.length;
  const returnList = [];
  const usedIds = new Set();
  for (let i = 0; i < 5; i += 1) {
    const index = Math.floor(Math.random() * l - 1);
    if (!usedIds.has(index)) {
      usedIds.add(index);
      returnList.push(filteredArray[index]);
    } else {
      i -= 1;
    }
  }
  dispatch({
    type: actions.SET_VISIBLE_QUESTIONS,
    payload: returnList,
  });
};

export { generateQuestions };
