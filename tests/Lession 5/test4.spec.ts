import { expect, test } from "@playwright/test";

test("my test", async ({ page }) => {
  let contents, titles;
  await test.step("get data", async () => {
    await page.goto('https://vnexpress.net/khoa-hoc', {waitUntil: 'domcontentloaded'});
    titles = await page.locator("//h3[@class='title-news']/a").allTextContents();
    contents = await page.locator('//p[@class="description"]/a').allTextContents();
    console.log(titles);
  });

  await page.goto("https://material.playwrightvn.com");
  await page.click("//a[@href='04-xpath-personal-notes.html']");
  for (let i = 0; i < 6; i++) {
    await page.fill("textarea#note-content", contents[i]);
    await page.fill("input#note-title", titles[i]);
    await page.click("button#add-note");
  }
  await page.fill("input#search", "title 1");
});
