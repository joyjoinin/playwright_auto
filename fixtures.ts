import { test as baseTest, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

export * from "@playwright/test";
export const test = baseTest.extend<{}, { workerStorageState: string }>({
  // Use the same storage state for all tests in this worker.
  storageState: ({ workerStorageState }, use) => use(workerStorageState),

  // Authenticate once per worker with a worker-scoped fixture.
  workerStorageState: [
    async ({ browser }, use) => {
      // Use parallelIndex as a unique identifier for each worker.
      const fileName = path.resolve(
        test.info().project.outputDir,
        `playwright/.auth/user.json`
      );

      if (fs.existsSync(fileName)) {
        // Reuse existing authentication state if any.
        await use(fileName);
        return;
      }

      // Important: make sure we authenticate in a clean environment by unsetting storage state.
      const page = await browser.newPage({ storageState: undefined });

      // Acquire a unique account, for example create a new one.
      // Alternatively, you can have a list of precreated accounts for testing.
      // Make sure that accounts are unique, so that multiple team members
      // can run tests at the same time without interference.
      // Perform authentication steps. Replace these actions with your own.
      await page.goto(
        "https://zerocool:XQZlx6iprxItlugXiiYcTp@dev.fanatics.live"
      );
      await page.getByText("Sign in").click();
      await page.getByPlaceholder("hello@gmail.com").fill("joy@57blocks.com");
      await page.getByLabel("Password").fill("joy159753ty,.");
      await page.getByRole("button", { name: "Sign in" }).click();
      // Wait until the page receives the cookies.
      //
      // Sometimes login flow sets cookies in the process of several redirects.
      // Wait for the final URL to ensure that the cookies are actually set.
      await page.goto("https://dev.fanatics.live/shops/fanatics-live/manage");
      // Alternatively, you can wait until the page reaches a state where all cookies are set.
      await expect(
        page.getByRole("button", { name: "Schedule a show" })
      ).toBeVisible();

      // End of authentication steps.

      await page.context().storageState({ path: fileName });
      await page.close();
      await use(fileName);
    },
    { scope: "worker" },
  ],
});
