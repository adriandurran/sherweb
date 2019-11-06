import axios from 'axios';

import {
  ADD_TWITTER_SEARCH_RESULTS,
  ADD_TWITTER_SEARCH_METADATA,
  ADD_MORE_TWITTER_SEARCH_RESULTS
} from './types';

export const postTwitterSearch = (searchTerms) => async (dispatch) => {
  try {
    const results = await axios.post('/api/twitter/search', searchTerms);
    // console.log(results.data);
    const { search_metadata, statuses } = results.data;
    dispatch({
      type: ADD_TWITTER_SEARCH_RESULTS,
      payload: statuses
    });
    dispatch({
      type: ADD_TWITTER_SEARCH_METADATA,
      payload: search_metadata
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoreResults = (query) => async (dispatch) => {
  // query is equal to the next string
};
