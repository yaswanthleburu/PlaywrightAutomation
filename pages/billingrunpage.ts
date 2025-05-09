import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class BillingRunPage extends BasePage {
  private readonly rightFrame: FrameLocator;
  private readonly innerFrame: FrameLocator;
  private readonly billingrun:Locator;
  



  constructor(page: Page) {
    super(page);

    // Assumes page is already navigated
    this.rightFrame = this.getRightFrame();
    this.innerFrame=this.getInnerIframeInRightFrame();
    
    this.billingrun=this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Billing Run']")

  }
}