import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class QuickTrackingPage extends BasePage {
    
    private readonly rightFrame: FrameLocator;
    
    // 
    private readonly unitmovements: Locator;
    
 

    constructor(page: Page) {
        super(page);
        this.rightFrame = this.getRightFrame();
        
        this.unitmovements=this.rightFrame.locator('//span[text()="Unit Movements"]')

    }
}