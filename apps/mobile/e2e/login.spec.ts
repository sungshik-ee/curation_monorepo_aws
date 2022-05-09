import { test, expect } from '@playwright/test';

test('로그인 필드 입력 후 버튼 클릭', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://client.local.danbi:3000/login');

    const username = page.locator('[data-testid=username]');
    username.fill('tester');

    await expect(await username.evaluate((el: HTMLInputElement) => el.value)).toBe('tester');

    // Find an element with the text 'About Page' and click on it
    await page.click('[data-testid=submit]');
    // The new url should be "/about" (baseURL is used there)
    // await expect(page).toHaveURL('http://client.local.danbi:3000/about')
    // The new page should contain an h1 with "About Page"
    // await expect(page.locator('h1')).toContainText('About Page')
});
