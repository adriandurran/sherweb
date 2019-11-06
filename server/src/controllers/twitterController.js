import axios from 'axios';

import { getTwitterAccessToken } from '../services/twitterServices';
import { getLatLng } from '../services/geoServices';

export const twitterSearch = async (req, res) => {
  const { keywords, hashtags, location, radius } = req.body;
  const access_token = await getTwitterAccessToken();

  if (access_token === null) {
    res.status(403).send('Access keys are invalid');
  }
  let searchParams;

  if (!keywords) {
    searchParams = encodeURIComponent(`${hashtags}`);
  }
  if (!hashtags) {
    searchParams = encodeURI(`${keywords}`);
  }

  if (hashtags && keywords) {
    searchParams = encodeURIComponent(`${keywords} ${hashtags}`);
  }
  // uri encode search parameters....

  const headers = {
    Authorization: `Bearer ${access_token}`
  };

  console.log(searchParams);

  let paramsS = {
    q: searchParams,
    tweet_mode: 'extended',
    result_type: 'recent',
    count: 100
  };
  // if there is a location.....get location
  // default at moment to 50km radius
  if (location) {
    const { lat, lng } = await getLatLng(location);
    const locParams = `${lat},${lng},${radius}km`;
    paramsS = {
      ...paramsS,
      geocode: locParams
    };
  }

  try {
    const result = await axios({
      method: 'get',
      url: 'https://api.twitter.com/1.1/search/tweets.json',
      headers,
      params: paramsS
    });

    res.send(result.data);
  } catch (error) {
    console.log(error);
    res.send(error.response);
  }
};
