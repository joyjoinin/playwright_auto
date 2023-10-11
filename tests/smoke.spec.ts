import { test, expect } from "@playwright/test";
import { LoginPage } from "../common/pages/loginPage";
import { SchedulePage, ScheduleDetails } from "../common/pages/schedulePage";
import { HomePage } from "../common/pages/homePage";
import { ListingsPage, Listing } from "../common/pages/listingsPage";
import { LivePage } from "../common/pages/livePage";
import moment from "moment";
import { loginParams } from "../common/params/loginParams";
import { scheduleParams } from "../common/params/scheduleParams";
import { listingsParams } from "../common/params/listingsParams";

test.describe("create show", () => {
  test("test", async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const schedule = new SchedulePage(page);
    const listingPage = new ListingsPage(page);
    const livePage = new LivePage(page);
    const startDate = moment().utc().format("YYYY-MM-DD");
    const startTime = moment().utc().format("HH:mm");
    const showName = "smoke" + startDate + startTime;
    const scheduleDetails: ScheduleDetails = {
      showName: showName,
      imgFile: scheduleParams.imgPath,
      date: startDate,
      time: startTime,
      channel: scheduleParams.channel,
      breakerOne: scheduleParams.breakerOne,
    };

    await page.goto(loginParams.loginUrl);
    await page.goto(loginParams.manageUrl);

    await home.scheduleNewShow();
    await schedule.scheduleNewShow(scheduleDetails);
    await listingPage.addPickYourSpotAuction(listingsParams.pickAuctionlisting);
    await listingPage.addPickYourSpotSetPrice(listingsParams.pickSetlisting);
    await listingPage.addRandomAuction(listingsParams.randomAuctionlisting);
    await listingPage.addRandomSetPrice(listingsParams.randomSetlisting);
    await listingPage.scheduleThisShow();
    await home.searchShow(showName);
    await page.waitForTimeout(5000);
    await livePage.goLive();
    // await livePage.endLive();      is hidden!!!
  });
});
