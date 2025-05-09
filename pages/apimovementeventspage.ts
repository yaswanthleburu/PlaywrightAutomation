import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class ApiMovementEventsPage extends BasePage {
    
    private readonly rightFrame: FrameLocator;
    
    // 
    private readonly movementeventcustomers: Locator;
    
 

    constructor(page: Page) {
        super(page);
        this.rightFrame = this.getRightFrame();
        
        this.movementeventcustomers=this.rightFrame.locator('//td[text()="Movement Event Customers"]')

    }
}