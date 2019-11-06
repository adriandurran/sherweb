import axios from 'axios';

import { ADD_TWITTER_SEARCH_RESULTS } from './types';

export const postTwitterSearch = (searchTerms) => async (dispatch) => {
  try {
    const results = await axios.post('/api/twitter/search', searchTerms);
    console.log(results.data);
    dispatch({
      type: ADD_TWITTER_SEARCH_RESULTS,
      payload: results.data.statuses
    });
  } catch (error) {
    console.log(error);
  }
};
