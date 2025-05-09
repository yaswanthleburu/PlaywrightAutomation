// import { Given, When, Then } from '@cucumber/cucumber';
// import { Browser, Page, chromium, expect } from '@playwright/test';
// import { BillingPage } from '../../pages/billingpagge';
// import { LoginPage } from '../../pages/loginpage';
// import { InvoicePage } from '../../pages/invoicepage'
// import { HomePage } from '../../pages/homepage'
// import { CompaniesPage } from '../../pages/companiespage';
// import { BasePage } from '../../pages/basepage';
// import { PlaywrightDriver } from '../../utils/playwrightdriver';

// let browser: Browser;
// let page: Page;
// let billingPage: BillingPage;
// let loginPage: LoginPage;
// let invoicePage: InvoicePage;
// let homePage: HomePage;
// let companiesPage: CompaniesPage;
// let basePage: BasePage;
// let playwrightDriver: PlaywrightDriver;


// Then('I Verify search link is available', { timeout: 20000 }, async function () {
//   companiesPage = new CompaniesPage(this.page);
//   await companiesPage.verifySearachLink();

// });

// When('I navigate to search page', { timeout: 20000 }, async function () {
//   await companiesPage.clickSearachLink();
// });

// Then('I Verify {string} page is available', { timeout: 20000 }, async function (searchPageName: string) {
//   await companiesPage.verifySearchPage(searchPageName);
// });

// Then('I verify that the {string} page is displayed', { timeout: 20000 }, async function (pageName: string) {
//   let currentPage = pageName.toLowerCase() + "Page"
//   const comPage = this.pages.get(currentPage);
//   await comPage.verifyPageTitle();

// });

// When('I click the {string} on the {string} Page', { timeout: 20000 }, async function (elementName: string, pageName: string) {
//   playwrightDriver = new PlaywrightDriver(this.page);
//   const pageInstance = this.pages.get(pageName);
//   if (!pageInstance) {
//     throw new Error('No page object found for key: ${pageName,}');
//   }
//   await playwrightDriver.clickElement(pageInstance[elementName.toLowerCase()]);
// });