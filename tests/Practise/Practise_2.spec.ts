import test, { expect } from "@playwright/test";

test.skip('Automation Form Submission', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const enterInput = page.getByPlaceholder('What needs to be done?');
    await enterInput.fill('walk');
    await enterInput.press('Enter');
    await enterInput.fill('sleep');
    await enterInput.press('Enter');
    
    
   const firstTodo = page.getByTestId('todo-item').nth(0);
   await firstTodo.getByRole('checkbox').check();

   const secondTodo = page.getByTestId('todo-item').nth(1);
   //await secondTodo.getByRole('checkbox').check();
   //await page.waitForTimeout(5000);
   await expect(secondTodo).not.toHaveClass('completed');
   await expect(firstTodo).not.toHaveClass('completed');
})

test.only('Handling Forms', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const placeholder = '[placeholder="What needs to be done?"]';
    await page.fill(placeholder, 'Lubna' );
    await page.locator(placeholder).press('Enter');

    const checkbox = page.locator('.toggle');
    await checkbox.check();
    await page.waitForTimeout(5000);
})