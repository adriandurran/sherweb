import {
  ADD_TWITTER_SEARCH_RESULTS,
  ADD_TWITTER_SEARCH_METADATA,
  ADD_MORE_TWITTER_SEARCH_RESULTS,
  ADD_TWITTER_TOXICITY
} from '../actions/types';

export const twitterSearchReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TWITTER_SEARCH_RESULTS:
      return action.payload;
    case ADD_MORE_TWITTER_SEARCH_RESULTS:
      return [...state, ...action.payload];
    case ADD_TWITTER_TOXICITY:
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
