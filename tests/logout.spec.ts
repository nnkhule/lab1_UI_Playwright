import { test, expect } from '@playwright/test';

test('User can logout', async ({ page }) => {

  // 1. Login
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  // Login амжилттай эсэх
  await expect(page).toHaveURL(/inventory/);

  // 2. Menu button
  await page.getByRole('button', { name: 'Open Menu' }).click();

  // 3. Logout
  await page.getByText('Logout').click();

  // 4. Login page руу буцсан эсэх
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});