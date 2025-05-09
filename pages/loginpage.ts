
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';
import { PlaywrightDriver } from '../utils/playwrightdriver';
import { CompaniesPage } from '../pages/companiespage';

let companiesPage: CompaniesPage;
let playwrightDriver: PlaywrightDriver;

export class LoginPage extends BasePage {
  private readonly mainFrame: FrameLocator;
  private readonly rightFrame:FrameLocator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly emailMandR: Locator;
  private readonly passwordMandR: Locator;
  private readonly loginButtonMandR: Locator;
  private readonly loader :Locator;


  constructor(page: Page) {
    super(page);


    // Assumes page is already navigated
    this.mainFrame = this.getMainFrame();
    this.rightFrame = this.getRightFrame();  

    // Define locators once
    this.emailInput = this.mainFrame.locator('#tbEmail');
    this.passwordInput = this.mainFrame.locator('input[type="password"]');
    this.loginButton = this.mainFrame.locator('#lbnLogin');

    // this.loader = this.rightFrame.locator("//body[@class='yui-skin-sam masked']//div[@id='wait_c']");
    this.loader = this.rightFrame.locator("//body[@class='yui-skin-sam masked']//div[@id='wait_c']");

    this.emailMandR = this.locator("div.row #tbEmail");
    this.passwordMandR = this.locator("div.row #tbUserPass");
    this.loginButtonMandR = this.locator("#lbnLogin");
  }

  playwrightDriver = new PlaywrightDriver(this.page);
  
  /**
   * Perform login with email and password
   */
  async login(email: string, password: string): Promise<void> {
    companiesPage = new CompaniesPage(this.page);
    await this.playwrightDriver.enterText(this.emailInput,email);
    await this.playwrightDriver.enterText(this.passwordInput,password);
    await this.playwrightDriver.clickElement(this.loginButton);
    await this.playwrightDriver.waitForLoaderToDisappear(this.page, this.loader);
    if (await this.playwrightDriver.isActionTriggeredAfterClick(this.loginButton)) {
      console.log('Action successfully triggered after click.');
    } else {
      console.log('Action not triggered or element did not appear.');
    }
  }

  /**
   * Validate login was successful by checking the current URL
   */
  async validateLoginSuccess(): Promise < void> {
      await expect(this.page).toHaveURL('https://cmsdemo.euoutsourcing.com/CMSystem.htm');
    }
  

  /**
   * Perform login with email and password
   */
  async loginMandR(email: string, password: string): Promise<void> {
    // await this.emailInput.waitFor();
    // await this.emailInput.fill(email);
    // await this.passwordInput.fill(password);
    await this.playwrightDriver.enterText(this.emailMandR,email);
    await this.playwrightDriver.enterText(this.passwordMandR,password);
    await this.playwrightDriver.clickElement(this.loginButtonMandR);
    if (await this.playwrightDriver.isActionTriggeredAfterClick(this.loginButtonMandR)) {
      console.log('Action successfully triggered after click.');
    } else {
      console.log('Action not triggered or element did not appear.');
    }
  }}