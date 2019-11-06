import { createSelector } from 'reselect';

export const selectAllSearchResults = (state) => state.twitterSearch;
export const selectSearchMetadata = (state) => state.twitterSearchMetadata;
