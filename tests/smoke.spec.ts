import { test, expect } from "@playwright/test";
import { LoginPage } from "../common/pages/loginPage";
import { SchedulePage, ScheduleDetails } from "../common/pages/schedulePage";
import { HomePage } from "../common/pages/homePage";
import { ListingsPage, Listing } from "../common/pages/listingsPage";
import { LivePage } from "../common/pages/livePage";
import moment from "moment";

test.describe("create show", () => {
  test("test", async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const schedule = new SchedulePage(page);
    const listingPage = new ListingsPage(page);
    const livePage = new LivePage(page);
    const loginUrl =
      "https://zerocool:XQZlx6iprxItlugXiiYcTp@dev.fanatics.live";
    const manageUrl = "https://dev.fanatics.live/shops/fanatics-live/manage";
    const account = { email: "joy@57blocks.com", password: "joy159753ty,." };
    const startDate = moment().utc().format("YYYY-MM-DD");
    const startTime = moment().utc().format("HH:mm");
    const showName = "smoke" + startDate + startTime;
    const scheduleDetails: ScheduleDetails = {
      showName: showName,
      imgFile: "./img.png",
      date: startDate,
      time: startTime,
      channel: "joy 1/7",
      breakerOne: "joy@57blocks.com",
    };
    const randomSetlisting: Listing = {
      listingTitle: "random set",
      listingName: "NBA 30 Team",
      pricePerSpot: "1000",
    };
    const randomAuctionlisting: Listing = {
      listingTitle: "random auction",
      listingName: "NBA 30 Team",
      minbid: "100",
    };
    const pickSetlisting: Listing = {
      listingTitle: "pick set",
      listingName: "NBA 30 Team",
      assignPrices: "100",
    };
    const pickAuctionlisting: Listing = {
      listingTitle: "pick auction",
      listingName: "NBA 30 Team",
      minbid: "100",
    };

    await login.goto(loginUrl);
    await login.fill_form(account.email, account.password);
    await login.goto(manageUrl);

    await home.scheduleNewShow();
    await schedule.scheduleNewShow(scheduleDetails);
    // await listingPage.addPickYourSpotAuction(pickAuctionlisting);
    // await listingPage.addPickYourSpotSetPrice(pickSetlisting);
    // await listingPage.addRandomAuction(randomAuctionlisting);
    // await listingPage.addRandomSetPrice(randomSetlisting);
    await listingPage.scheduleThisShow();
    await home.searchShow(showName);
    await page.waitForTimeout(5000);
    await livePage.goLive();
    // await livePage.endLive();      is hidden!!!
  });
});
