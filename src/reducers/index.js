import { combineReducers } from 'redux';

import { filters, ui } from './ui';

export default combineReducers({ ui, filters });
