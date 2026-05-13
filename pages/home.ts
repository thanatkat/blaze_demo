import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly departureSelect: Locator;
  readonly destinationSelect: Locator;
  readonly findFlightBtn: Locator;
  readonly homeUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.departureSelect = page.locator('[name="fromPort"]');
    this.destinationSelect = page.locator('[name="toPort"]');
    this.findFlightBtn = page.getByRole('button', { name: 'Find Flights' });
    this.homeUrl = 'https://blazedemo.com/';
  }

  async selectDeparture(city: string) {
    await this.departureSelect.selectOption(city);
  };

  async selectDestination(city: string) {
    await this.destinationSelect.selectOption(city);
  };

  async clickFindFlightBtn() {
    await this.findFlightBtn.click();
  }

  async goTo() {
    await this.page.goto(this.homeUrl);
  }

};