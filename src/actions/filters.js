import * as actions from './types';

export default function setFilters(payload) {
  return {
    type: actions.SET_FILTERS,
    payload,
  };
}
