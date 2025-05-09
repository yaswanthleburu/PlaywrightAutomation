import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';
import { PlaywrightDriver } from '../utils/playwrightdriver';

export class CompaniesPage extends BasePage {
    
    private readonly rightFrame: FrameLocator;
    private readonly playwrightDriver: PlaywrightDriver;

    // Actions locators
    private readonly Options: Locator;
    private readonly OptionsPopup: Locator;
    
    // Companies locators
    private readonly companies: Locator;  
    
    // Users locators
    private readonly users: Locator;
    
    // Roles locators
    private readonly roles: Locator;

    // Paired Move FTP Settings locators
    private readonly pairedmoveftpsettings: Locator;

    // Outbound EDI 301 FTP Settings locators
    private readonly outboundedi301ftpsettings: Locator;


    constructor(page: Page) {
        super(page);

        this.playwrightDriver = new PlaywrightDriver(page);
        this.rightFrame = this.getRightFrame();
     
        // Actions locators
        
        this.Options = this.rightFrame.locator("//td[@align='right']//a[@title='Options']");
        this.OptionsPopup = this.rightFrame.locator("div #divMenu .txtBlack11Bold");
        
        // Companies locators
        this.companies = this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Companies']");

        // Users locators
        this.users = this.rightFrame.locator("//td[text()='Users']");

        // Roles locators
        this.roles= this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Roles']");

        // Paired Move FTP Settings locators
        this.pairedmoveftpsettings= this.rightFrame.locator("//td[text()='Paired Move FTP Settings']");

        // Outbound EDI 301 FTP Settings locators
        this.outboundedi301ftpsettings=this.rightFrame.locator('//td[text()="Outbound EDI 301 FTP Settings"]');
    }

    /**
     * click on Companies Options
     */
    async clickingOnOptions(): Promise<void> {
        await this.playwrightDriver.clickElement(this.Options); // Wait for the options menu to appear
    }

    /**
     * Verify the Options Menu
     */
    async verifyingOptionsMenu(): Promise<void> {
        // await this.waitForElement(this.companiesOptionsPopup, 'attached'); // Wait for the options menu to be visible
        await this.playwrightDriver.toBeVisible(this.OptionsPopup);
    }
    
    /**
     * Click on the Companies link
     */
    async verifyCompaniesPageTitle(lo: Locator, txt: string): Promise<void> {
        const text = await this.playwrightDriver.getText(lo);
        const actText = text.replace(/[-\s]/g, '');
        console.log('Companies page text:', actText);
        await this.playwrightDriver.exactText(actText, txt);
    }
}