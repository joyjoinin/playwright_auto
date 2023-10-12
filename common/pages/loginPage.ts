import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly signIn: Locator;
  readonly email: Locator;
  readonly nextStep: Locator;
  readonly password: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signIn = page.getByRole("link", { name: "Sign in" });
    this.email = page.getByLabel("Email");
    this.nextStep = page.getByRole("button", { name: "Next Step" });
    this.password = page.getByLabel("Password", { exact: true });
    this.submit = page.getByRole("button", { name: "Log in with Fanatics ID" });
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async fill_form(email: string, password: string, url: string) {
    await this.signIn.click();
    await this.email.fill(email);
    await this.nextStep.click();
    await this.password.fill(password);
    await this.submit.click();
    await this.page.waitForURL(url);
  }
}
