import axios from 'axios';

import { getTwitterAccessToken } from '../services/twitterServices';

// do we have an existing access token?
// if not get a token
// if we do use token
// if token fails get a new token
// uri encode search parameters....

export const twitterSearch = async (req, res) => {
  const { keywords, hashtags, location } = req.body;
  const access_token = await getTwitterAccessToken();

  if (access_token === null) {
    res.status(403).send('Access keys are invalid');
  }

  // uri encode search parameters....
  const searchParams = encodeURIComponent(`${keywords} ${hashtags}`);
  console.log(searchParams);
  const headers = {
    Authorization: `Bearer ${access_token}`
  };
  // if there is a location.....get location

  try {
    const result = await axios({
      method: 'get',
      url: 'https://api.twitter.com/1.1/search/tweets.json',
      headers,
      params: {
        q: searchParams
      }
    });

    res.send(result.data);
  } catch (error) {
    console.log(error);
    res.send(error.response);
  }
};
