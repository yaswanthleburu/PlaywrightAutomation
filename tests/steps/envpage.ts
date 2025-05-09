// import { BeforeAll, Given, When, Then, AfterAll } from '@cucumber/cucumber';
// import dotenv from 'dotenv';
// import { chromium, Page, Browser } from 'playwright';

// let page: Page;
// let browser: Browser;

// BeforeAll(async () => {
//   const env = process.env.ENV || process.env.NODE_ENV || 'staging'; 
//   let envFilePath = '';

//   switch (env.toLowerCase()) {
//     case 'qa':
//       envFilePath = 'configuration/qa/.env.qa';
//       console.log('Running in QA environment');
//       break;
//     case 'staging':
//       envFilePath = 'configuration/staging/.env.staging';
//       console.log('Running in Staging environment');
//       break;
//     case 'production':
//       envFilePath = 'configuration/production/.env.production';
//       console.log('Running in Production environment');
//       break;
//     default:
//       envFilePath = 'configuration/qa/.env.qa';
//       console.log(`Invalid environment "${env}". Defaulting to QA.`);
//       break;
//   }

//   dotenv.config({ path: envFilePath });
//   console.log(`Loaded environment configuration from: ${envFilePath}`);
// });

// Given('I navigate to the application homepage', async () => {
//   const baseURL = process.env.BASE_URL;
//   if (!baseURL) {
//     throw new Error('BASE_URL is not defined in the environment configuration.');
//   }

//   console.log(`Navigating to: ${baseURL}`);
//   browser = await chromium.launch({ headless: process.env.HEADLESS === 'true' });
//   const context = await browser.newContext();
//   page = await context.newPage();
//   await page.goto(baseURL);
//   console.log('Page loaded successfully.');
// });

// AfterAll(async () => {
//   await browser?.close();
// });
