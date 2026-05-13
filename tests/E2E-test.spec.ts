import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home';
import { ReservePage } from '../pages/reserve';
import { PurchasePage } from '../pages/purchase';
import { ConfirmationPage } from '../pages/comfirm';
import userData from '../data/userData.json';

test.describe('E2E blaze demo', () => {
  test('Book airplance ticket', async({ page }) => {
    const homePage = new HomePage(page);
    const reservePage = new ReservePage(page);
    const purchasePage = new PurchasePage(page);
    const comfirmPage = new ConfirmationPage(page);
    
    await test.step('select destination', async () => {
      await homePage.goTo();
      await homePage.selectDeparture('Boston');
      await homePage.selectDestination('New York');
      await homePage.clickFindFlightBtn();
    });

    await test.step('select flight', async () => {
      await reservePage.clickChooseFlightBtn();
    });

    await test.step('fill information', async () => {
      await purchasePage.fillName(userData.information.name);
      await purchasePage.fillAddress(userData.information.address);
      await purchasePage.fillCity(userData.information.city);
      await purchasePage.fillState(userData.information.state);
      await purchasePage.fillZipCode(userData.information.zipcode);
      await purchasePage.selectCardType();
      await purchasePage.fillCreditCardNumber(userData.information.creditCardNumber);
      await purchasePage.fillNameOnCard(userData.information.nameOnCard);
      await purchasePage.clickPurchaseBtn();
    });

    await test.step('verify comfirm reserve', async () => {
      await comfirmPage.verifyTitle();
    });
    
  });
});
