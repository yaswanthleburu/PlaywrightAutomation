import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class PoolManagementPage extends BasePage {
    
    private readonly rightFrame: FrameLocator;

    // Pools locators
    private readonly pools: Locator;

    constructor(page: Page) {
        super(page);

        this.rightFrame = this.getRightFrame();
        
        // Pools locators
        this.pools= this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Pools']");
    }
}