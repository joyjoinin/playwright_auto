import { test as setup, expect } from "@playwright/test";
import { default as axios } from "axios";
import { Agent } from "node:https";
import { writeFile } from "node:fs/promises";

const authFile = ".auth/user.json";

setup("authenticate", async ({ page }) => {
  const data = await axios.get(
    "https://dev.fanatics.live/shops/fanatics-live/manage",
    {
      httpsAgent: new Agent({
        rejectUnauthorized: false,
      }),
    }
  );
  const token = data.data?.token || "";
  if (!token) {
    throw new Error("Get token failed!");
  }

  const storage = await page.context().storageState();

  storage.origins.push({
    origin: process.env.WEBSITE_URL || "",
    localStorage: [{ name: "token", value: token }],
  });

  await writeFile(authFile, JSON.stringify(storage), "utf-8");
});
