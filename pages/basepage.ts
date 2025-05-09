
import { Page, FrameLocator, Locator, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  private static readonly maxTimeout = 10000;

  constructor(page: Page) {
    this.page = page;
  }

  // ---------- Utility Methods ----------

  async visit(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async click(locator: string | Locator): Promise<void> {
    await (typeof locator === 'string' ? this.page.locator(locator) : locator).click();
  }

  async fill(locator: string | Locator, value: string): Promise<void> {
    await (typeof locator === 'string' ? this.page.locator(locator) : locator).fill(value);
  }

  async getText(locator: string | Locator): Promise<string> {
    return (await (typeof locator === 'string' ? this.page.locator(locator) : locator).textContent()) || '';
  }

  async expectText(locator: string | Locator, text: string): Promise<void> {
    await expect(typeof locator === 'string' ? this.page.locator(locator) : locator).toContainText(text);
  }

  async isVisible(locator: string | Locator): Promise<boolean> {
    return (typeof locator === 'string' ? this.page.locator(locator) : locator).isVisible();
  }

  async waitForTimeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }

  async waitForElement(locator: Locator, state: 'attached' | 'detached' | 'visible' | 'hidden', timeout = BasePage.maxTimeout): Promise<Locator> {
    await locator.waitFor({ state, timeout });
    return locator;
  }

  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  // ---------- Frame Access Helpers ----------

  getMainFrame(): FrameLocator {
    return this.page.frameLocator("frame[name='MainFrame']");
  }

  getTopFrame(): FrameLocator {
    return this.getMainFrame().frameLocator("frame[name='TopFrame']");
  }

  getLeftFrame(): FrameLocator {
    return this.getMainFrame().frameLocator("frame[name='LeftFrame']");
  }

  getRightFrame(): FrameLocator {
    return this.getMainFrame().frameLocator("frame[name='RightFrame']");
  }

  getBottomFrame(): FrameLocator {
    return this.getMainFrame().frameLocator("frame[name='BottomFrame']");
  }

  getInnerIframeInRightFrame(id = 'ifrMaster'): FrameLocator {
    return this.getRightFrame().frameLocator(`iframe[id='${id}']`);
  }
}
