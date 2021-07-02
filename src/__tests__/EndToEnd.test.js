// import { Jest } from '@jest/environment';
// import { jest } from '@jest/globals';

import puppeteer from "puppeteer";

let browser;
let page;
beforeAll(async () => {
  jest.setTimeout(40000);
  browser = await puppeteer.launch();
  // browser = await puppeteer.launch({
  //   headless: false,
  //   slowMo: 250, // slow down by 250ms
  //   ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
  // });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('.event');
  await page.waitForSelector('.city');
});

describe('show/hide an event details', () => {
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .EventDetails'); //.description?
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');

    const eventDetails = await page.$('.event .EventDetails');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .EventDetails');
    expect(eventDetails).toBeNull();
  });
});

describe('filter events by city', () => {

  test('when user opens app, they should see all upcoming events in all cities', async () => {
    const EventsList = await page.$$('.event');
    expect(EventsList.length).toBe(2);
  });

  test("the user should receive a list of cities (suggestions) that match what they’ve typed", async () => {

    await page.type(".city", "Berlin");
    const cityMatch = await page.$$('.matchSuggestion');

    expect(cityMatch.length).toBe(1);
  });

  test("when click on a suggestion user should receive a list of upcoming events in that city", async () => {
    await page.click(".matchSuggestion");

    const EventsList = await page.$$('.event');
    expect(EventsList.length).toBe(1);
  });

  test('when user click on seeAll they should receive a list of all upcoming events', async () => {
    await page.type('.city', 'Berlin');
    await page.click('.seeAll');

    const EventsList = await page.$$('.event');
    expect(EventsList.length).toBe(2);  //mockData 2 events
  });
});