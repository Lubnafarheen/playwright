import {test} from "@playwright/test";

test.skip('Basic Navigation', async({page}) => {
    await page.goto('https://gitlab.com/');
     await page.waitForTimeout(3000);
     await page.reload();
})

 test.skip('Interacting with elements on Gitlab', async ({page}) => {
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    await page.locator('.be-nav-navigation').getByRole('link',{name:'Get Free Trial'}).click();
    await page.locator('[data-testid= "new-user-first-name-field"]').fill('John');
    await page.locator('[data-testid= "new-user-last-name-field"]').fill('Doe');
    await page.getByTestId('new-user-username-field').fill('Johnny');
})

test.skip('Using various Locator Methods', async ({page}) => {
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    //await page.getByRole('link', {name: 'Sign in'}).click();
   // await page.getByRole('button', {name: 'Contact us'}).click();
    await page.click(':has-text("Solutions")');
    await page.waitForTimeout(3000);
})





