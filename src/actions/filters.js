/* eslint-disable import/prefer-default-export */
import * as actions from './types';

export function setFilters(payload) {
  return {
    type: actions.SET_FILTERS,
    payload,
  };
}
