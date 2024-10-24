import {expect, test} from "@playwright/test";
import { PageObject } from "./page/Page";
import * as testData from "./teatData.json"

test.describe('Sample Test', ()=>{
    let pageObject: PageObject;

    test.beforeEach(async ({ browser })=>{
        const page = await browser.newPage()
        pageObject = new PageObject(page);
        await pageObject.open('file:///C:/Users/tanze/OneDrive/Desktop/playwright/tests/Practise/practise_8/index.html');
    })
    for(const data of Object.values(testData)){
        if(data.testName === "Test 1 - Fill Input" || data.testName === "Test 1 - Negative test"){
            test.only(data.testName, async()=>{
                await pageObject.fillFirstName(data.firstName);
                await pageObject.fillAge(data.age);
                if(data.isStudent){
                await pageObject.checkingIsStudent();
                }
                await pageObject.applyData();

                expect(await pageObject.text(pageObject.displayFirstNameInput)).toBe(data.expectedFirstName);
                expect(await pageObject.text(pageObject.displayAge)).toBe(data.expectedAge);
                console.log(data.expectedIsStudent);
                expect(await pageObject.text(pageObject.displayIsStudent)).toBe(data.expectedIsStudent);
            })
        }
    }
})