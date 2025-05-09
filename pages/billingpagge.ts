
import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class BillingPage extends BasePage {

     private readonly mainFrame: FrameLocator;
     private readonly leftFrame: FrameLocator;
     private readonly billingMenu: Locator;
     private readonly invVoucherMenu: Locator;
     private readonly invMenu: Locator;

  constructor(page: Page) {
    super(page);

    this.mainFrame = this.getMainFrame();
    this.leftFrame = this.getLeftFrame();

    this.billingMenu=this.leftFrame.locator("//a[text()=' Billing ']");
    this.invVoucherMenu=this.leftFrame.locator("//a[text()=' Invoices / Vouchers ']");
    this.invMenu=this.leftFrame.locator("//a[text()='Invoices']");


  }

  /**
   * Navigate to Invoices section via LeftFrame
   */
  async navigateToInvoices(): Promise<void> {
    await this.billingMenu.click();
    await this.invVoucherMenu.click();
    await this.invMenu.click();
    // const leftFrame = this.getLeftFrame();
    // await leftFrame.locator("//a[text()=' Billing ']").click();
    // await leftFrame.locator("//a[text()=' Invoices / Vouchers ']").click();
    // await leftFrame.locator("//a[text()='Invoices']").click();
  }

  /**
   * Search an invoice by invoice number in RightFrame
   */
  async searchInvoice(invoiceNo: string): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator("#ContentPlaceHolder1_tbInvoiceNumber").fill(invoiceNo);
    await rightFrame.locator("#ContentPlaceHolder1_lbnFind").click();
  }

  /**
   * Validate that a given invoice number is shown in search result
   */
  async verifyInvoiceInList(invoiceNo: string): Promise<void> {
    const rightFrame = this.getRightFrame();
    const invoiceCell = rightFrame.locator("//tr[@class='grvRowStyle1']//td[4]");
    await this.expectText(invoiceCell, invoiceNo);
  }

  /**
   * Select invoice checkbox and download options
   */
  async downloadInvoice(): Promise<void> {
    const rightFrame = this.getRightFrame();
    const innerFrame = this.getInnerIframeInRightFrame(); // defaults to ifrMaster

    await rightFrame.locator("[id^='chkItem']").first().click(); // safer with wildcard ID
    await rightFrame.locator("#ContentPlaceHolder1_ahOptions").click();
    await rightFrame.locator("[title='Download Invoices']").click();

    await this.page.waitForTimeout(3000);

    // Confirm download dialog
    const message = await this.getText(innerFrame.locator("#ContentPlaceHolder1_lblNoOfInvoices"));
    console.log("Invoice Count Message: ", message);
    await innerFrame.locator("//a[text()='Download']").click();
    await innerFrame.locator("//a[text()='Cancel']").click();

    // Close Options Menu
    await rightFrame.locator("//div[@id='divMenu']//a[@title='Close']").click();
  }

  /**
   * Export invoice list to Excel
   */
  async exportInvoiceToExcel(): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator("//a[@title='Export to Excel']").click();
    await rightFrame.locator("//a[@title='This Page Only']").click();
  }

  /**
   * Remove applied filters
   */
  async removeFilter(): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator("#ContentPlaceHolder1_lbnRemoveFilter").click();
  }

  /**
   * Log out of the system
   */
  async logout(): Promise<void> {
    const topFrame = this.getTopFrame();
    await topFrame.locator("#lbnLogout").click();
  }
}
