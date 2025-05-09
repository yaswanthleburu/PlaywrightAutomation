import { Page, Locator, FrameLocator } from '@playwright/test';
import { BasePage } from './basepage';

export class HomePage extends BasePage {

    private readonly leftFrame: FrameLocator;

    // Data Management menu locators
    public datamanagementmenu: Locator;

    // Company Management menu locators
    public companymanagementmenu: Locator;

    // Companies menu locators
    public companiesmenu: Locator;

    // Users menu locators
    public usersmenu: Locator;

    // Roles menu locators
    public rolesmenu: Locator;

    // Paired Move FTP Settings menu locators
    public pairedmoveftpsettingsmenu: Locator;

    // Outbound EDI 301 FTP Settings menu locators
    public outboundedi301ftpsettingsmenu: Locator;

    // Pool Management menu locators
    public poolmanagementmenu: Locator;

    // Pools menu locators
    public poolsmenu: Locator;

    // Unit Management menu locators
    public unitmanagementmenu: Locator;

    // Units menu locators
    public unitsmenu: Locator;

    // Tracking menu locators
    public trackingmenu: Locator;

    // Haulage Data menu locators
    public haulagedatamenu: Locator;

    // Default OC Haulage Type menu locators
    public defaultochaulagetypemenu: Locator;

    // Haulage Data - Flat File menu locators
    public haulagedataflatfilemenu: Locator;

    // Movements menu locators
    public movementsmenu: Locator;

    // Unit Movements menu locators
    public unitmovementsmenu: Locator;

    // Unit Rejected Moves menu locators
    public unitrejectedmovesmenu: Locator;
    
    // Archived Rejected Moves menu locators
    public archivedrejectedmovesmenu: Locator;
    
    // Movement Event Customers menu locators
    public movementeventcustomersmenu:Locator;
    
    //
    public apimovementeventsmenu:Locator;

    public movementeventtransactionsmenu:Locator;

    public quicktrackingmenu:Locator;

    public systemadministrationmenu:Locator;

    public referencedatamenu:Locator;

    public systemreferencedatamenu:Locator;

    public poolreferencedatamenu:Locator;

    public billingmenu:Locator;

    public billingrunmenu:Locator;

    public billingrunsubmenu:Locator;


    constructor(page: Page) {
        super(page);

        this.leftFrame = this.getLeftFrame();

        // Data Management menu locators
        this.datamanagementmenu = this.leftFrame.locator("//a[text()=' Data Management ']");

        // Company Management menu locators
        this.companymanagementmenu = this.leftFrame.locator("//a[text()=' Company Management ']");

        // Companies menu locators
        this.companiesmenu = this.leftFrame.locator("//a[text()='Companies']");

        // Users menu locators
        this.usersmenu = this.leftFrame.locator("//a[text()='Users']");

        // Roles menu locators
        this.rolesmenu = this.leftFrame.locator("//a[text()='Roles']");

        // Paired Move FTP Settings menu locators
        this.pairedmoveftpsettingsmenu = this.leftFrame.locator("//a[text()='Paired Move FTP Settings']");

        // Outbound EDI 301 FTP Settings menu locators
        this.outboundedi301ftpsettingsmenu = this.leftFrame.locator("//a[text()='Outbound EDI 301 FTP Settings']");
        
        // Pool Management menu locators
        this.poolmanagementmenu = this.leftFrame.locator("//a[text()=' Pool Management ']");

        // Pools menu locators
        this.poolsmenu = this.leftFrame.locator("//a[text()='Pools']");

        // Unit Management menu locators
        this.unitmanagementmenu = this.leftFrame.locator("//a[text()=' Unit Management ']");

        // Units menu locators
        this.unitsmenu = this.leftFrame.locator("//a[text()='Units']");
        
        // Tracking menu locators
        this.trackingmenu = this.leftFrame.locator("//a[text()=' Tracking ']");

        // Haulage Data menu locators
        this.haulagedatamenu = this.leftFrame.locator("//a[text()=' Haulage Data ']");

        // Default OC Haulage Type menu locators
        this.defaultochaulagetypemenu = this.leftFrame.locator("//a[text()='Default OC Haulage Type']");

        // Haulage Data - Flat File menu locators
        this.haulagedataflatfilemenu = this.leftFrame.locator("//a[text()='Haulage Data - Flat File']");

        // Movements menu locators
        this.movementsmenu = this.leftFrame.locator("//a[text()=' Movements ']");

        // Unit Movements menu locators
        this.unitmovementsmenu = this.leftFrame.locator("//a[text()='Unit Movements']");

        // Unit Rejected Moves menu locators
        this.unitrejectedmovesmenu = this.leftFrame.locator("//a[text()='Unit Rejected Moves']");
        
        // Archived Rejected Moves menu locators
        this.archivedrejectedmovesmenu = this.leftFrame.locator("//a[text()='Archived Rejected Moves']");
        
        // Movement Event Customers menu locators
        this.movementeventcustomersmenu = this.leftFrame.locator("//a[text()='Movement Event Customers']");

        this.apimovementeventsmenu = this.leftFrame.locator("//a[text()=' API Movement Events ']");
    
        this.movementeventtransactionsmenu= this.leftFrame.locator("//a[text()='Movement Event Transactions']");

        this.quicktrackingmenu= this.leftFrame.locator("//a[text()=' Quick Track ']");

        this.systemadministrationmenu= this.leftFrame.locator("//a[text()=' System Administration ']");

        this.referencedatamenu= this.leftFrame.locator("//a[text()=' Reference Data ']");

        this.systemreferencedatamenu= this.leftFrame.locator("//a[text()='System Reference Data']");

        this.poolreferencedatamenu= this.leftFrame.locator("//a[text()='Pool Reference Data']");

        this.billingmenu = this.leftFrame.locator("//a[text()=' Billing ']");
        this.billingrunmenu = this.leftFrame.locator("//a[text()=' Billing Run ']");
        this.billingrunsubmenu= this.leftFrame.locator("//a[text()='Billing Run']");

    }
}