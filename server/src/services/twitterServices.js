import axios from 'axios';

// do we have an existing access token?
// if not get a token
// if we do use token
// if token fails get a new token

// uri encode search parameters....

export const getTwitterAccessToken = async () => {
  let accessToken = await checkForToken();
  // do we have an existing access token?
  if (accessToken !== null) {
    return accessToken;
  }
  // if not get a token
  accessToken = await getNewToken();
  // if we do use token
  if (accessToken !== null) {
    // save to database (will do this later)
    return accessToken;
  }
  // if token fails get a new token
  return null;
};

const checkForToken = async () => {
  // temp need to hook in db
  return null;
};

const getNewToken = async () => {
  const keyString = `${process.env.TWITTER_API_KEY}:${process.env.TWITTER_SECRET_KEY}`;
  const base64Key = Buffer.from(keyString).toString('base64');
  console.log(base64Key);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64Key}`
  };

  try {
    const result = await axios({
      method: 'post',
      url: 'https://api.twitter.com/oauth2/token',
      headers,
      params: {
        grant_type: 'client_credentials'
      }
    });

    const { access_token } = result.data;

    return access_token;
  } catch (error) {
    console.log(error.response.data);
    return null;
  }
};
