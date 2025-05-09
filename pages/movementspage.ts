import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basepage';
import { PlaywrightDriver } from '../utils/playwrightdriver';

export class MovementsPage extends BasePage {

    private readonly rightFrame: FrameLocator;

    // Unit Movements locators
    private readonly unitmovements: Locator;
    
    // Unit Rejected Moves locators
    private readonly unitrejectedmoves: Locator;

    // Archived Rejected Moves locators
    private readonly archivedrejectedmoves:Locator;

    constructor(page: Page) {
        super(page);

        this.rightFrame = this.getRightFrame();

        // Unit Movements locators
        this.unitmovements = this.rightFrame.locator("//td[@class='txtBlack11Bold']//span[text()='Unit Movements']");

        this.unitrejectedmoves = this.rightFrame.locator("//td[@class='txtGray15Bold' and starts-with(normalize-space(.), 'Unit Rejected Moves')]");

        this.archivedrejectedmoves = this.rightFrame.locator("//td[contains(text(),'Archived Rejected Moves')]");



        
    }

}