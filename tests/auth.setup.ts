import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../common/pages/loginPage";
import { loginParams } from "../common/params/loginParams";

const authFile = ".auth/user.json";

setup("authenticate", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto(loginParams.loginUrl);
  await login.fill_form(
    loginParams.account.email,
    loginParams.account.password
  );
  await login.goto(loginParams.manageUrl);

  await page.context().storageState({ path: authFile });
  await page.close();
});
