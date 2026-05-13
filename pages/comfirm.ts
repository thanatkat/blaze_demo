import { expect, type Locator, type Page } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
  readonly titlePage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titlePage = page.getByRole('heading', { name: 'Thank you for your purchase today!' });
  }

  async verifyTitle() {
    await expect(this.titlePage).toContainText('Thank you for your purchase today!');
  }

};