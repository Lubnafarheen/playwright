import test, { expect } from "@playwright/test";

test.skip('Open new window and navigate back', async ({context,page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_5/index.html');
    const pagePromise = context.waitForEvent('page');
    await page.click('#openNewWindow');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    //TESTING HEADING
    await expect(newPage.getByRole("heading", {name:"Welcome to the New Page" } )).toBeVisible();
    //TESTING IMAGE
    const image = newPage.locator('img[alt="cat"]');
    await expect(image).toBeVisible();
    //TESTING BUTTON
    const button = newPage.locator('button:has-text("Back to Main Page")');
    //const button = page.locator('button#backToMain');
    const buttonText = await button.innerText();
   expect(buttonText).toBe('Back to Main Page');
   })

   test.skip('Adding cookies', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/tests/Practise/practise_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('http://127.0.0.1:5500/tests/Practise/practise_5/index.html');
    const sessionCookies = cookies.find(cookies => cookies.name === 'session');
    console.log(sessionCookies);
    await expect(sessionCookies).toBeDefined();
   })

   test.skip('Deleting cookies', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/tests/Practise/practise_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('http://127.0.0.1:5500/tests/Practise/practise_5/index.html');
    const sessionCookies = cookies.find(cookies => cookies.name === 'session');
    console.log(sessionCookies);
   
    await page.click('#deleteCookie');
    const deletingCookies = await page.context().cookies('http://127.0.0.1:5500/tests/Practise/practise_5/index.html');
    const deletingSessionCookies = deletingCookies.find(deletingCookies => deletingCookies.name === 'session');
    console.log(deletingSessionCookies);
    await expect(deletingSessionCookies).toBeUndefined();

   })

