import * as toxicity from '@tensorflow-models/toxicity';

// take results
// run through model
// add to results
// update redux store
export const runToxicityCheck = async (tweets) => {
  const threshold = 0.9;
  const tweetLength = tweets.length;

  const tweetArray = [];

  for (let i = 0; i < 10; i++) {
    tweetArray.push(tweets[i].full_text);
    let results = await checkToxicText(tweetArray, threshold);
    // need to put back into the tweet object and update redux
    console.log(results);
  }
};

const checkToxicText = async (text, threshold) => {
  const sentences = [text];

  try {
    const model = await toxicity.load(threshold);
    const predictions = await model.classify(sentences);
    return predictions;
  } catch (error) {
    return null;
  }
};
