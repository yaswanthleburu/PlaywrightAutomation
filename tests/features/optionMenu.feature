 Feature: Options Menu Actions
 ##------------Company Management----------------

  Scenario: The CMS Company Options page supports selecting options from the menu.
    Given I am logged into the CMS application
    When I click the "DataManagementMenu" on the "homePage" Page
    And I click the "CompanyManagementMenu" on the "homePage" Page
    And I click the "CompaniesMenu" on the "homePage" Page
    Then I verify that the "Companies" page is displayed under "companiesPage"
    And I click the option menu
    Then I verified Option menu popup
    And I log out from the CMS application

#   Scenario: The CMS Users Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "CompanyManagementMenu" on the "homePage" Page
#     And I click the "UsersMenu" on the "homePage" Page
#     Then I verify that the "Users" page is displayed under "companiesPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application

#   Scenario: The CMS Roles Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "CompanyManagementMenu" on the "homePage" Page
#     And I click the "RolesMenu" on the "homePage" Page
#     Then I verify that the "Roles" page is displayed under "companiesPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application

#   Scenario: The CMS Paired Move FTP Settings Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "CompanyManagementMenu" on the "homePage" Page
#     And I click the "PairedMoveFTPSettingsMenu" on the "homePage" Page
#     Then I verify that the "PairedMoveFTPSettings" page is displayed under "companiesPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application

#   Scenario: The CMS Outbound EDI 301 FTP Settings Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "CompanyManagementMenu" on the "homePage" Page
#     And I click the "OutboundEDI301FTPSettingsMenu" on the "homePage" Page
#     Then I verify that the "OutboundEDI301FTPSettings" page is displayed under "companiesPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
# ##------------Pool Management----------------

#   Scenario: The CMS Pools Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "PoolManagementMenu" on the "homePage" Page
#     And I click the "PoolsMenu" on the "homePage" Page
#     Then I verify that the "Pools" page is displayed under "poolManagementPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
# ##------------Unit Management----------------

#   Scenario: The CMS Units Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "UnitManagementMenu" on the "homePage" Page
#     And I click the "UnitsMenu" on the "homePage" Page
#     Then I verify that the "Units" page is displayed under "unitManagementPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
# ##------------Haulage Data----------------

#   Scenario: The CMS Default OC Haulage Type Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "DefaultOCHaulageTypeMenu" on the "homePage" Page
#     Then I verify that the "DefaultOCHaulageType" page is displayed under "haulageDataPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application

#   Scenario: The CMS Haulage Data Flat File Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "HaulageDataFlatFileMenu" on the "homePage" Page
#     Then I verify that the "HaulageDataFlatFile" page is displayed under "haulageDataPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
# ##------------Movements----------------

#   Scenario: The CMS Unit Movements Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "MovementsMenu" on the "homePage" Page
#     And I click the "UnitMovementsMenu" on the "homePage" Page
#     Then I verify that the "UnitMovements" page is displayed under "movementsPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application

#   Scenario: The CMS Unit Rejected Moves Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "MovementsMenu" on the "homePage" Page
#     And I click the "UnitRejectedMovesMenu" on the "homePage" Page
#     # Then I verify that the "UnitRejectedMoves" page is displayed under "movementsPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application

#   Scenario: The CMS Archived Rejected Moves Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "MovementsMenu" on the "homePage" Page
#     And I click the "ArchivedRejectedMovesMenu" on the "homePage" Page
#     Then I verify that the "ArchivedRejectedMoves" page is displayed under "movementsPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
# ##------------API Movement Events----------------

#   Scenario: The CMS Movement Event Customers Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "APIMovementEventsMenu" on the "homePage" Page
#     And I click the "MovementEventCustomersMenu" on the "homePage" Page
#     Then I verify that the "MovementEventCustomers" page is displayed under "apiMovementEventsPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
# ##------------QuickTracking----------------  

#   Scenario: The CMS Quick Tracking Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "QuickTrackingMenu" on the "homePage" Page
#     Then I verify that the "UnitMovements" page is displayed under "quickTrackingPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
# ##-------------------------Billing Run---------------------

#   Scenario: The CMS Billing Run Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "BillingMenu" on the "homePage" Page
#     And I click the "BillingRunMenu" on the "homePage" Page
#     And I click the "BillingRunSubMenu" on the "homePage" Page
#     Then I verify that the "BillingRun" page is displayed under "billingRunPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
# ##------------Reference Data----------------  

#   Scenario: The CMS System Reference Data Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "SystemAdministrationMenu" on the "homePage" Page
#     And I click the "ReferenceDataMenu" on the "homePage" Page
#     And I click the "SystemReferenceDataMenu" on the "homePage" Page
#     And I wait for page to load
#     Then I verify that the "SystemReferenceData" page is displayed under "referenceDataPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application

#   Scenario: The CMS Pool Reference Data Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "SystemAdministrationMenu" on the "homePage" Page
#     And I click the "ReferenceDataMenu" on the "homePage" Page
#     And I click the "PoolReferenceDataMenu" on the "homePage" Page
#     And I wait for page to load
#     Then I verify that the "PoolReferenceData" page is displayed under "referenceDataPage"
#     And I click the option menu
#     Then I verified Option menu popup
#     And I log out from the CMS application
