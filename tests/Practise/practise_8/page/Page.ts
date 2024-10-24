import {Page} from '@playwright/test';
import { AbstractPage } from './AbstractPage';
import { Button } from './Button';
import { Input } from './Input';

export class PageObject extends AbstractPage{
    private button: Button;
    private input : Input;

    //selectors
    readonly firstNameInputSelector ="#firstName";
    readonly ageSelector ="#age";
    readonly checkIsStudent = '#isStudent';
    readonly applyButtonSelector = '#applyData';

    //elements displaying results
    readonly displayFirstNameInput ="#displayFirstName";
    readonly displayAge ="#displayAge";
    readonly displayIsStudent = '#displayIsStudent';

    constructor(page: Page){
        super(page);
        this.button = new Button(page);
        this.input =new Input(page);
    }

    async open(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async fillFirstName(value:string): Promise<void>{
        await this.input.setInputValue(this.firstNameInputSelector, value);
    }

    async fillAge(value: string): Promise<void>{
        await this.input.setInputValue(this.ageSelector, value);
    }

    async checkingIsStudent(): Promise<void>{
        await this.page.check(this.checkIsStudent);
    }

    async applyData():Promise<void> {
        await this.button.clickButton(this.applyButtonSelector);
    }

    async text(selector:string): Promise<string | null>{
        const textContent = await this.page.textContent(selector);
        return textContent ?? null;
    }
}