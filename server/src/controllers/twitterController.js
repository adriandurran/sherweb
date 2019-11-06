import axios from 'axios';

import { getTwitterAccessToken } from '../services/twitterServices';
import { getLatLng } from '../services/geoServices';

export const twitterSearch = async (req, res) => {
  const { keywords, hashtags, location } = req.body;
  const access_token = await getTwitterAccessToken();

  if (access_token === null) {
    res.status(403).send('Access keys are invalid');
  }

  // uri encode search parameters....
  const searchParams = encodeURIComponent(`${keywords} ${hashtags}`);
  const headers = {
    Authorization: `Bearer ${access_token}`
  };

  let paramsS = {
    q: searchParams
  };
  // if there is a location.....get location
  // default at moment to 50km radius
  if (location) {
    const { lat, lng } = await getLatLng(location);
    const locParams = `${lat},${lng},50km`;
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
