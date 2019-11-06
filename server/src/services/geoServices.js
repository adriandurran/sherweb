import axios from 'axios';

export const getLatLng = async (city) => {
  const apiKey = process.env.OPENCAGE_APIKEY;
  const openCageUrl = 'https://api.opencagedata.com/geocode/v1/json?';
  try {
    const result = await axios.get(`${openCageUrl}q=${city}+gb&key=${apiKey}`);
    return result.data.results[0].geometry;
  } catch (error) {
    console.log(error);
    return null;
  }
};
