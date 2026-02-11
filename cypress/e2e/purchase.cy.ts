import { loginPage } from '../pages/LoginPage';
import { productsPage } from '../pages/ProductsPage';
import { cartPage } from '../pages/CartPage';
import { checkoutPage } from '../pages/CheckoutPage';

describe('E2E Purchase Flow', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');
    });

    it('should add a product to the cart successfully', () => {
        productsPage.addItemToCart(0);
        productsPage.getCartBadge().should('have.text', '1');
    });

    it('should complete a full purchase flow from end to end', () => {
        productsPage.addItemToCart(0);
        productsPage.goToCart();
        cartPage.verifyItemInCart();
        cartPage.clickCheckout();

        checkoutPage.fillInformation('Alejandro', 'Test', '12345');
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();
        checkoutPage.verifyOrderComplete();
    });

    it('should show error if missing data in checkout (Edge Case)', () => {
        productsPage.addItemToCart(0);
        productsPage.goToCart();
        cartPage.clickCheckout();

        checkoutPage.clickContinue();
        cy.get('[data-test="error"]').should('be.visible');
    });
});