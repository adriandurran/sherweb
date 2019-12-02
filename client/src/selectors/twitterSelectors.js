import { createSelector } from 'reselect';

export const selectAllSearchResults = (state) => state.twitterSearch;
export const selectSearchMetadata = (state) => state.twitterSearchMetadata;

export const selectAllToxicTweets = createSelector(
  selectAllSearchResults,
  (tweets) => {
    return tweets.filter((tweet) => tweet.isToxic);
  }
);

export const selectAllSensitiveTweets = createSelector(
  selectAllSearchResults,
  (tweets) => {
    return tweets.filter((tweet) => tweet.possibly_sensitive);
  }
);
