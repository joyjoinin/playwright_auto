import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly scheduleShow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scheduleShow = page.getByRole("button", { name: "Schedule a show" });
  }

  async scheduleNewShow() {
    await this.scheduleShow.click();
  }

  async searchShow(showName: string) {
    await this.page.getByPlaceholder("Search Streams").fill(showName);
    await expect(
      this.page.getByRole("heading", { name: showName })
    ).toBeVisible({
      timeout: 10000,
    });
    await this.page.locator('button[title="Details"]').first().click();
  }
}

// await page.getByPlaceholder("Search Streams").fill(showName);
// await expect(page.getByRole("heading", { name: showName })).toBeVisible({
//   timeout: 10000,
// });
// await page.locator('button[title="Details"]').first().click();
