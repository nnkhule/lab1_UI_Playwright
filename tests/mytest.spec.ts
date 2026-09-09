import { test, expect } from '@playwright/test';

test.describe('SauceDemo E2E Tests with Strict Isolation', () => {

  // 1. Тест бүрийн өмнө нэвтрэх (Буруу нууц үгтэй тестээс бусад тохиолдолд)
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  // 2. Алхам 5-ын дагуу: ТЕСТ БҮРИЙН ТӨГСГӨЛД ЗАВАЛ LOGOUT ХИЙЖ ТӨГСГӨХ
  test.afterEach(async ({ page }) => {
    // Хэрэв нэвтэрсэн хуудас дээр байвал (бургер цэс харагдаж байвал) Logout хийнэ
    const burgerMenu = page.locator('#react-burger-menu-btn');
    if (await burgerMenu.isVisible()) {
      await burgerMenu.click();
      await page.locator('#logout_sidebar_link').click();
      // Logout хийгдсэнийг баталгаажуулна
      await expect(page).toHaveURL('https://www.saucedemo.com/');
    }
  });

  // 1. Амжилттай нэвтрэх тест
  test('Амжилттай нэвтрэх болон хуудас шалгах', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    // Products харагдаж байгаа болон URL-ийг баталгаажуулна
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveURL(/inventory.html/);
  });

  // 2. Буруу нууц үгтэй нэвтрэх тест
  test('Буруу нууц үгтэй нэвтрэхэд алдаа гарах', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();

    // Error message шалгах
    await expect(
      page.getByText('Epic sadface: Username and password do not match any user in this service')
    ).toBeVisible();

    // Login page дээрээ хэвээр байгаа эсэхийг шалгах
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  // 3. Бараа сагслах тест
  test('Нэвтэрсний дараа бараа сагслах', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Products')).toBeVisible();

    // Sauce Labs Backpack-г сагсанд нэмэх
    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    // Сагсан дээр 1 бараа нэмэгдсэн эсэхийг шалгах
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

});