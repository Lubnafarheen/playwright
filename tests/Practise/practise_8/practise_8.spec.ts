import {expect, test} from "@playwright/test";
import { PageObject } from "./page/Page";

test.describe('Sample Test', ()=>{
    let pageObject: PageObject;

    test.beforeEach(async ({ browser })=>{
        const page = await browser.newPage()
        pageObject = new PageObject(page);
        await pageObject.open('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_8/index.html');
    })
    test.skip('test 1: Filling all inputs', async ({}) => {
        await pageObject.fillFirstName('Lubna');
        await pageObject.fillAge('34');
        await pageObject.checkingIsStudent();
        await pageObject.applyData();

        expect(await pageObject.text(pageObject.displayFirstNameInput)).toBe('Lubna');
        expect(await pageObject.text(pageObject.displayAge)).toBe('34');
        expect(await pageObject.text(pageObject.displayIsStudent)).toBe('Yes');
    })
})