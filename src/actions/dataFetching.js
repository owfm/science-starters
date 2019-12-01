/* eslint-disable import/prefer-default-export */
import API from '@aws-amplify/api';

import * as actions from './types';

export function fetchAllQuestionsRequest() {
  return {
    type: actions.FETCH_ALL_QUESTIONS_REQUEST,
    payload: null,
    error: null,
  };
}

export function fetchAllQuestionsSuccess(payload) {
  return {
    type: actions.FETCH_ALL_QUESTIONS_SUCCESS,
    payload,
    error: null,
  };
}

export function fetchAllQuestionsFailure(error) {
  return {
    type: actions.FETCH_ALL_QUESTIONS_SUCCESS,
    payload: null,
    error,
  };
}

export function fetchAllQuestions() {
  return async function FetchAllQuestionsThunk(dispatch) {
    dispatch(fetchAllQuestionsRequest());
    const apiName = 'scienceStarterApi';
    const path = '/questions';
    API.get(apiName, path)
      .then(response => {
        dispatch(fetchAllQuestionsSuccess(response.Items));
      })
      .catch(error => {
        dispatch(fetchAllQuestionsFailure(error));
      });
  };
}
