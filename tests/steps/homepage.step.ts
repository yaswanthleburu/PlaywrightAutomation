
  
// import { Given, When, Then } from '@cucumber/cucumber';
// import { Browser, Page, chromium, expect } from '@playwright/test';
// import { LoginPage } from '../../pages/loginpage';
// // import { CustomWorld } from '../features/support/world'; 

// let browser: Browser;
// let page: Page;
// let loginPage: LoginPage;

// Given('A web browser is at the CMS login page', { timeout: 20000 }, async function () {
 
//   console.log("🧪 this.page exists?", !!this.page); // should print true

//   // browser = await chromium.launch({ headless: false }); // set headless: true for CI/CD
//   // page = await browser.newPage();

//   await this.page.goto('https://cmsdemo.euoutsourcing.com/CMSystem.htm');

//   loginPage = new LoginPage(this.page);

//   console.log("Reached login page.");

// });

// // Given('A web browser is at the MandR login page', { timeout: 20000 }, async function () {
 
// //   console.log("🧪 this.page exists?", !!this.page); // should print true

// //   // browser = await chromium.launch({ headless: false }); // set headless: true for CI/CD
// //   // page = await browser.newPage();

// //   await this.page.goto('https://demo.chassismandr.com/Login.aspx');

// //   loginPage = new LoginPage(this.page);

// //   console.log("Reached login page.");

// // });

// When(
//   'A user enters the username {string}, the password {string}, and clicks on the login button',
//   async function (username: string, password: string) {
    
//     await loginPage.login(username, password);
  
//   }
// );

// // When(
// //   'A user enters the username {string}, the password {string}, and clicks on the login button',
// //   async function (username: string, password: string) {
    
// //     await loginPage.loginMandR(username, password);
  
// //   }
// // );

// Then('the url will land on the cms home page', async function () {
 
//   await loginPage.validateLoginSuccess();
//   // await browser.close();
 
// });


