import puppeteer from 'puppeteer';
import { URL } from 'url';
import axios from 'axios';

export const getSocialAccounts = async (req, res) => {
  let test = await testUrl('https://github.com', 'adandurran');
  console.log(test);

  // try {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   await page.goto(`https://github.com/adriandurran`, {
  //     waitUntil: 'networkidle2'
  //   });
  //   // do something here
  //   await page.screenshot({ path: 'example.png' });
  //   await browser.close();
  // } catch (error) {
  //   console.log(error.message);
  //   res.send(error.message);
  // }
};

async function testUrl(url, name) {
  try {
    const result = await axios({
      method: 'head',
      baseURL: url,
      url: name
    });
    if (result.status !== 200) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
