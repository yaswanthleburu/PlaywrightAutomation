import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class ReferenceDataPage extends BasePage {
    
    private readonly rightFrame: FrameLocator;
    
    // 
    private readonly systemreferencedata: Locator;
    private readonly poolreferencedata:Locator;
    private readonly addresstypes:Locator;
 

    constructor(page: Page) {
        super(page);
        this.rightFrame = this.getRightFrame();
        
        this.systemreferencedata=this.rightFrame.locator('//td[@class="txtGray15Bold"]');
        this.poolreferencedata	=this.rightFrame.locator('//td[@class="txtGray15Bold"]');
        this.addresstypes= this.rightFrame.locator('//td[text()= "Address Types"]');



    }
}