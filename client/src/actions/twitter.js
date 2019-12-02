import axios from 'axios';
import * as toxicity from '@tensorflow-models/toxicity';

import {
  ADD_TWITTER_SEARCH_RESULTS,
  ADD_TWITTER_SEARCH_METADATA,
  ADD_MORE_TWITTER_SEARCH_RESULTS,
  ADD_TWITTER_TOXICITY
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

export const runToxicityCheck = (tweets, threshold = 0.9) => async (
  dispatch
) => {
  const tweetLength = tweets.length;
  const tweetArray = [];
  const model = await toxicity.load(threshold);
  // need to consider different language versions!!!!!!
  for (let i = 0; i < tweetLength; i++) {
    let results = await model.classify(tweets[i].full_text);
    // add it to the tweet object
    let tempObj = { ...tweets[i], toxicity: results };
    // need to put back into the tweet array and
    tweetArray.push(tempObj);
  }
  // update redux
  dispatch({ type: ADD_TWITTER_TOXICITY, payload: tweetArray });
};
