import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';
import { PlaywrightDriver } from '../utils/playwrightdriver';

export class CompaniesPage extends BasePage {

    private readonly rightFrame: FrameLocator;

    // Companies page locators
    private readonly companies: Locator;

    // Users page locators
    private readonly users: Locator;

    // Roles page locators
    private readonly roles: Locator;

    // Paired Move FTP Settings page locators
    private readonly pairedmoveftpsettings: Locator;

    // Outbound EDI 301 FTP Settings page locators
    private readonly outboundedi301ftpsettings: Locator;

    constructor(page: Page) {
        super(page);

        this.rightFrame = this.getRightFrame();

        // Define Companies page locators
        this.companies = this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Companies']");

        // Define Users page locators
        this.users = this.rightFrame.locator("//td[text()='Users']");

        // Define Roles page locators
        this.roles = this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Roles']");

        // Define Paired Move FTP Settings page locators
        this.pairedmoveftpsettings = this.rightFrame.locator("//td[text()='Paired Move FTP Settings']");

        // Define Outbound EDI 301 FTP Settings page locators
        this.outboundedi301ftpsettings = this.rightFrame.locator('//td[text()="Outbound EDI 301 FTP Settings"]');
    }
}