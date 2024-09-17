import test, { expect } from "@playwright/test";

test.skip('Handling alerts',async ({page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_4/index.html');
    let alertMessage ='';
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('alert');
        alertMessage= await dialog.message();
        await dialog.accept();
    })
    await page.click('#show-alert');
    expect(alertMessage).toBe('This is a simple alert.');
});

test.skip('Cancelling confirm alert', async ({page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_4/index.html');
    let alertMessage='';
    page.on('dialog', async (dialog) => {
        alertMessage= dialog.message();
        await page.waitForTimeout(5000);
        await dialog.dismiss();
    })
    await page.click('#show-confirm');
    expect(alertMessage).toBe('You clicked Cancel.');
})

test.skip('Accept confirm alert', async ({page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_4/index.html');
    let alertMessage ='';
    page.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    })
    await page.click('#show-confirm');
    expect(alertMessage).toBe('You clicked OK.');
})

test.only('handling pop-ups', async ({page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_4/index.html');
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open-popup')
     ]);
    await popup.waitForLoadState();
    //await page.getByText('This site can’t be reached').first;
    await popup.close();
})