import puppeteer from 'puppeteer';

export const getSocialAccounts = async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://github.com/adriandurran`, {
      waitUntil: 'networkidle2'
    });
    // do something here
    await page.screenshot({ path: 'example.png' });
    await browser.close();
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
