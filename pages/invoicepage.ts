import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class InvoicePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Fill invoice number and click search
   */
  async findInvoice(invoiceNumber: string): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator('#ContentPlaceHolder1_tbInvoiceNumber').fill(invoiceNumber);
    await rightFrame.locator('#ContentPlaceHolder1_lbnFind').click();
    // await page.waitForTimeout(5000);
  }

  /**
   * Verify if the invoice number appears in the result list
   */
  async verifyInvoice(invoiceNumber: string): Promise<void> {
    const rightFrame = this.getRightFrame();
    const invoiceCell = rightFrame.locator("//tr[@class='grvRowStyle1']//td[4]");
    await this.expectText(invoiceCell, invoiceNumber);
  }

  /**
   * Select invoice checkbox
   */
  async selectInvoiceCheckbox(): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator("[id^='chkItem']").first().click(); // more dynamic
  }

  /**
   * Open options menu and click Download Invoices
   */
  async clickDownloadOptions(): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator('#ContentPlaceHolder1_ahOptions').click();
    await rightFrame.locator("[title='Download Invoices']").click();
  }

  /**
   * Download the invoice via inner iframe
   */
  async confirmAndDownloadInvoice(): Promise<void> {
    const innerFrame = this.getInnerIframeInRightFrame(); // defaults to #ifrMaster
    const label = innerFrame.locator('#ContentPlaceHolder1_lblNoOfInvoices');
    const message = await this.getText(label);
    console.log("Invoice Download Message:", message);

    await innerFrame.locator("//a[text()='Download']").click();
    await innerFrame.locator("//a[text()='Cancel']").click();
  }

  /**
   * Close Options Menu
   */
  async closeOptionsMenu(): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator("//div[@id='divMenu']//a[@title='Close']").click();
  }

  /**
   * Export current list to Excel
   */
  async exportToExcel(): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator("//a[@title='Export to Excel']").click();
    await rightFrame.locator("//a[@title='This Page Only']").click();
  }

  /**
   * Get applied filter message
   */
  async getFilterText(): Promise<string | null> {
    const rightFrame = this.getRightFrame();
    return await rightFrame.locator('#ContentPlaceHolder1_lblFilterApplied').textContent();
  }

  /**
   * Remove filter
   */
  async removeFilter(): Promise<void> {
    const rightFrame = this.getRightFrame();
    await rightFrame.locator('#ContentPlaceHolder1_lbnRemoveFilter').click();
  }
}
