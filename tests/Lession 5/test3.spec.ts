import { expect, test } from "@playwright/test";

test("my test", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com");
  await page.click('//a[@href="03-xpath-todo-list.html"]');
  for (let i = 1; i <= 100; i++) {
    //await page.locator("input#new-task").fill(`Todo ${i}`);
    await page.fill("input#new-task", `Todo ${i}`);
    await page.click("button#add-task");
  }

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      await page.click(`button#todo-${i}-delete`);
    }
  }
});
