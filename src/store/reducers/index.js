import { combineReducers } from 'redux';
import { isDragAndDrop } from './isDragAndDrop';
import { form } from './form';
import { messages } from './messages';

export const reducer = combineReducers({
  isDragAndDrop,
  form,
  messages,
});
