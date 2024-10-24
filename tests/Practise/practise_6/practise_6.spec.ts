import {expect, test} from "@playwright/test";

const inputData = {
    firstName : 'Lubna',
    lastName :'Farheen',
    address:'Vandrarstigen 1',
    number:'0737874486'
}

test.describe('Form Registration Test', ()=>{
    test.beforeEach(async ({page}) => {
        await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_6/index.html');
    })

    test.skip('Register with valid data', async ({page}) => {
        await page.fill('#firstName',inputData.firstName);
        await page.fill('#lastName', inputData.lastName);
        await page.fill('#address', inputData.address);
        await page.fill('#number', inputData.number);
        await page.click('#register');
        //await page.waitForTimeout(5000);

        const firstNameContext = await page.locator("#displayFirstName").textContent();
        const lastNameContext = await page.locator("#displayLastName").textContent();
        const addressContext = await page.locator("#displayAddress").textContent();
        const numberContext = await page.locator("#displayNumber").textContent();

        expect(firstNameContext).toEqual(inputData.firstName);
        expect(lastNameContext).toEqual(inputData.lastName);
        expect(addressContext).toEqual(inputData.address);
        expect(numberContext).toEqual(inputData.number);
    })

    test.skip('Testing error with empty fields',async ({page}) => {
        await page.fill('#firstName',inputData.firstName);
        await page.fill('#lastName', inputData.lastName);
        await page.click('#register');
        const error = await page.locator('#error p').textContent();
        expect(error).toBe('Please fill in all fields.');
    })

    test.skip('Testing error with all empty fields',async ({page}) => {
        await page.click('#register');
        const error = await page.locator('#error p').textContent();
        expect(error).toBe('Please fill in all fields.');
    })

})