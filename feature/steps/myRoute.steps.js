import 'jest';

import {
  defineFeature,
  loadFeature,
} from 'jest-cucumber';

const feature = loadFeature('./feature/features/myRoute.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;

defineFeature(feature, test => {

  beforeEach(async () => {
    jest.setTimeout(20000000);
  });

  test('Trying to view a route', ({ given, when, then }) => {
    
    given('I am a user trying to view my routes', async () => {
      browser = await puppeteer.launch({
        headless: false
      });
      // login
      page = await browser.newPage();
      await page.goto("http://localhost:3000/#/login", {
        waitUntil: 'networkidle2'
      });
      await page.waitForSelector(".sc-EHOje.cffgrt");
      await page.type(".sc-EHOje.cffgrt", "https://saragg.solid.community/profile/card#me");
      await page.evaluate(() => {
        let btns = [...document.querySelectorAll("button")];
        btns.forEach(function (btn) {
          if (btn.innerText === "Iniciar sesión"){
            btn.click();
          }
        });
      });
      await page.waitForNavigation({
        waitUntil: 'networkidle2'
      });
      await page.waitForSelector("[id='username']", {visible: true});
      await page.type("[id='username']", "saragg");
      await page.waitFor(500);
      await page.waitForSelector("[id='password']", {visible: true});
      await page.type("[id='password']", "Prueba_123", {visible: true});
      await page.waitFor(500);
      await page.evaluate(() => {
        let btns = [...document.querySelector(".form-horizontal.login-up-form").querySelectorAll("button")];
        btns.forEach(function (btn) {
          if (btn.innerText == "Log In")
            btn.click();
        });
      });
      await page.waitForNavigation({
        waitUntil: 'networkidle2'
      });
      expect(page.url()).toBe("http://localhost:3000/viade_es3c/#/welcome")

      await page.goto("http://localhost:3000/#/myRoutes", {
        waitUntil: 'networkidle2'
      });

    });

    when('Pressing view route button', async () => {
      await page.evaluate(() => {
        let submit = document.getElementById("viewRoute");
        submit.click();
      });
    });

    then('It shows the map with the route drawn', async () => {

    })

  });
});
