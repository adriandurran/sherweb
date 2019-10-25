import axios from 'axios';

export const getSocialAccounts = async (req, res) => {
  console.log(req.params.name);
  try {
    const result = await axios.get(`https://www.github.com/${req.params.name}`);

    let rawData = '';
    // result.on('data', (chunk) => {
    //   rawData += chunk;
    // });
    // result.on('end', () => {
    //   rawData = rawData.replace(/(<([^>]+)>)/gi, '');
    //   console.log(rawData);
    // });
    rawData = result.data.replace(/(<([^>]+)>)/gi, '');
    res.send(rawData);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
