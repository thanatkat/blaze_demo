import { expect, type Locator, type Page } from '@playwright/test';

export class ReservePage {
  readonly page: Page;
  readonly chooseFlightBtn: Locator;
  readonly reserveUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.chooseFlightBtn = page.locator('form[name=UA234] ~ td > input[type=submit]');
    this.reserveUrl = 'https://blazedemo.com/reserve.php';
  }

  async clickChooseFlightBtn() {
    await this.chooseFlightBtn.click();
  }

  async goTo() {
    await this.page.goto(this.reserveUrl);
  }

};