import { expect, type Locator, type Page } from "@playwright/test";

export class LivePage {
  readonly page: Page;
  readonly goLiveButton: Locator;
  readonly endShowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goLiveButton = page.getByRole("button", {
      name: "Go live",
      exact: true,
    });
    this.endShowButton = page.getByRole("button", {
      name: "End show",
      exact: true,
    });
  }

  async goLive() {
    await this.goLiveButton.click();
    await expect(this.page.getByText("End show")).toBeVisible({
      timeout: 5000,
    });
  }

  async endLive() {
    await this.endShowButton.click();
    await this.page.getByLabel("Yes, I'm sure.").check();
    expect(
      await this.page.getByLabel("Yes, I'm sure.").isChecked()
    ).toBeTruthy();
    await this.page.locator("button#endStreamButton").click();
    await expect(this.page.getByText("Go live")).toBeVisible({
      timeout: 5000,
    });
  }
}

// await page.getByText("Pick your spot • Set price ").click();
// await page.getByText("Random • Auction ").click();
// await page.getByText("Random • Set price ").click();
// await page.getByText("Pick your spot • Auction ").click();

// await page.getByRole("button", { name: "Overlays Randomize" }).click();
// await page.getByRole("button", { name: "Fire" }).click();
// await page.getByRole("button", { name: "To the moon" }).click();
// await page.getByRole("button", { name: "Confetti" }).click();
// await page
//   .getByRole("heading", { name: "Screen overlays" })
//   .getByRole("button")
//   .click();

// await page
//   .getByRole("button", { name: "Giveaway Launch a giveaway" })
//   .click();
// await page.waitForTimeout(1000);
// await page.locator("#giveaway-form_title").fill("test1");
// await page.click('input[name="audience"][value="All viewers"]');
// await page.waitForTimeout(1000);
// await page.getByRole("button", { name: "Launch", exact: true }).click();
// await page.waitForTimeout(1000);

// await page.waitForTimeout(5000);
// await page.getByRole("button", { name: "Go live", exact: true }).click();
// await page.getByRole("button", { name: "End show", exact: true }).click();
// await page.getByLabel("Yes, I'm sure.").check();
// expect(await page.getByLabel("Yes, I'm sure.").isChecked()).toBeTruthy();
// await page.locator("button#endStreamButton").click();
// await expect(page.getByText("Go live")).toBeVisible({
//   timeout: 10000,
// })
