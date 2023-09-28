import { test as base, chromium, type BrowserContext } from '@playwright/test';
import path from 'path';

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
}>({
  context: async ({ }, use) => {
    const pathToExtension = path.join(__dirname, 'extension');
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        // `--headless=new`,
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
      permissions: [
        'camera',
        'microphone'
      ],
      screen: {
        width: 1920,
        height: 1080
        },
      timeout: 0
    });
    await use(context);
    // await context.close();
  },
  
  // extensionId: async ({ context }, use) => {
  //   /*
  //   // for manifest v2:
  //   let [background] = context.backgroundPages()
  //   if (!background)
  //     background = await context.waitForEvent('backgroundpage')
  //   */

  //   // for manifest v3:
  //   let [background] = context.serviceWorkers();
  //   if (!background)
  //     background = await context.waitForEvent('serviceworker');

  //   const extensionId = background.url().split('/')[2];
  //   await use(extensionId);
  // },
});

test.afterEach(async ({ context }) => {
  context.waitForEvent
});

export const expect = test.expect;