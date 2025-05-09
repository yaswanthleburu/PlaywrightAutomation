import { BeforeAll, AfterAll, Before, After, AfterStep, setDefaultTimeout, World, Status, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, firefox, webkit, Page } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { getConfig } from '../../../utils/config'; // Adjust path if needed
import chalk from 'chalk';

// Page objects
import { HomePage } from '../../../pages/homepage';
import { LoginPage } from '../../../pages/loginpage';
import { BillingPage } from '../../../pages/billingpagge';
import { InvoicePage } from '../../../pages/invoicepage';
import { CompaniesPage } from '../../../pages/companiespage';
import { BasePage } from '../../../pages/basepage';
import { PoolManagementPage } from '../../../pages/poolmanagementpage';
import { UnitManagementPage } from '../../../pages/unitmanagementpage';
import { HaulageDataPage } from '../../../pages/haulagedatapage';
import { MovementsPage } from '../../../pages/movementspage';
import { ApiMovementEventsPage } from '../../../pages/apimovementeventspage';
import { QuickTrackingPage } from "../../../pages/quicktrackingpage";
import { ReferenceDataPage } from "../../../pages/referencedatapage";
import { BillingRunPage } from "../../../pages/billingrunpage";

let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(60 * 1000);

// Extend World to include pages map
declare global {
  interface CustomWorld extends World {
    browser: Browser;
    context: BrowserContext;
    page: Page;
    pages: Map<string, any>;
    result?: { status: string };
    pickle?: { name: string };
  }
}

BeforeAll(async function () {
  const { browser: browserName, headless } = getConfig();

  let browserType;
  switch (browserName) {
    case 'firefox':
      browserType = firefox;
      break;
    case 'webkit':
      browserType = webkit;
      break;
    default:
      browserType = chromium;
      break;
  }

  browser = await browserType.launch({ headless });
  console.log('✅ Browser launched: ${browserName}, headless: ${headless}');
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();

  this.browser = browser;
  this.context = context;
  this.page = page;

  // Instantiate page objects
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const billingPage = new BillingPage(page);
  const invoicePage = new InvoicePage(page);
  const companiesPage = new CompaniesPage(page);
  const basePage = new BasePage(page);
  const poolManagementPage = new PoolManagementPage(page)
  const unitManagementPage = new UnitManagementPage(page)
  const haulageDataPage = new HaulageDataPage(page)
  const movementsPage = new MovementsPage(page)
  const apiMovementEventsPage = new ApiMovementEventsPage(page)
  const quickTrackingPage = new QuickTrackingPage(page)
  const referenceDataPage = new ReferenceDataPage(page)
  const billingRunPage = new BillingRunPage(page)

  // Store them in a map for use in step definitions
  this.pages = new Map<string, any>();
  this.pages.set("loginPage", loginPage);
  this.pages.set("homePage", homePage);
  this.pages.set("billingPage", billingPage);
  this.pages.set("invoicePage", invoicePage);
  this.pages.set("companiesPage", companiesPage);
  this.pages.set("basePage", basePage);
  this.pages.set("poolManagementPage", poolManagementPage);
  this.pages.set("unitManagementPage", unitManagementPage);
  this.pages.set("haulageDataPage", haulageDataPage)
  this.pages.set("movementsPage", movementsPage);
  this.pages.set("apiMovementEventsPage", apiMovementEventsPage);
  this.pages.set("quickTrackingPage", quickTrackingPage);
  this.pages.set("referenceDataPage", referenceDataPage);
  this.pages.set("billingRunPage", billingRunPage);

  console.log('🧪 New test context/page created and all page objects initialized.');
});

// After(async function () {
//   await this.page.close();
//   await this.context.close();
//   console.log('♻️ Page and context closed after scenario.');
// });

After(async function (this: CustomWorld) {
  try {
    if (this.result?.status === 'PASSED') {
      console.log(chalk.green(`Passed`));
    } else if (this.result?.status === 'FAILED') {
      console.log(chalk.red(`Failed`));
    }

    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    console.log(chalk.cyan('♻️ Page and context closed after scenario.'));
  } catch (err) {
    console.error(chalk.yellow('⚠️ Error in After hook:'), err);
  }
});

AfterStep(async function ({ result, pickle }) {
  if (result.status === Status.FAILED) {
    const dir = './screenshots';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const fileName = `${pickle.name.replace(/\s+/g, '_')}_${Date.now()}.png`;
    const screenshot = await this.page.screenshot({ path: path.join(dir, fileName) });
    this.attach(screenshot, 'image/png');
  }
});

AfterAll(async function () {
  await browser.close();
  console.log('🛑 Browser closed after all tests.');
});