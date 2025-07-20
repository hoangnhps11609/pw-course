import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Playwright Practice Blog – Học automation test từ chưa biết gì – Playwright Practice Blog – Học automation test từ chưa biết gì");
});

test('get started link', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org');

  // Click the get started link.
  await page.getByRole('link', { name: 'Khóa học automation test cho người chưa biết gì' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Thông tin khoá học' })).toBeVisible();
});
