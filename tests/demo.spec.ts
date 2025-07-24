import { expect, test } from "@playwright/test";

test(
  "basic test",
  {
    tag: "@smoke",
  },
  async ({ page }) => {
    await test.step("open trang chatgpt", async () => {
      await page.goto("https://chatgpt.com/");
    });
    //fill là nhập luôn chuỗi
    await test.step("fill search box", async () => {
      await page.locator("//div[@id='prompt-textarea']").fill('playwright cơ bản');
    });
    //pressSequentially là nhập từng kí tự chuỗi chuỗi
    await test.step("pressSequentially search box", async () => {
      await page.locator("//div[@id='prompt-textarea']").pressSequentially('playwright cơ bản'), {
        deplay: 100,
      };
    });
    //click/dbclick
    await test.step("input search box", async () => {
      await page.locator("//div[@id='prompt-textarea']").click();
    });
    //click chuột phải
    await test.step("input search box", async () => {
      await page.locator("//div[@id='prompt-textarea']").click({
        button: 'right'
      });
    });
    //click kèm phím
    await test.step("input search box", async () => {
      await page.locator("//div[@id='prompt-textarea']").click({
        modifiers: ['Shift']
      });
    });
    //check
    await test.step("input search box", async () => {
      await page.locator("//div[@id='prompt-textarea']").check();
    });
    //check theo giá trị
    await test.step("input search box", async () => {
      await page.locator("//div[@id='prompt-textarea']").setChecked(false);
    });
    //hover
    await test.step("input search box", async () => {
      await page.locator("//div[@id='prompt-textarea']").hover();
    });
    //lấy element theo text
    await test.step("input search box", async () => {
      await page.locator("//div[text()='tao']").setChecked(false);
    });
    //lấy element theo contain
    await test.step("input search box", async () => {
      await page.locator("//div[contains(text(), 'tao')]").setChecked(false);
    });
    //lấy giá trị check hiện tại
    const isChecked = await page.locator('').isChecked();
    expect(isChecked).toBeFalsy();//Check khi open có check hay không
  }
);

