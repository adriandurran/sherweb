import axios from 'axios';

import { getTwitterAccessToken } from '../services/twitterServices';

// do we have an existing access token?
// if not get a token
// if we do use token
// if token fails get a new token
// uri encode search parameters....

export const twitterSearch = async (req, res) => {
  const searchParams = req.body;
  const access_token = await getTwitterAccessToken();

  if (access_token === null) {
    res.status(403).send('Access keys are invalid');
  }

  // if there is a location.....get location
  // uri encode search parameters....
};
