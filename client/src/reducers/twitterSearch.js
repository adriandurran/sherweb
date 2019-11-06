import { ADD_TWITTER_SEARCH_RESULTS } from '../actions/types';

export const twitterSearchReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TWITTER_SEARCH_RESULTS:
      return action.payload;

    default:
      return state;
  }
};
