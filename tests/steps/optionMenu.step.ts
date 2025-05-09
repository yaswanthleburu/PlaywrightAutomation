import { When, Then } from '@cucumber/cucumber';
import { CompaniesPage } from '../../pages/companiespage';
import { PlaywrightDriver } from '../../utils/playwrightdriver';

let companiesPage: CompaniesPage;
let playwrightDriver: PlaywrightDriver;

Then('I verify that the {string} page is displayed under {string}', { timeout: 30000 }, async function (elementName: string, pageName: string) {
    const pageInstance = this.pages.get(pageName);
    if (!pageInstance) {
        throw new Error('No page object found for key: ${pageName}');
    }
    // const comPage = this.pages.get(pageName);
    // await comPage.verifyCompaniesPageTitle(pageInstance[elementName.toLowerCase()], elementName);
    companiesPage = new CompaniesPage(this.page);
    await companiesPage.verifyCompaniesPageTitle(pageInstance[elementName.toLowerCase()], elementName);
});

When('I click the {string} on the {string} Page', { timeout: 30000 }, async function (elementName: string, pageName: string) {
    playwrightDriver = new PlaywrightDriver(this.page);
    const pageInstance = this.pages.get(pageName);
    if (!pageInstance) {
        throw new Error('No page object found for key: ${pageName,}');
    }
    await playwrightDriver.clickElement(pageInstance[elementName.toLowerCase()]);
});

Then('I click the option menu', { timeout: 30000 }, async function () {
    companiesPage = new CompaniesPage(this.page);
    await companiesPage.clickingOnOptions();
});

Then('I verified Option menu popup', { timeout: 30000 }, async function () {
    companiesPage = new CompaniesPage(this.page);
    await companiesPage.verifyingOptionsMenu();
});

Then('I wait for page to load', { timeout: 30000 }, async function () {
    playwrightDriver = new PlaywrightDriver(this.page);
    await playwrightDriver.waitForPageLoad();
});