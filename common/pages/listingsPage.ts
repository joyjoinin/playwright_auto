import { expect, type Locator, type Page } from "@playwright/test";

export class ListingsPage {
  readonly page: Page;
  readonly listingTitle: Locator;
  readonly listingName: Locator;
  readonly random: Locator;
  readonly pickYourSpot: Locator;
  readonly setPrice: Locator;
  readonly auction: Locator;
  readonly saveListing: Locator;
  readonly scheduleShow: Locator;
  readonly saveShowAsDraft: Locator;
  readonly addListings: Locator;
  readonly pricePerSpot: Locator;
  readonly assignPrices: Locator;
  readonly miniBid: Locator;
  readonly breakExtras: Locator;
  readonly saveExtras: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listingTitle = page.getByRole("button", { name: "Schedule a show" });
    this.listingName = page.getByPlaceholder("Keep it short and sweet");
    this.random = page.locator("input#cover_image_upload");
    this.pickYourSpot = page.locator("#startsAtDate");
    this.setPrice = page.locator("#startsAtTime");
    this.auction = page.locator("#live_stream-form_channel_id");
    this.saveListing = page.locator("#live_stream-form_staffers_0_id");
    this.scheduleShow = page.getByRole("button", { name: "Add listings" });
    this.saveShowAsDraft = page.getByRole("button", { name: "Add listings" });
    this.addListings = page.getByRole("button", { name: "Add listings" });
    this.pricePerSpot = page.getByRole("button", { name: "Add listings" });
    this.assignPrices = page.getByRole("button", { name: "Add listings" });
    this.miniBid = page.getByRole("button", { name: "Add listings" });
    this.breakExtras = page.getByRole("button", { name: "Add listings" });
    this.saveExtras = page.getByRole("button", { name: "Add listings" });
  }

  async addRandomSetPrice() {}
  async addRandomAuction() {}
  async addPickYourSpotSetPrice() {}
  async addPickYourSpotAuction() {}
}

// await page.waitForTimeout(5000);
// await page.getByLabel("Title").fill("random set");
// await page
//   .locator("#create-listing-form_break_template_id")
//   .selectOption("NBA 30 Team");
// await page.getByText("Random", { exact: true }).click();
// await page.getByText("Set price", { exact: true }).click();
// await page.waitForTimeout(1000);
// await page.locator("#create-listing-form_price_in_cents").fill("1000");
// await page.waitForTimeout(1000);
// await page
//   .getByRole("button", { name: "Save listing and add another" })
//   .click();
// await page.waitForTimeout(1000);

// await page.getByLabel("Title").fill("random auction");
// await page
//   .locator("#create-listing-form_break_template_id")
//   .selectOption("NBA 30 Team");
// await page.getByText("Random", { exact: true }).click();
// await page.getByText("Auction", { exact: true }).click();
// await page.waitForTimeout(1000);
// await page.locator("span").filter({ hasText: "Break extras" }).click();
// await page
//   .locator("#create-listing-form_break_mechanic_type_stash_or_pass")
//   .check();
// await page.waitForTimeout(1000);
// await page.getByLabel("Minimum required").fill("100");
// await page.waitForTimeout(1000);
// await page.getByRole("button", { name: "Save", exact: true }).click();
// await page.locator("#create-listing-form_minimum_bid_in_cents").fill("100");
// await page.waitForTimeout(1000);
// await page
//   .getByRole("button", { name: "Save listing and add another" })
//   .click();
// await page.waitForTimeout(1000);
// await page.getByLabel("Title").fill("pick set");
// await page
//   .locator("#create-listing-form_break_template_id")
//   .selectOption("NBA 30 Team");
// await page.getByText("Pick your spot", { exact: true }).click();
// await page.getByText("Set price", { exact: true }).click();
// await page.waitForTimeout(1000);
// await page
//   .locator('[data-test-id="toggle-spot-pricing-modal-button"]')
//   .click();
// var i = 0;
// for (; i < 30; ) {
//   await page.locator(`[data-test-id="price_input_${i}"]`).fill("100");
//   i++;
// }
// await page.locator('[data-test-id="assign-prices-button"]').click();
// await page
//   .getByRole("button", { name: "Save listing and add another" })
//   .click();
// await page.waitForTimeout(1000);

// await page.getByLabel("Title").fill("set auction");
// await page
//   .locator("#create-listing-form_break_template_id")
//   .selectOption("NBA 30 Team");
// await page.getByText("Pick your spot", { exact: true }).click();
// await page.getByText("Auction", { exact: true }).click();
// await page.waitForTimeout(1000);
// await page.locator("span").filter({ hasText: "Break extras" }).click();
// await page.getByLabel("Extended bidding").check();
// await page.getByRole("button", { name: "Save", exact: true }).click();
// await page
//   .locator("#create-listing-form_minimum_bid_in_cents")
//   .fill("1000");
// await page.waitForTimeout(2000);
// await page
//   .getByRole("button", { name: "Save listing and add another" })
//   .click();
// await page.waitForTimeout(1000);
// await page.getByRole("button", { name: "Schedule show" }).click();
