import { expect, test } from "@playwright/test";

test("my test", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com");
  await page.click('//a[@href="01-xpath-register-page.html"]');
  await page.fill("input#username", "Marcus");
  await page.fill("input#email", "nguyenhoang1151995@gmail.com");
  await page.click("input#male");
  await page.click("input#traveling");
  await page.selectOption("select#interests", "Music");
  await page.selectOption("select#country", "usa");
  await page.fill("input#dob", "1995-05-11");
  await page.setInputFiles("input#profile", "/Users/macbook/Desktop/Playwright/DOCs/Lesson/K8+class+-+lesson+02+-+exercises.pdf");
  await page.fill("textarea#bio", "bio");
  await page.hover("div.tooltip");
  await page.check("input#newsletter");
  await page.click("//button[@type='submit']");

});
