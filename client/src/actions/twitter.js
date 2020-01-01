import axios from 'axios';
import * as toxicity from '@tensorflow-models/toxicity';

import {
  ADD_TWITTER_SEARCH_RESULTS,
  ADD_TWITTER_SEARCH_METADATA,
  // ADD_MORE_TWITTER_SEARCH_RESULTS,
  ADD_TWITTER_TOXICITY_FULL,
  ADD_TWITTER_TOXICITY_PARTIAL
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

export const runToxicityCheck = (tweets, type, threshold = 0.9) => async (
  dispatch
) => {
  const tweetLength = tweets.length;
  const tweetArray = [];
  const model = await toxicity.load(threshold);
  // need to consider different language versions!!!!!!
  for (let i = 0; i < tweetLength; i++) {
    let predictions = await model.classify(tweets[i].full_text);
    // loop through the results and add a boolean if isToxic
    let isToxic = false;
    let toxicCount = 0;
    let predictionLength = predictions.length;
    for (let x = 0; x < predictionLength; x++) {
      if (predictions[x].results[0].match) {
        toxicCount += 1;
      }
    }
    if (toxicCount > 0) {
      isToxic = true;
    }
    // add it to the tweet object
    let tempObj = { ...tweets[i], toxicity: predictions, isToxic };
    // need to put back into the tweet array and
    tweetArray.push(tempObj);
  }

  console.log(tweetArray);
  // update redux
  if (type === 'full') {
    dispatch({ type: ADD_TWITTER_TOXICITY_FULL, payload: tweetArray });
  } else {
    dispatch({ type: ADD_TWITTER_TOXICITY_PARTIAL, payload: tweetArray });
  }
  return tweetArray;
};
