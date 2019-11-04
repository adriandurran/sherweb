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

  for (let key in socialSites) {
    if (socialSites.hasOwnProperty(key)) {
      const urlS = socialSites[key].replace('{}', name);
      try {
        // console.log(await testURL(urlS));
        if (await testURL(urlS)) {
          validSites.push({ [key]: urlS });
        }
      } catch (error) {
        console.log(error);
      }
    }
    console.log(validSites);
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
    // console.log(/4\d\d/.test(result.statusCode) === false);
    return /4\d\d/.test(result.statusCode) === false;
  } catch (error) {
    // console.log(error);
    return false;
  }
}
