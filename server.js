const puppeteer = require('puppeteer');
const cors = require('cors')
const express = require('express');

const app = express();

app.use(cors())

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=weather');
  await page.screenshot({ path: 'weather.png' });

  await browser.close();
  res.sendFile(__dirname + '/weather.png');

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

