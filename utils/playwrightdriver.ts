import { Locator, Page, errors, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import chalk from 'chalk';


export class PlaywrightDriver {
    constructor(private page: Page) { }

    /**
     * This method used click an element.
     * Click on an element with a specified timeout.
     * This method waits for the element to be visible before clicking.
     * If the element is not found or not visible, it logs an error message.
     * 
     * @param locator - Locator of the element to be clicked
     * @param timeout - Timeout in milliseconds
     */
    async clickElement(locator: Locator, timeout = 20000): Promise<void> {
        try {
            await this.waitForCondition(async () => await locator.isVisible(), 10, 1000);
            await locator.click({ timeout });
            console.log(`Clicked on element: ${locator}`);
        } catch (error: unknown) {
            if (error instanceof errors.TimeoutError) {
                console.error(`TimeoutError: Element '${locator}' not found or not visible within ${timeout}ms`);
            } else if (error instanceof Error && error.message.includes('not visible')) {
                console.error(`Error: Element '${locator}' is not visible or not intractable`);
            } else {
                console.error(`Unknown error occurred while clicking '${locator}':`, error);
            }
            throw error; // Ensure the test fails on error
        }
    }

    /**
     * This method used for entering text.
     * It waits for the element to be visible before entering text.
     * If the element is not found or not visible, it logs an error message.
     * If the clear parameter is true, it clears the text field before entering text.
     * 
     * @param locator - Locator of the element to be clicked
     * @param timeout - Timeout in milliseconds 
     * @param {boolean} clear - Whether to clear the text field before entering text (default: true)
     * @param {string} text - The text to be entered into the text field
     */
    async enterText(locator: Locator, text: string, clear: boolean = true, timeout = 1000): Promise<void> {
        try {
            console.log(`Waiting for locator to be visible for entering: "${text}"`);
            await locator.waitFor({ state: 'visible', timeout });
            if (clear) {
                await locator.fill('');
            }
            await locator.fill(text);
            console.log(`Successfully entered text: "${text}"`);
        } catch (error: unknown) {
            if (error instanceof errors.TimeoutError) {
                console.error(`TimeoutError: Element '${locator}' not visible within ${timeout}ms for input: "${text}"`);
            } else if (error instanceof Error) {
                console.error(`Error entering text: "${text}" - ${error.message}`);
            } else {
                console.error(`Unknown error occurred while entering text: "${text}"`);
            }
            throw error; // Ensure the test fails on error
        }
    }

    /**
     * This method is used to check if an element is visible in the viewport.
     * This method is used to scroll to an element in the viewport.
     * It waits for the element to be visible before scrolling.
     * If the element is not found or not visible, it logs an error message.
     * 
     * @param locator - Locator of the element to be scrolled to
     * @param timeout - Timeout in milliseconds
     */
    async scrollTo(locator: Locator): Promise<void> {
        try {
            console.log(`Scrolling to element: ${locator}`);
            await locator.scrollIntoViewIfNeeded();
            console.log(`Scrolled to element successfully.`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message.includes('Target page, context or browser has been closed')) {
                    console.error('Error: The page or browser context has been closed while trying to scroll.');
                } else {
                    console.error(`Error while scrolling to element: ${error.message}`);
                }
            } else {
                console.error(`Unknown error occurred while scrolling to element:`, error);
            }
            throw error; // Re-throw the error for further handling if needed
        }
    }

    /**
     * This method is used to select a radio button.
     * It checks if the radio button is already selected before attempting to select it.
     * If the radio button is not visible or intractable, it logs an error message.
     * If the radio button is disabled, it logs an error message.
     * 
     * @param locator - Locator of the radio button to be selected
     */
    async selectRadio(locator: Locator): Promise<void> {
        try {
            console.log(`Attempting to select radio button: ${locator}`);
            const isAlreadySelected = await locator.isChecked();
            if (!isAlreadySelected) {
                await locator.check();
                console.log(`Radio button selected successfully.`);
            } else {
                console.log(`Radio button was already selected.`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message.includes('not visible')) {
                    console.error(`Error: Radio button is not visible or intractable.`);
                } else if (error.message.includes('Element is not enabled')) {
                    console.error(`Error: Radio button is disabled and cannot be selected.`);
                } else {
                    console.error(`Error while selecting radio button: ${error.message}`);
                }
            } else {
                console.error(`Unknown error occurred while selecting radio button.`, error);
            }
            throw error; // Re-throw if you want calling methods to also handle it
        }
    }

    /**
     * This method is used to check a checkbox.
     * It checks if the checkbox is already checked before attempting to check it.
     * If the checkbox is not visible or intractable, it logs an error message.
     * 
     * @param locator - Locator of the checkbox to be checked
     */
    async check(locator: Locator): Promise<void> {
        try {
            console.log(`Attempting to check checkbox: ${locator}`);
            const isAlreadyChecked = await locator.isChecked();
            if (!isAlreadyChecked) {
                await locator.check();
                console.log(`Checkbox checked successfully.`);
            } else {
                console.log(`Checkbox was already checked.`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message.includes('not visible')) {
                    console.error(`Error: Checkbox is not visible or intractable.`);
                } else if (error.message.includes('disabled')) {
                    console.error(`Error: Checkbox is disabled and cannot be selected.`);
                } else {
                    console.error(`Error while checking checkbox: ${error.message}`);
                }
            } else {
                console.error(`Unknown error occurred while checking checkbox.`, error);
            }
            throw error;
        }
    }

    /**
     * This method is used to uncheck a checkbox.
     * It checks if the checkbox is already unchecked before attempting to uncheck it.
     * If the checkbox is not visible or intractable, it logs an error message.
     * 
     * @param locator - Locator of the checkbox to be unchecked
     */
    async uncheck(locator: Locator): Promise<void> {
        try {
            console.log(`Attempting to uncheck locator: ${locator}`);
            const isChecked = await locator.isChecked();
            console.log(`Checkbox checked state: ${isChecked}`);
            if (isChecked) {
                await this.waitForCondition(async () => await locator.isVisible());
                await locator.uncheck();
                console.log(`Successfully unchecked the checkbox.`);
            } else {
                console.log(`Checkbox is already unchecked.`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message.includes('not visible')) {
                    console.error(`Error: Checkbox is not visible for uncheck.`);
                } else if (error.message.includes('detached')) {
                    console.error(`Error: Checkbox element is detached from DOM.`);
                } else {
                    console.error(`Error while unchecking the checkbox: ${error.message}`);
                }
            } else {
                console.error(`Unknown error occurred while unchecking the checkbox.`, error);
            }
            throw error;
        }
    }

    /**
     * This method is used to select a checkbox from a list of rows in a paginated table.
     * It iterates through the rows and checks if the checkbox is already selected.
     * If the checkbox is not selected, it selects it and stops further iteration.
     * If the checkbox is already selected, it skips to the next row.
     * If the end of pagination is reached, it logs a message and stops further iteration.
     * 
     * @param rowLocator - Locator for all rows in the table
     * @param nextPageButtonLocator - Locator for the "Next" button to navigate through pages
     * @param checkLocator - Locator to locate the checkbox inside each row
     * @param maxPages - Maximum number of pages to scan (default: 100)
     */
    async listBoxSelectionForOneValue(
        rowLocator: Locator,                 // Locator for all rows
        nextPageButtonLocator: Locator,     // Locator for "Next" button
        checkLocator: Locator,              // Locator to locate checkbox inside each row
        maxPages = 100
    ): Promise<void> {
        try {
            const page = rowLocator.page();
            for (let pageIndex = 1; pageIndex <= maxPages; pageIndex++) {
                console.log(`Scanning page ${pageIndex} for selectable checkbox...`);
                const rows = await rowLocator.all();
                for (const row of rows) {
                    try {
                        const checkbox = row.locator(checkLocator);
                        await checkbox.scrollIntoViewIfNeeded();
                        if (!(await checkbox.isChecked())) {
                            await checkbox.check();
                            console.log(`Checkbox selected on page ${pageIndex}`);
                            return;
                        } else {
                            console.log(`Checkbox already selected, skipping.`);
                        }
                    } catch (rowError) {
                        console.warn(`Could not select checkbox in row:`, rowError);
                        continue;
                    }
                }
                await nextPageButtonLocator.scrollIntoViewIfNeeded();
                const isDisabled = await nextPageButtonLocator.getAttribute('disabled');
                if (isDisabled !== null) {
                    console.warn(`End of pagination reached. No selectable checkbox found.`);
                    break;
                }
                console.log(`Moving to page ${pageIndex + 1}`);
                await nextPageButtonLocator.click();
                await page.waitForTimeout(3000);
            }
            throw new Error(`No selectable checkbox found after scanning ${maxPages} pages.`);
        } catch (error) {
            console.error(`Error during checkbox selection:`, error);
            throw error;
        }
    }

    /**
     * 
     * This method is used to select multiple checkboxes from a list of rows in a paginated table.
     * It iterates through the rows and checks if the checkbox is already selected.
     * If the checkbox is not selected, it selects it and increments the selected count.
     * If the checkbox is already selected, it skips to the next row.
     * If the end of pagination is reached, it logs a message and stops further iteration.
     * 
     * @param rowLocators - List of locators for all rows in the table (to support multiple tables/sections)
     * @param nextPageButtonLocator - Locator for the "Next" button to navigate through pages
     * @param checkLocator  - Selector (not Locator) to locate the checkbox inside each row
     * @param targetCount   - Number of checkboxes to select
     * @param maxPages     - Maximum number of pages to scan (default: 100)
     */
    async listBoxSelectionForMultipleRecords(
        rowLocators: Locator[],             // List of row locators (to support multiple tables/sections)
        nextPageButtonLocator: Locator,     // Locator for "Next" button
        checkLocator: Locator,               // Selector (not Locator) for checkbox inside each row
        targetCount: number,                // Number of checkboxes to select
        maxPages = 100
    ): Promise<void> {
        try {
            if (rowLocators.length === 0) {
                throw new Error("Row locator list is empty.");
            }

            const page = rowLocators[0].page();
            let selectedCount = 0;

            for (let pageIndex = 1; pageIndex <= maxPages && selectedCount < targetCount; pageIndex++) {
                console.log(`Scanning page ${pageIndex}...`);

                for (const rowLocator of rowLocators) {
                    const rows = await rowLocator.all();

                    for (const row of rows) {
                        if (selectedCount >= targetCount) break;

                        try {
                            const checkbox = row.locator(checkLocator);
                            await checkbox.scrollIntoViewIfNeeded();

                            if (!(await checkbox.isChecked())) {
                                await checkbox.check();
                                selectedCount++;
                                console.log(`Selected checkbox #${selectedCount} on page ${pageIndex}`);
                            } else {
                                console.log(`Already selected. Skipping.`);
                            }
                        } catch (rowError) {
                            console.warn(`Could not select checkbox in row:`, rowError);
                            continue;
                        }
                    }
                }
                if (selectedCount >= targetCount) {
                    console.log(`Successfully selected ${targetCount} checkboxes. Stopping.`);
                    return;
                }
                const isDisabled = await nextPageButtonLocator.getAttribute('disabled');
                if (isDisabled !== null) {
                    console.warn(`Reached last page. Selected ${selectedCount} checkbox(es).`);
                    break;
                }
                await nextPageButtonLocator.scrollIntoViewIfNeeded();
                await nextPageButtonLocator.click();
                await page.waitForTimeout(3000);
            }
            if (selectedCount < targetCount) {
                throw new Error(`Only ${selectedCount} checkbox(es) were selected. Expected ${targetCount}.`);
            }
        } catch (error) {
            console.error(`Error during checkbox selection:`, error);
            throw error;
        }
    }

    /**
     * This method is used to navigate to a new tab and perform actions in it.
     * It waits for the new tab to load and then clicks a download button in the new tab.
     * If the new tab is not opened or the button is not found, it logs an error message.
     * @param page - The current page instance
     * @param downloadButtonSelector - Locator to click and open new tab
     * @param downloadButtonSelectorInNewTab - Expecting the selector for the download button now
     * @param navigationTimeout - Timeout for waiting for the new tab to open
     * @param elementWaitTimeout - Timeout for waiting for elements in the new tab
     */
    async navigateToNewTab(
        page: Page,
        downloadButtonSelector: Locator, // Locator to click and open new tab
        downloadButtonSelectorInNewTab: string, // Expecting the selector for the download button now
        navigationTimeout: number = 30000,
        elementWaitTimeout: number = 30000 // Separate timeout for waiting for elements in the new tab
    ): Promise<void> {
        let newTabPage: Page | null = null;
        try {
            const [newPage] = await Promise.all([
                page.context().waitForEvent('page', { timeout: navigationTimeout }),
                await downloadButtonSelector.click(), // Perform the action that opens the new tab
            ]);
            if (newPage) {
                newTabPage = newPage;
                console.log('New tab opened successfully.');
                try {
                    await newTabPage.waitForLoadState('domcontentloaded', { timeout: navigationTimeout });
                    const downloadButton = newTabPage.locator(downloadButtonSelectorInNewTab);
                    await downloadButton.waitFor({ state: 'visible', timeout: elementWaitTimeout });
                    console.log(`Download button with selector "${downloadButtonSelectorInNewTab}" is visible in the new tab.`);
                    await downloadButton.click(); // Click the download button
                    console.log(`Download started "${downloadButtonSelectorInNewTab}" in the new tab and completed.`);
                } catch (error) {
                    console.error('Error waiting for the download button in the new tab:', error);
                    if (newTabPage && !newTabPage.isClosed()) {
                        await newTabPage.close();
                    }
                }
            } else {
                console.warn('New tab did not open within the expected time.');
            }
        } catch (error) {
            console.error('An error occurred while handling the new tab navigation:', error);
            if (newTabPage && !newTabPage.isClosed()) {
                await newTabPage.close();
            }
        }
    }

    /**
     * This method is used for waits for a condition like element to be visible or enabled.
     * It retries a specified number of times with a delay between attempts.
     * This is useful for waiting for elements to become visible or enabled.
     * Wait for a condition to be true, retrying a specified number of times with a delay between attempts.
     * 
     * @param conditionFn - A function that returns a Promise resolving to true when the condition is met
     * @param retries - Number of times to retry
     * @param delayMs - Delay between retries in milliseconds
     * @returns true if the condition becomes true within the retry limit, false otherwise
     */
    async waitForCondition(
        conditionFn: () => Promise<boolean>,
        retries: number = 20,
        delayMs: number = 1000
    ): Promise<boolean> {
        console.log(`Waiting for condition to be true (retries: ${retries}, delay: ${delayMs}ms)...`);
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                const result = await conditionFn();
                if (result) {
                    console.log(`Condition met on attempt ${attempt}`);
                    return true;
                }
            } catch (error) {
                console.warn(`Attempt ${attempt} failed with error:`, error);
            }
            if (attempt < retries) {
                console.log(`Retrying in ${delayMs}ms...`);
                await new Promise(resolve => setTimeout(resolve, delayMs));
            }
        }
        console.error(`Condition not met after ${retries} retries`);
        return false;
    }

    /**
     * This method uses to check the disabled property of the button element.
     * It waits for the element to be visible before checking its state.
     * If the element is not found or not visible, it logs an error message.
     * 
     * @param locator - The Locator of the button to check
     * @returns true if the button is disabled (clicked), false otherwise
     */
    async isActionTriggeredAfterClick(locator: Locator, timeout = 1000): Promise<boolean> {
        try {
            console.log(`Waiting for result element to be visible within ${timeout}ms`);
            await locator.waitFor({ state: 'visible', timeout });
            console.log(`Result element became visible.`);
            return true;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(`Error waiting for result element to be visible: ${error.message}`);
            } else {
                console.error(`Unknown error occurred while waiting for result element.`, error);
            }
            return false;
        }
    }

    /**
     * This method is used to check the state of a checkbox.
     * It waits for the element to be visible before checking its state.
     * If the element is not found or not visible, it logs an error message.
     * 
     * @param locator - Locator of the checkbox to be checked
     * @returns true if the checkbox is checked, false otherwise
     */
    async isCheckboxChecked(locator: Locator): Promise<boolean> {
        try {
            console.log(`Checking checkbox state for locator: ${locator}`);
            const isChecked = await locator.isChecked();
            console.log(`Checkbox checked state: ${isChecked}`);
            return isChecked;
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message.includes('not visible')) {
                    console.error(`Error: Checkbox is not visible.`);
                } else if (error.message.includes('detached')) {
                    console.error(`Error: Checkbox element is detached from DOM.`);
                } else {
                    console.error(`Error checking checkbox state: ${error.message}`);
                }
            } else {
                console.error(`Unknown error occurred while checking checkbox state.`, error);
            }
            return false;
        }
    }

    /**
     * This method is used to generate a random business name.
     * It uses the faker library to generate a random business name. 
     * @returns {string} - A random business name
     */
    async getBusinessName(): Promise<string> {
        try {
            return faker.company.name();
        } catch (error) {
            console.error('Error generating first name:', error);
            return 'DefaultCompanyName';
        }
    }

    /**
     * Generate a custom mixed string of numbers and alphabets.
     * @param numberCount - Number of numeric characters to include.
     * @param alphaCount - Number of alphabetic characters to include.
     * @returns Mixed string (shuffled)
     */
    async getEIN(numberCount: number, alphaCount: number): Promise<string> {
        try {
            const numbers = faker.string.numeric(numberCount);
            const letters = faker.string.alpha(alphaCount);

            // Combine and shuffle characters
            const mixedArray = [...numbers + letters].sort(() => Math.random() - 0.5);
            return mixedArray.join('');
        } catch (error) {
            console.error('Error generating mixed string:', error);
            return 'Default12AB';
        }
    }

    /**
     * This method is used to generate a random number.
     * It uses the faker library to generate a random number. 
     * @returns {number} - A random number between
     */
    async getUSDOT(): Promise<number> {
        try {
            return faker.number.int({});
        } catch (error) {
            console.error('Error generating random number:', error);
            return 1234; // default fallback
        }
    }

    /**
     * This method is used to check if an element is visible.
     * 
     * @param element - Locator of the element to be checked
     * @param elementName - Name of the element for logging purposes
     */
    async toBeVisible(element: Locator) {
        try {
            await this.waitForCondition(async () => await element.isVisible(), 10, 1000);
            await expect(element).toBeVisible();
            console.log(`${element} is visible on the page`);
        } catch (error) {
            console.error(`${element} is not visible`, error);
            throw error;
        }
    }

    /**
     * This method is used to check if an element has the expected text.
     * @param text - The actual text to be checked
     * @param expectedText  - The expected text to compare against
     */
    async exactText(text: string, expectedText: string) {
        try {
            const txt = text.trim();
            await expect(txt).toEqual(expectedText);
            console.log(`${text} is equal to : "${expectedText}"`);
        } catch (error) {
            console.error(`${text} is not equal to "${expectedText}":`, error);
            throw error;
        }
    }

    /**
     * This method is used to check if an element contains the expected text.
     * @param text - The actual text to be checked
     * @param expectedText  - The expected text to compare against
     */
    async containText(text: string, expectedText: string) {
        try {
            await expect(text).toContain(expectedText);
            console.log(`${text} is contains the text: "${expectedText}"`);
        } catch (error) {
            console.error(`${text} does not contain text "${expectedText}":`, error);
            throw error;
        }
    }

    /**
     * This method is used to check if a number is greater than another number.
     * @param actual - The actual number to be checked
     * @param expected - The expected number to compare against
     */
    async toBeGreaterThan(actual: number, expected: number) {
        try {
            expect(actual).toBeGreaterThan(expected);
            console.log(`${actual} is greater than ${expected}`);
        } catch (error) {
            console.error(`${actual} is not greater than ${expected}`, error);
            throw error;
        }
    }

    /**
     * This method is used to get the inner text of an element.
     * @param locator - Locator of the element to get inner text from
     * @returns  - Inner text of the element
     */
    async getInnerText(locator: Locator): Promise<string> {
        try {
            const text = await locator.innerText();
            console.log(`Inner text is :"${text}"`);
            return text;
        } catch (error) {
            console.error(`Failed to get inner text for`, error);
            return 'no text found';
        }
    }

    /**
     * This method is used to get the text content of an element.
     * @param locator - Locator of the element to get text content from
     * @returns  - Text content of the element
     */
    async getText(locator: Locator): Promise<string> {
        try {
            const text = await locator.textContent();
            console.log(`Get text is: "${text}"`);
            return text || '';  // In case the text is empty
        } catch (error) {
            console.error(`Failed to get text for`, error);
            return 'no text found';
        }
    }

    /**
     * This method is used to get all text contents of an element.
     * @param locator - Locator of the element to get all text contents from
     * @returns  - Array of text contents of the element
     */
    async getAllText(locator: Locator): Promise<string[]> {
        try {
            const text = await locator.allTextContents();
            console.log(`List of values :"${text}"`);
            return text;  // Join all text contents into a single string
        } catch (error) {
            console.error(`Failed to get all text for`, error);
            return ['no text found'];
        }
    }

    /**
     * This method is used to select an option from a dropdown by its visible text.
     * It waits for the dropdown to be visible before attempting to select the option.
     * If the option is not found, it logs an error message.
     * 
     * @param dropdown - Locator of the dropdown element
     * @param optionText - The visible text of the option to be selected
     */
    async selectDropdownByText(
        dropdown: Locator,
        optionText: string
    ): Promise<void> {
        try {
            // Wait for the dropdown to be attached and visible
            await dropdown.waitFor({ state: 'visible', timeout: 5000 });

            // Attempt to select the option
            const result = await dropdown.selectOption({ label: optionText });

            // Check if selection was successful
            if (result.length === 0) {
                throw new Error(`Option with text "${optionText}" not found in the dropdown.`);
            }

            console.log(`Successfully selected "${optionText}" from the dropdown.`);
        } catch (error: any) {
            if (error.message.includes('Timeout')) {
                console.error(`Timeout: Dropdown was not visible within the expected time.`);
            } else if (error.message.includes('not found')) {
                console.error(`Option "${optionText}" not found in the dropdown.`);
            } else {
                console.error(`Unexpected error during dropdown selection:`, error);
            }
            throw error; // Rethrow to fail the test if needed
        }
    }

    async waitForPageLoad(milliseconds = 10000): Promise<void> {
        try {
            console.log(`Waiting for ${milliseconds} ms...`);
            await new Promise(resolve => setTimeout(resolve, milliseconds));
            console.log(`Wait complete.`);
        } catch (error) {
            console.error(`Error during wait:`, error);
        }
    }

    async waitForLoader(milliseconds = 10000): Promise<void> {
        try {
            console.log(`Waiting for ${milliseconds} ms...`);
            await new Promise(resolve => setTimeout(resolve, milliseconds));
            console.log(`Wait complete.`);
        } catch (error) {
            console.error(`Error during wait:`, error);
        }
    }

    async waitForLoaderToDisappear(
        page: Page,
        loaderSelector: Locator,
        timeout: number = 10000
    ): Promise<void> {
        try {
            // Wait for the loader to attach (exist in the DOM), even if it's not yet visible
            await loaderSelector.waitFor({ state: 'attached', timeout: 3000 }).catch(() => {
                console.log(chalk.gray(`Loader not attached. Skipping wait.`));
                return;
            });

            const isVisible = await loaderSelector.isVisible().catch(() => false);

            if (!isVisible) {
                console.log(chalk.gray(`Loader not visible. Skipping wait.`));
                return;
            }

            console.log(chalk.blue(`Loader is visible. Waiting to disappear...`));
            await loaderSelector.waitFor({ state: 'detached', timeout });

            console.log(chalk.green(`Loader disappeared. Proceeding with actions.`));
        } catch (error: any) {
            console.error(chalk.red(`Error waiting for loader to disappear:`), error.message);
            throw new Error(`Timeout or unexpected error while waiting for loader.`);
        }
    }

}