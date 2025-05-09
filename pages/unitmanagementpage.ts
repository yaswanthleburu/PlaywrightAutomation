import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class UnitManagementPage extends BasePage {
    
    private readonly rightFrame: FrameLocator;
    
    // Units locators
    private readonly units: Locator;

    constructor(page: Page) {
        super(page);
        this.rightFrame = this.getRightFrame();
        
        // Units locators
        this.units= this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Units']");
    }
}