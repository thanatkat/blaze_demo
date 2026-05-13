import { expect, type Locator, type Page } from '@playwright/test';

export class PurchasePage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipCodeInput: Locator;
  readonly cardSelect: Locator;
  readonly creditCardNumber: Locator;
  readonly monthInput: Locator;
  readonly yearInput: Locator;
  readonly nameOnCardInput: Locator;
  readonly purchaseFightBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByRole('textbox', { name: 'Name', exact: true });
    this.addressInput = page.getByRole('textbox', { name: 'Address' });
    this.cityInput = page.getByRole('textbox', { name: 'City' });
    this.stateInput = page.getByRole('textbox', { name: 'State' });
    this.zipCodeInput = page.getByRole('textbox', { name: 'Zip Code' });
    this.cardSelect = page.locator('[id="cardType"]');
    this.creditCardNumber = page.getByRole('textbox', { name: 'Credit Card Number' });
    this.monthInput = page.getByRole('textbox', { name: 'Month' });
    this.yearInput = page.getByRole('textbox', { name: 'Year' });
    this.nameOnCardInput = page.getByRole('textbox', { name: 'Name on Card' });
    this.purchaseFightBtn = page.getByRole('button', { name: 'Purchase Flight' });
  }

  async fillName(name: string) {
    await this.nameInput.fill(name);
  };

  async fillAddress(address: string) {
    await this.addressInput.fill(address);
  };

  async fillCity(city: string) {
    await this.cityInput.fill(city);
  };

  async fillState(state: string) {
    await this.stateInput.fill(state);
  };

  async fillZipCode(code: string) {
    await this.zipCodeInput.fill(code);
  };

  async selectCardType() {
    await this.cardSelect.selectOption({ value: "amex" });
  };

  async fillCreditCardNumber(num: string) {
    await this.creditCardNumber.fill(num);
  };

  async fillMonth(month: string) {
    await this.monthInput.fill(month);
  };

  async fillYear(year: string) {
    await this.yearInput.fill(year);
  };

  async fillNameOnCard(name: string) {
    await this.nameOnCardInput.fill(name);
  };

  async clickPurchaseBtn() {
    await this.purchaseFightBtn.click();
  }

};