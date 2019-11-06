import {
  ADD_TWITTER_SEARCH_RESULTS,
  ADD_TWITTER_SEARCH_METADATA
} from '../actions/types';

export const twitterSearchReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TWITTER_SEARCH_RESULTS:
      return action.payload;

    default:
      return state;
  }
};

export const twitterSearchMetadataReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TWITTER_SEARCH_METADATA:
      return action.payload;

    default:
      return state;
  }
};
