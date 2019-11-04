// import puppeteer from 'puppeteer';
import { URL } from 'url';
import urlExists from 'url-exists';
import axios from 'axios';

import socialSites from '../services/socialSites';

export const getSocialAccounts = async (req, res) => {
  const name = req.params.name;

  // loop through the object and add name to the ident '{}'
  // if returns true....add to array of ok links
  // if false just ignore

  let validSites = [];

  const sitesArray = Object.entries(socialSites);

  const sitesLength = sitesArray.length;

  for (let i = 0; i < sitesLength; i++) {
    const urlS = sitesArray[i][1].replace('{}', name);
    const siteKey = sitesArray[i][0];
    if (await testURL(urlS)) {
      validSites.push({ [siteKey]: urlS });
    }
  }

  console.log(validSites);
  res.send(validSites);
};

async function testURL(url) {
  try {
    let result = await axios({
      method: 'HEAD',
      url
    });

    return /4\d\d/.test(result.statusCode) === false;
  } catch (error) {
    return false;
  }
}
