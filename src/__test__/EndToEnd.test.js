import puppeteer from "puppeteer";


describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(/*{
      headless: false,
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    }*/);
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.listitem');
  });
  afterAll(() => {
    browser.close();
  });
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.listitem .event-details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.listitem .show-details');

    const eventDetails = await page.$('.listitem .event-details');
    expect(eventDetails).toBeDefined();
  });
  test('User can collapse an event to hide details', async () => {
    await page.click('.listitem .hide-details');
    const eventDetails = await page.$('.listitem .event-details');
    expect(eventDetails).toBeNull();
  });
});

describe('filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(/*{
      headless: false,
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    }*/);
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.listitem');
  });
  afterAll(() => {
    browser.close();
  });
  test('the user should see the list of all upcoming events', async () => {
    const eventList = await page.$('#event');
    expect(eventList).toBeDefined();
  });
  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', "Berlin");

    const eventList = await page.$('.city .listitem');
    expect(eventList).toBeDefined();
  });
  test('User can select a city from the suggested list', async () => {
    await page.click('.listitem');
    const suggestedList = await page.$('.listitem .suggested-city');
    expect(suggestedList).toBeDefined();
  });
});