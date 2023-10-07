import { expect, type Locator, type Page } from "@playwright/test";

export interface ScheduleDetails {
  showName: string;
  imgFile: string;
  date: string;
  time: string;
  channel: string;
  description?: string | null;
  breakerOne: string;
  breakerTwo?: string;
}

export class SchedulePage {
  readonly page: Page;
  readonly scheduleShow: Locator;
  readonly showTitle: Locator;
  readonly coverImage: Locator;
  readonly date: Locator;
  readonly time: Locator;
  readonly channel: Locator;
  readonly descirption: Locator;
  readonly breakerOne: Locator;
  readonly breakerTwo: Locator;
  readonly addListings: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scheduleShow = page.getByRole("button", { name: "Schedule a show" });
    this.showTitle = page.getByPlaceholder("Keep it short and sweet");
    this.coverImage = page.locator("input#cover_image_upload");
    this.date = page.locator("#startsAtDate");
    this.time = page.locator("#startsAtTime");
    this.channel = page.locator("#live_stream-form_channel_id");
    this.breakerOne = page.locator("#live_stream-form_staffers_0_id");
    this.addListings = page.getByRole("button", { name: "Add listings" });
  }

  async scheduleNewShow(scheduleDetails: ScheduleDetails) {
    await this.scheduleShow.click();
    await this.showTitle.fill(scheduleDetails.showName);
    const input = this.coverImage;
    await this.page.waitForTimeout(2000);
    input && (await input.setInputFiles(scheduleDetails.imgFile));
    await this.page.waitForTimeout(3000);
    await this.date.fill(scheduleDetails.date);
    await this.time.fill(scheduleDetails.time);
    await this.channel.selectOption(scheduleDetails.channel);
    await this.breakerOne.selectOption(scheduleDetails.breakerOne);
    await this.addListings.click();
  }
}

// await page.getByRole("button", { name: "Schedule a show" }).click();
// await page.getByPlaceholder("Keep it short and sweet").fill(showName);
// const fileInput = page.locator("input#cover_image_upload");
// await page.waitForTimeout(2000);
// fileInput && (await fileInput.setInputFiles("./img.png"));
// await page.waitForTimeout(3000);
// await page.locator("#startsAtDate").fill(startDate);
// await page.locator("#startsAtTime").fill(startTime);
// await page.locator("#live_stream-form_channel_id").selectOption("joy 1/7");
// await page
//   .locator("#live_stream-form_staffers_0_id")
//   .selectOption("joy@57blocks.com");
// await page.getByRole("button", { name: "Add listings" }).click();
