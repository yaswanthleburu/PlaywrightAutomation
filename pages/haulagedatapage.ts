import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class HaulageDataPage extends BasePage {
    
    private readonly rightFrame: FrameLocator;

    // Default OC Haulage Type locators
    private readonly defaultochaulagetype: Locator;

    // Haulage Data - Flat File locators
    private readonly haulagedataflatfile: Locator;

    constructor(page: Page) {
        super(page);

        this.rightFrame = this.getRightFrame();
        
        // Default OC Haulage Type locators
        this.defaultochaulagetype = this.rightFrame.locator("//td[text()='Default OC Haulage Type']");

        // Haulage Data - Flat File locators
        this.haulagedataflatfile = this.rightFrame.locator("//td[text()='Haulage Data - Flat File']");
    }
}