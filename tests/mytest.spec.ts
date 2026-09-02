import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login Tests', () => {

  // 1. Амжилттай нэвтрэх
  test('Амжилттай нэвтрэх', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    // Products харагдаж байгаа эсэх
    await expect(page.getByText('Products')).toBeVisible();

    // URL зөв эсэх
    await expect(page).toHaveURL(/inventory.html/);
  });


  // 2. Буруу нууц үгтэй нэвтрэх
  test('Буруу нууц үгтэй нэвтрэхэд алдаа гарах', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');

    await page.getByRole('button', { name: 'Login' }).click();

    // Error message шалгах
    await expect(
      page.getByText('Epic sadface: Username and password do not match any user in this service')
    ).toBeVisible();

    // Login page дээрээ хэвээр байгаа эсэх
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });


  // 3. Login хийсний дараа бараа сагслах
  test('Нэвтэрсний дараа бараа сагслах', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Login хийх
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    // Products page шалгах
    await expect(page.getByText('Products')).toBeVisible();

    // Sauce Labs Backpack-г сагсанд нэмэх
    await page.getByRole('button', {
      name: 'Add to cart'
    }).first().click();

    // Сагсан дээр 1 бараа нэмэгдсэн эсэх
    await expect(
      page.locator('.shopping_cart_badge')
    ).toHaveText('1');
  });

});