import test, { expect } from "@playwright/test";

test.skip('Advanced interactions', async ({page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/Practise_3/index.html');
    //hovering on button
    await page.hover('button#hover-me');
    expect(await page.textContent('button#hover-me')).toContain('Text Changed!');
    
    //right click
    await page.click('button#context-menu', {button: 'right'});
    expect(await page.getByText('Context Menu Appears').textContent()).toContain('Context Menu Appears');

    //double click
    await page.dblclick('button#double-click')
    expect(await page.locator('img').count()).toBe(1);
})

//drag and drop
test.skip('Drag and drop', async ({page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/Practise_3/index.html');
    //simple solution
    await page.dragAndDrop('.drag-source', '.drop-target');

    //alternative
    // await page.locator('.drag-source').hover();
    // await page.mouse.down();
    // await page.locator('.drop-target').hover();
    // await page.mouse.up();
    expect(await page.textContent('.drop-target')).toContain('Success');
})
test.skip('Handling iframe', async ({page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/Practise_3/index.html');
    const iframeElement = await page.frame({name: 'iframeName'});
    const iframeInputSelector ='#iframe-input';
})



