import { combineReducers } from 'redux';
import {
  twitterSearchReducer,
  twitterSearchMetadataReducer
} from './twitterSearch';

const reducer = combineReducers({
  twitterSearch: twitterSearchReducer,
  twitterSearchMetadata: twitterSearchMetadataReducer
});

export default reducer;
