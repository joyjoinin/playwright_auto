import { test, expect } from "@playwright/test";
import { LoginPage } from "../common/pages/loginPage";
import moment from "moment";
import { SchedulePage, ScheduleDetails } from "../common/pages/schedulePage";
import { HomePage } from "../common/pages/homePage";

test.describe("create show", () => {
  test("test", async ({ page }) => {
    let startDate = moment().utc().format("YYYY-MM-DD");
    let startTime = moment().utc().format("HH:mm");
    let showName = "smoke" + startDate + startTime;

    const login = new LoginPage(page);
    await login.goto(
      "https://zerocool:XQZlx6iprxItlugXiiYcTp@dev.fanatics.live"
    );
    await login.fill_form("joy@57blocks.com", "joy159753ty,.");
    await page.goto("https://dev.fanatics.live/shops/fanatics-live/manage");

    const home = new HomePage(page);
    await home.scheduleNewShow();

    const schedule = new SchedulePage(page);
    const scheduleDetails: ScheduleDetails = {
      showName: showName,
      imgFile: "./img.png",
      date: startDate,
      time: startTime,
      channel: "joy 1/7",
      breakerOne: "joy@57blocks.com",
    };

    await schedule.scheduleNewShow(scheduleDetails);
    await page.waitForTimeout(10000);

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

    // await page.getByPlaceholder("Search Streams").fill(showName);
    // await expect(page.getByRole("heading", { name: showName })).toBeVisible({
    //   timeout: 10000,
    // });
    // await page.locator('button[title="Details"]').first().click();

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
    // });
  });
});
