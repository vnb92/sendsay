import { combineReducers } from 'redux';
import { form } from './form';
import { messages } from './messages';

export const reducer = combineReducers({
  form,
  messages,
});
