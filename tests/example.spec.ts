import { test, expect } from "@playwright/test";
import { loginParams } from "../common/params/loginParams";

test("test", async ({ page }) => {
  await page.goto(loginParams.loginUrl);
  await page.goto(loginParams.manageUrl);
});
