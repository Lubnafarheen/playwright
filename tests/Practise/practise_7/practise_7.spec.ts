import {expect, test} from "@playwright/test";
import assert from "assert";

const selectors = {
    firstName : '#firstName',
    age : '#age',
    student : '#isStudent'
    }

test.describe('variable declaration and types', ()=>{
    
    test.skip('variable declaration test',async ({ page }) => {
        let firstName:string = 'Hamza';
        let age: number = 4;
        let student: boolean = true;

        await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_7/index.html')
        await page.fill(selectors.firstName,firstName);
        await page.fill(selectors.age ,age.toString());
        await page.check(selectors.student);
        await page.click('#applyData');

        expect(await page.textContent('#displayFirstName')).toBe(firstName);
        expect(await page.textContent('#displayAge')).toContain(age.toString());
        expect(await page.isChecked('#isStudent')).toBe(true);
        
    })
})


test.describe('Interfaces and Type Definitions', ()=>{
    type User ={
        firstName : string,
        age: number,
        isStudent : boolean,
    };
    let user: User ={
        firstName: 'Jane',
        age: 25,
        isStudent: true,
    }

    test.skip ('testing how to test interfaces', async ({page}) => {
    await page.goto('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_7/index.html')
    await page.fill(selectors.firstName,user.firstName);
    await page.fill(selectors.age ,user.age.toString());
    // await page.check(selectors.student);
    await page.click('#applyData');

    expect(await page.textContent('#displayFirstName')).toBe(user.firstName);
    expect(await page.textContent('#displayAge')).toContain(user.age.toString());
    expect(await page.isChecked('#isStudent')).not.toBe(true);
    })
    

})
