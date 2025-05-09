
// import { When, Then } from '@cucumber/cucumber';
// import { CompaniesPage } from '../../pages/companiespage'
// import { HomePage } from '../../pages/homepage';
// import { expect } from '@playwright/test';
// import { BasePage } from '../../pages/basepage';




// let companiesPage: CompaniesPage;
// let homePage: HomePage;
// let basePage: BasePage;



// When('I clicked on the {string}', {}, async function (menuText: string) {
//     homePage = new HomePage(this.page);
//     const visible = await homePage.navigatingToDataManagement(menuText);
//     console.log('Data Management is visible:', visible);
//     expect(visible).toBeTruthy();
// });

// Then('I select the {string}', {}, async function (subMenu: string) {
//     await homePage.navigatingToCompanyManagement(subMenu);
// });

// Then('I select the {string} page', { timeout: 20000 }, async function (subMenuText: string) {
//     await homePage.navigatingToCompaniesPage(subMenuText);
// });

// Then('I verified {string} page', {}, async function (pageText: string) {
//     companiesPage = new CompaniesPage(this.page);
//     basePage = new BasePage(this.page);
//     await companiesPage.navigatingToCompaniesPageText(pageText);
// });

// Then('I select the option menu', {}, async function () {
//     await companiesPage.clickingOnCompaniesOptions();
// });

// Then('I verified Option menu', {}, async function () {
//     const optionPopup = await companiesPage.verifyingOptionsMenu();
// });

// Then('I clicked on Add new Option in option menu and checked the check box', { timeout: 20000 }, async function () {
//     await companiesPage.addNewAndCheckUncheck();
//     await companiesPage.selectRadioButton();
// });

// // When('I selected on list of items', {timeout:20000}, async function () {
// //     companiesPage = new CompaniesPage(this.page);
// //     await companiesPage.selectOneOptionInListBox();
// // });

// When('I selected on multiple list of items', { timeout: 20000 }, async function () {
//     companiesPage = new CompaniesPage(this.page);
//     await companiesPage.selectMultipleOptionInListBox();
// });

// When('I selected report and navigate to new tab', { timeout: 20000 }, async function () {
//     companiesPage = new CompaniesPage(this.page);
//     await companiesPage.navigateToReport();
// });