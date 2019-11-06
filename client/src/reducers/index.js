import { combineReducers } from 'redux';
import { twitterSearchReducer } from './twitterSearch';

const reducer = combineReducers({
  twitterSearch: twitterSearchReducer
});

export default reducer;
