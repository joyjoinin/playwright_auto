import { expect, type Locator, type Page } from "@playwright/test";

export interface Listing {
  listingTitle: string;
  listingName: string;
  pricePerSpot?: string;
  assignPrices?: string;
  minbid?: string;
  breakExtras?: {
    extendedBidding?: boolean;
    extrasType?:
      | {
          extrasType: "stashOrPass";
          miniRequired: string;
        }
      | {
          extrasType: "pick2Choose1";
          miniRequired: string;
        }
      | {
          extrasType: "None";
        };
  };
}

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
  readonly pricePerSpot: Locator;
  readonly assignPrices: Locator;
  readonly miniBid: Locator;
  readonly breakExtras: Locator;
  readonly minRequired: Locator;
  readonly extendedBidding: Locator;
  readonly saveExtras: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listingTitle = page.getByLabel("Title");
    this.listingName = page.locator("#create-listing-form_break_template_id");
    this.random = page.getByText("Random", { exact: true });
    this.pickYourSpot = page.getByText("Pick your spot", { exact: true });
    this.setPrice = page.getByText("Set price", { exact: true });
    this.auction = page.getByText("Auction", { exact: true });
    this.saveListing = page.getByRole("button", {
      name: "Save listing and add another",
    });
    this.scheduleShow = page.getByRole("button", { name: "Schedule show" });
    this.saveShowAsDraft = page.getByRole("button", {
      name: "Save show as draft",
    });
    this.pricePerSpot = page.locator("#create-listing-form_price_in_cents");
    this.assignPrices = page.locator(
      '[data-test-id="toggle-spot-pricing-modal-button"]'
    );
    this.miniBid = page.locator("#create-listing-form_minimum_bid_in_cents");
    this.breakExtras = page.locator("span").filter({ hasText: "Break extras" });
    this.minRequired = page.getByLabel("Minimum required");
    this.extendedBidding = page.locator(
      "#create-listing-form_extended_bidding_enabled"
    );
    this.saveExtras = page.getByRole("button", { name: "Save", exact: true });
  }

  async commonBegin(listing: Listing) {
    await this.listingTitle.fill(listing.listingTitle);
    await this.listingName.selectOption(listing.listingName);
  }

  async commonFinish() {
    await this.page.waitForTimeout(1000);
    await this.saveListing.click();
    await this.page.waitForTimeout(1000);
  }

  async addRandomSetPrice(listing: Listing) {
    await this.commonBegin(listing);
    await this.random.click();
    await this.setPrice.click();
    await this.page.waitForTimeout(1000);
    listing.pricePerSpot &&
      (await this.pricePerSpot.fill(listing.pricePerSpot));
    await this.commonFinish();
  }
  async addRandomAuction(listing: Listing) {
    await this.commonBegin(listing);
    await this.random.click();
    await this.auction.click();
    if (listing.breakExtras) {
      await this.breakExtras.click();
      switch (listing.breakExtras.extrasType?.extrasType) {
        case "stashOrPass":
          await this.page
            .locator("#create-listing-form_break_mechanic_type_stash_or_pass")
            .check();
          await this.minRequired.fill(
            listing.breakExtras.extrasType?.miniRequired
          );
          break;
        case "pick2Choose1":
          await this.page
            .locator("#create-listing-form_break_mechanic_type_pick_2_choose_1")
            .check();
          await this.minRequired.fill(
            listing.breakExtras.extrasType?.miniRequired
          );
          break;
        case "None":
          await this.page
            .locator("#create - listing - form_break_mechanic_type_")
            .check();
          break;
      }
      listing.breakExtras.extendedBidding && this.extendedBidding.check();
      await this.saveExtras.click();
    }
    listing.minbid && (await this.miniBid.fill(listing.minbid));
    await this.page.waitForTimeout(1000);
    await this.commonFinish();
  }
  async addPickYourSpotSetPrice(listing: Listing) {
    await this.commonBegin(listing);
    await this.listingTitle.fill(listing.listingTitle);
    await this.listingName.selectOption(listing.listingName);
    await this.pickYourSpot.click();
    await this.setPrice.click();
    await this.assignPrices.click();
    if (listing.assignPrices) {
      var i = 0;
      for (; i < 30; ) {
        await this.page
          .locator(`[data-test-id="price_input_${i}"]`)
          .fill(listing.assignPrices);
        i++;
      }
    }
    await this.page.locator('[data-test-id="assign-prices-button"]').click();
    await this.commonFinish();
  }
  async addPickYourSpotAuction(listing: Listing) {
    await this.commonBegin(listing);
    await this.pickYourSpot.click();
    await this.auction.click();
    if (listing.breakExtras?.extendedBidding) {
      this.breakExtras.click();
      this.extendedBidding.check();
      await this.page.waitForTimeout(1000);
      await this.saveExtras.click();
    }
    listing.minbid && (await this.miniBid.fill(listing.minbid));
    await this.commonFinish();
  }

  async scheduleThisShow() {
    await this.scheduleShow.click();
  }
}
