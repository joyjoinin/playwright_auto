import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly signIn: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signIn = page.getByText("Sign in");
    this.email = page.getByPlaceholder("hello@gmail.com");
    this.password = page.getByLabel("Password");
    this.submit = page.getByRole("button", { name: "Sign in" });
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async fill_form(email: string, password: string) {
    await this.signIn.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}
