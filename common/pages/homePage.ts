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
}
